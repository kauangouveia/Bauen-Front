/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import SliderPortifolioVclient from "../../components/SliderPortifolioVclient";
import SliderComentsVclient from "../../components/SliderComentsVclient";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Container, ProfileContainer, InformationsContainer } from "./styles";
import {
  findProviderForClient,
  findRoom,
  lisQuantityServices,
} from "../../services";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

function ProfileVclient() {
  const history = useHistory();
  const getIdSelectProvider = localStorage.getItem("idServiceProviderSelect");

  const [informationsProvider, setInformationsProvider] = useState([]);

  useEffect(async () => {
    try {
      const data = await findProviderForClient.findProvider(
        getIdSelectProvider
      );
      setInformationsProvider(data.data);
    } catch (error) {
      console.log(error);
      console.log("erro");
    }
  }, []);
  const provider = localStorage.getItem("idServiceProviderSelect");
  const joinRoom = async () => {
    const data = await findRoom.room(provider);
    localStorage.setItem("roomProvider", data.room);
    history.push("/chat");
  };

  const [quantityServices, setQuantityService] = useState([]);
  // Mostrando quantidade de projetos realizados
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await lisQuantityServices.quantityServices(
      getIdSelectProvider
    );
    setQuantityService(data);
  }, []);

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
            <p>
              {" "}
              {quantityServices.length <= 0
                ? "Nenhum serviço realizado no momento"
                : `${quantityServices.length} projetos realizados`}
            </p>
          </div>
          <div className="Stars">
            <StarRating />
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
              <h3>{informationsProvider.nameService}</h3>
            </div>
          </div>
        </div>
      </InformationsContainer>

      <SliderPortifolioVclient />
      <SliderComentsVclient />
      <Footer />
    </Container>
  );
}

export default ProfileVclient;
