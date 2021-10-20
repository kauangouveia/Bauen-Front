import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Star from "../../components/Star";
import location from "../../assets/location.svg";
import warning from "../../assets/warning.svg"
import menu from "../../assets/menu.svg";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import { Container, ProfileContainer, InformationsContainer, ModalContainer } from "./styles";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const token = localStorage.getItem("token");
  const nameProfile = localStorage.getItem("name");
  const locationOfServiceProvier = localStorage.getItem("location")

  const [isOpen, setIsOpen] = useState(true)

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
             {}{" "}
            </h2>{" "}
            <p>Mais de 150 projetos realizados</p>
          </div>
          <div className="Stars">
            <Star />
          </div>
          <div className="ButtonsOfProfile">
            <button><h2>ENTRAR EM CONTATO</h2></button>
            <img src={menu} alt="test" />
          </div>
        </div>
      </InformationsContainer>
      <SliderPortifolio />
      <SliderComents />
      <Footer/>
      {isOpen && <ModalContainer>
      <div className="ModalAviso">
        <img src={warning} alt="warning"/>
        <h2>Perfil incompleto!</h2>
        <h3>Por favor, complete seu cadastro para continuar</h3>
        <div className="AreaButton">
          <button>Avançar {">"}</button>
        </div>
      </div>
      </ModalContainer>}
    </Container>
  );
}

export default Profile;
