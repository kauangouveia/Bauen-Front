import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  ProfileContainer,
  InformationsContainer,
} from "./styles";
import {
  listservice,
  findPhoto,
  sendTypeOfService,
  showingServices,
} from "../../services";
import { useEffect } from "react";
import { useRef } from "react";

import "react-toastify/dist/ReactToastify.css";

function ProfileVProvider() {
  const locationOfServiceProvier = localStorage.getItem("location");
  const nameProfile = localStorage.getItem("name");
  
  // Função para entrar no chat
  const history = useHistory();
  const joinRoom = () => {
    history.push("/chat");
  };

  // Adicionando preview de foto
  const imgRef = useRef();
  const [image, setImage] = useState(null);
  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
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
      console.log(service);
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

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <img src={imageProfile} alt="Foto de perfil" />
          <div className="PictureAward"></div>
        </div>
        <h1>{nameProfile}</h1>
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
          <div className="Stars">
            <Star />
          </div>
          <div className="ButtonsOfProfile">
            <button onClick={() => joinRoom()}>
              <h2>ENTRAR EM CONTATO</h2> 
            </button>
            <img src={menu} alt="menu" />
          </div>
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
    </Container>
  );
}

export default ProfileVProvider;
