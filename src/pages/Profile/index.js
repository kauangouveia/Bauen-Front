import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import location from "../../assets/location.svg";
import warning from "../../assets/warning.svg";
import imgProfile from "../../assets/imgProfile.png";
import menu from "../../assets/menu.svg";
import bauenBlackLogo from "../../assets/bauenBlackLogo.png"
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import {
  Container,
  ProfileContainer,
  InformationsContainer,
  ModalContainer,
} from "./styles";

import React, { useState } from "react";
// import { useEffect } from "react";

import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
function Profile() {
  const nameProfile = localStorage.getItem("name");
  const locationOfServiceProvier = localStorage.getItem("location");
  const [isOpen, setIsOpen] = useState(true);


  const [isModalVisible, setIsModalVisible] = useState(true);

  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(false);
  const [isOpenModalService, setIsOpenModalService] = useState(false);

  // let [room, setRoom] = useState("");


  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  let room = getRandomArbitrary(1000,1)

  const joinRoom = (sala, name) => {
    // if (nameProfile !== "" && room !== "") 
      socket.emit("join_room", room, nameProfile);
    
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
            <button onClick={() => joinRoom(room, nameProfile)}>
              <h2>ENTRAR EM CONTATO</h2>
            </button>
            <img src={menu} alt="test" />
          </div>
        </div>
      </InformationsContainer>
      <SliderPortifolio />
      <SliderComents />
      <Footer />


      {isModalVisible && <ModalContainer>

      {isOpenModalWarning && <div className="ModalWarning">
        <img src={warning} alt="warning" />
        <h2>Perfil incompleto!</h2>
        <h3>Por favor, complete seu cadastro para continuar</h3>
        <div className="AreaButton">
          <button className="Next" onClick={()=> setIsOpenModalImageProfile(true, setIsOpenModalWarning(false))}>Avançar {">"}</button>
        </div>
      </div>}

      {isOpenModalImageProfile && <div className="ModalImageProfile">
        <img src={imgProfile} alt="profile" />
        <h3>Primeiro, adicione uma foto para reconhecerem você!</h3>
        <div className="AreaButton">
          <button>Escolher foto de perfil</button>
          <button className="Next" onClick={()=> setIsOpenModalService(true, setIsOpenModalImageProfile(false))}>Avançar {">"}</button>
        </div>
      </div>}

      {isOpenModalService && <div className="ModalService">
      <button className="Close" onClick={()=> setIsOpenModalImageProfile(true, setIsOpenModalService(false))}><h2>{"<"}</h2></button>
        <img src={bauenBlackLogo} alt="logo" />
        <h3>Escolha o tipo de serviço que deseja prestar</h3>
        <div className="AreaButton">
          <select name="services" className="OptionsServices">
            <option value="Op1">Opção 01</option>
            <option value="Op2">Opção 02</option>
            <option value="Op3">Opção 03</option>
            <option value="Op4">Opção 04</option>
            <option value="Op5">Opção 05</option>
            <option value="Op6">Opção 06</option>
            <option value="Op7">Opção 07</option>
            <option value="Op8">Opção 08</option>
            <option value="Op9">Opção 09</option>
            <option value="Op10">Opção 10</option>
            <option value="Op11">Opção 11</option>
            <option value="Op12">Opção 12</option>
          </select>
          <button className="Next" onClick={()=> setIsModalVisible(false)}>Finalizar</button>
        </div>
      </div>}
      
      </ModalContainer>}


      {isOpen && (
        <ModalContainer>
          <div className="ModalAviso">
            <img src={warning} alt="warning" />
            <h2>Perfil incompleto!</h2>
            <h3>Por favor, complete seu cadastro para continuar</h3>
            <div className="AreaButton">
              <button onClick={() => setIsOpen(false)}>Avançar {">"}</button>
            </div>
          </div>
        </ModalContainer>
      )}

    </Container>
  );
}

export default Profile;
