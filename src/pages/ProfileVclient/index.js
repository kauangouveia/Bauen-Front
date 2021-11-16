/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Container, ProfileContainer, InformationsContainer } from "./styles";
import { findProviderForClient } from "../../services";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function ProfileVclient() {

  const getIdSelectProvider = localStorage.getItem("idServiceProviderSelect");

  
  const [informationsProvider, setInformationsProvider] = useState([]);

  useEffect(async () => {

    try {
      const data = await findProviderForClient.findProvider(getIdSelectProvider);
      setInformationsProvider(data.data);
      
    } catch (error) {
      console.log(error)
      console.log("erro")
    }
  }, []);
  
  console.log(informationsProvider.name);
  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <img src={informationsProvider.photo} alt="Foto de perfil" />
          <div className="PictureAward"></div>
        </div>
        <h1>{informationsProvider.name}</h1>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ProfilesText">
            <h2>
              <img src={location} alt="localização" />
              {informationsProvider.city}{" "}
            </h2>{" "}
            <p>Mais de 150 projetos realizados</p>
          </div>
          <div className="Stars">
            <Star />
          </div>
          <div className="ButtonsOfProfile">
            <button>
              <h2>ENTRAR EM CONTATO</h2>
            </button>
            <img src={menu} alt="menu" />
          </div>
        </div>
        <div className="services">
          <div className="servicesType">
            <div className="Card">
              <h3>{informationsProvider.nameService}</h3>
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

export default ProfileVclient;
