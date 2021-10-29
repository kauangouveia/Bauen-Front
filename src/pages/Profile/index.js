import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import location from "../../assets/location.svg";
import warning from "../../assets/warning.svg";
import imgProfile from "../../assets/imgProfile.png";
import menu from "../../assets/menu.svg";
import bauenBlackLogo from "../../assets/bauenBlackLogo.png";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  ProfileContainer,
  InformationsContainer,
  ModalContainer,
} from "./styles";
import { listservice, sendPhoto } from "../../services";
import { useEffect } from "react";
import { useRef } from "react";

function Profile() {
  const imgRef = useRef();
  const [image, setImage] = useState(null);
  const handleFile = (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(false);
  const [isOpenModalService, setIsOpenModalService] = useState(false);
  const locationOfServiceProvier = localStorage.getItem("location");
  const nameProfile = localStorage.getItem("name");

  const joinRoom = () => {
    history.push("/chat");
  };

  const [service, setService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listservice.listService();
    setService(data.services);
  }, []);

  const onSubmit = async (e) => {
    // e.preventDefault();
    const data = new FormData();
    data.append("photoProfile", image);
    try {
      const response = await sendPhoto.sendPhoto();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <div className="PictureAward"></div>
        </div>
        <h1>{nameProfile}</h1>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ProfilesText">
            <h2>
              <img src={location} alt="test" />
              {locationOfServiceProvier}{" "}
            </h2>{" "}
            <p>Mais de 150 projetos realizados</p>
          </div>
          <div className="Stars">
            <Star />
          </div>
          <div className="ButtonsOfProfile">
            <button onClick={() => joinRoom()}>
              <h2>ENTRAR EM CONTATO</h2>
            </button>
            <img src={menu} alt="test" />
          </div>
        </div>
      </InformationsContainer>
      <SliderPortifolio />
      <SliderComents />
      <Footer />

      {isModalVisible && (
        <ModalContainer>
          {isOpenModalWarning && (
            <div className="ModalWarning">
              <img src={warning} alt="warning" />
              <h2>Perfil incompleto!</h2>
              <h3>Por favor, complete seu cadastro para continuar</h3>
              <div className="AreaButton">
                <button
                  className="Next"
                  onClick={() =>
                    setIsOpenModalImageProfile(
                      true,
                      setIsOpenModalWarning(false)
                    )
                  }
                >
                  Avançar {">"}
                </button>
              </div>
            </div>
          )}

          {isOpenModalImageProfile && (
            <div className="ModalImageProfile">
              <img ref={imgRef} alt="profile" />
              <h3>Primeiro, adicione uma foto para reconhecerem você!</h3>
              <div className="AreaButton">
                <form onSubmit={onSubmit()}>
                  <input type="file" onChange={handleFile} />
                  <button
                    className="Next"
                    onClick={() =>
                      setIsOpenModalService(
                        true,
                        setIsOpenModalImageProfile(false)
                      )
                    }
                    type="submit"
                  >
                    Avançar {">"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {isOpenModalService && (
            <div className="ModalService">
              <button
                className="Close"
                onClick={() =>
                  setIsOpenModalImageProfile(true, setIsOpenModalService(false))
                }
              >
                <h2>{"<"}</h2>
              </button>
              <img src={bauenBlackLogo} alt="logo" />
              <h3>Escolha o tipo de serviço que deseja prestar</h3>
              <div className="AreaButton">
                <select className="OptionsServices">
                  {service?.map((item) => (
                    <option value="Op3" key={item.id_service}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <button
                  className="Next"
                  onClick={() => setIsModalVisible(false)}
                >
                  Finalizar
                </button>
              </div>
            </div>
          )}
        </ModalContainer>
      )}
    </Container>
  );
}

export default Profile;
