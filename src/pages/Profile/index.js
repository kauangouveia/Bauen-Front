import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import storm from "../../assets/storm.svg";
import time from "../../assets/time.svg";
import chat from "../../assets/chat.svg";
import addWhite from "../../assets/addWhite.png";
import LoadingPadrao from "../../components/LoadingPattern";
import location from "../../assets/location.svg";
import reward from "../../assets/reward.svg";
import warning from "../../assets/warning.svg";
import menu from "../../assets/menu.svg";
import bauenBlackLogo from "../../assets/bauenBlackLogo.png";
import close from "../../assets/close.png";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  Container,
  ProfileContainer,
  InformationsContainer,
  ModalContainer,
} from "./styles";
import {
  listservice,
  sendPhoto,
  findPhoto,
  sendTypeOfService,
  checkingPhotoModal,
  showingServices,
  portifolio,
} from "../../services";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);
  const [isOpenModalPortifolio, setOpenModalPortifolio] = useState(false);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(false);
  const [isOpenModalService, setIsOpenModalService] = useState(false);
  const locationOfServiceProvier = localStorage.getItem("location");
  const [loadingRun, setLoadingRun] = useState(false);

  const nameProfile = localStorage.getItem("name");

  // Analisando caso haja foto de perfil
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const data = await checkingPhotoModal.checking();

      if (data.message === "Contem foto no perfil") {
        setIsModalVisible(false, setIsOpenModalWarning(false));
      } else {
        setIsModalVisible(true);
      }
    } catch (error) {}
  }, []);

  // Adicionando preview de foto
  const imgRef = useRef();
  const [image, setImage] = useState(null);
  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  // Analisando se existe foto no modal
  const checkingPhoto = () => {
    setIsOpenModalService(true, setIsOpenModalImageProfile(false));
  };

  // Inserindo foto de perfil e fazendo validação caso o campo estaja nulo
  const photoProfile = async () => {
    const data = new FormData();
    if (image === null) {
      return alert("Por favor adicone uma foto de perfil");
    } else {
      checkingPhoto();
      data.append("photoProfile", image);
      try {
        await sendPhoto.sendPhoto(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Buscando foto de perfil
  const [imageProfile, setImageProfile] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await findPhoto.findPhoto();
    setImageProfile(data.photo);
  }, []);

  // Listando todos os tipos de serviços existentes
  const [service, setService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listservice.listService();
    setService(data.services);
  }, []);

  // Armazenando tipo de serviços
  const [typeService, setTypeService] = useState("");
  const handleChange = (e) => {
    setTypeService(e.target.value);
  };
  // Enviando tipo de serviço escolhido
  const envitTypeService = async (service) => {
    try {
      sendTypeOfService.typeService(service);
    } catch (error) {
      console.log("errei");
    }
  };

  // Exibindo tipo de serviço
  const [ProviderType, setProviderType] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await showingServices.findServices();

    setProviderType(data.nameService);
  }, []);
  const history = useHistory();

  const idUserProviderService = localStorage.getItem("id");
  const [imagePortifolio, setImagePortifolio] = useState(null);
  const handleFilePortifolio = async (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      imgRef.current.style.display = "block";
    } else {
      imgRef.current.src = "";
      imgRef.current.style.display = "none";
    }
    setImagePortifolio(e.target.files[0]);
  };

  const sendImgPortifolio = async () => {
    const data = new FormData();
    data.append("portifolioPhoto", imagePortifolio);
    data.append("idProvider", idUserProviderService);

    try {
      await portifolio.provider(data);
      setLoadingRun(false)
      toast.success("Foto adicionada ao portifolio com sucesso");
    } catch (error) {
      console.log("erro");
    }
  };

  const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHouver] = useState(null);
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                className="ratingButton"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="Star"
                color={ratingValue <= (hover || rating) ? "#FFC700" : "#F2F2F2"}
                size={50}
                onMouseEnter={() => setHouver(ratingValue)}
                onMouseLeave={() => setHouver(null)}
              />
            </label>
          );
        })}
        <div className="StarText"></div>
      </div>
    );
  };

  return (
    <Container>
      <ToastContainer />
      <Header />
      <ProfileContainer>
        <div className="AreaReward">
          <img className="Reward" src={reward} alt="reward" />
        </div>
        <div className="PictureProfile">
          <img src={imageProfile} alt="Foto de perfil" />
        </div>
        <div className="AreaName">
          <h1>{nameProfile}</h1>
        </div>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ProfilesText">
            <h2>
              <img src={location} alt="localização" />
              {locationOfServiceProvier}{" "}
            </h2>{" "}
            <p>Mais de 150 projetos realizados</p>
          </div>
          <div className="AreaStars">
            <div className="CenterStar">
              <StarRating />
            </div>
          </div>
          <div className="ButtonsOfProfile">
            <button
              className="ButtonsIcons"
              onClick={() => history.push("/fastservices")}
            >
              <img className="Storm" src={storm} alt="localização" />
            </button>
            <button
              className="ButtonsIcons"
              onClick={() => history.push("/pendingservices")}
            >
              <img className="Time" src={time} alt="localização" />
            </button>
            <button
              className="ButtonsIcons"
              onClick={() => history.push("/chat")}
            >
              <img className="Chat" src={chat} alt="localização" />
            </button>
            <label for="Portifolio" className="plus">
              <img
                className="add"
                src={addWhite}
                alt="localização"
                onClick={() =>
                  setIsModalVisible(true, setOpenModalPortifolio(true))
                }
              />
            </label>
          </div>
          <img className="Menu" src={menu} alt="menu" />
        </div>
        <div className="services">
          <div className="servicesType">
            <div className="Card">
              <h3>{ProviderType}</h3>
            </div>
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
                  onClick={(event) =>
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
      

          {isOpenModalPortifolio && (
            
            <div className="ModalPortifolio">
              <div className="fechar">
                <div className="tile">
                  <h2>Adicione uma foto ao seu Portfólio</h2>
                </div>
                <div className="buttonFechar">
                  <img
                    src={close}
                    alt="fechar"
                    onClick={() =>
                      setIsModalVisible(false, setOpenModalPortifolio(false))
                    }
                  />
                </div>
              </div>
              <div className="AreaIamge">
                {" "}
                <img ref={imgRef}/>
                {loadingRun === false ? "" : <LoadingPadrao />}
              </div>
              <div className="AreaButton">
                <label for="file" className="Adicionar">
                  Escolher Foto{" "}
                </label>
                <input
                  type="file"
                  onChange={(event) => {
                    handleFilePortifolio(event);
                  }}
                  placeholder="Adicione uma imagem"
                  name="file"
                  id="file"
                />
                <button
                  className="Next"
                  onClick={() => {
                    sendImgPortifolio();
                    setLoadingRun(true);
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
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
                  onClick={(event) => {
                    photoProfile();
                  }}
                >
                  Avançar {">"}
                </button>
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
                <select className="OptionsServices" onChange={handleChange}>
                  {service?.map((item) => (
                    <option value={item.nameService} key={item.id_service}>
                      {item.nameService}
                    </option>
                  ))}
                </select>
                <button
                  className="Next"
                  onClick={() =>
                    setIsModalVisible(
                      false,
                      envitTypeService({ service: typeService })
                    )
                  }
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
