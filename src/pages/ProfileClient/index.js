import Header from "../../components/Header";
import Footer from "../../components/Footer";
import user from "../../assets/user.png";
import locationWhite from "../../assets/localtionWhite.svg";
import { Container, ProfileContainer, InformationsContainer, ModalContainer } from "./styles";
import chatlogobauen from "../../assets/chatlogobauen.png"
import { sendPhoto, findPhoto } from "../../services";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";



function ProfileClient() {

  const [imageProfile, setImageProfile] = useState([]);
  useEffect(async () => {
    const data = await findPhoto.findPhoto();
    setImageProfile(data.photo);
  }, []);

  const [isOpenModalService, setIsOpenModalService] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(true);
  const nameProfile = localStorage.getItem("name");
  const locationOfServiceProvier = localStorage.getItem("location")

  const imgRef = useRef();
  const [image, setImage] = useState(null);

  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);

    const data = new FormData();
    data.append("photoProfile", e.target.files[0]);
    try {
      const response = await sendPhoto.sendPhoto(data);
    } catch (error) { }
  };

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <img src={user} alt="Foto de perfil" />
        </div>
        <div className="AreaInfo">
          <div className="AreaLocation">
            <img src={locationWhite} alt="test" />
            {locationOfServiceProvier}
          </div>
          <div className="AreaName">
            <h1>{nameProfile}</h1>
          </div>
          <div className="AreaChat">
            <img src={chatlogobauen} alt="test" className="chat" />
          </div>
        </div>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ButtonsOfProfile">
            <button>
              <h2>PRESTADORES FAVORITADOS</h2>
            </button>
            <button>
              <h2>SEUS SERVIÇOS CONTRATADOS</h2>
            </button>
            <button>
              <h2>DADOS PARA PAGAMENTO</h2>
            </button>
          </div>
        </div>
      </InformationsContainer>
      <Footer />
      {isModalVisible && (
        <ModalContainer>
          {isOpenModalImageProfile && (
            <div className="ModalImageProfile">
              <img ref={imgRef} alt="profile" />
              <h3>Primeiro, adicione uma foto para reconhecerem você!</h3>
              <div className="AreaButton">
                <label for="file">Adicionar uma foto</label>
                <input
                  type="file"
                  onChange={(event) => {
                    handleFile(event);
                  }}
                  placeholder="Adicione uma imagem"
                  name="file"
                  id="file"
                />
                <button
                  className="Next"
                  onClick={() => setIsModalVisible(false)}
                >
                  Avançar {">"}
                </button>
              </div>
            </div>
          )}
        </ModalContainer>
      )}
    </Container>
  );
}

export default ProfileClient;
