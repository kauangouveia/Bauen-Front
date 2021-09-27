import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Star from "../../components/Star";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
import SliderPortifolio from "../../components/SliderPortifolio";
import SliderComents from "../../components/SliderComents";
import { Container, ProfileContainer, InformationsContainer } from "./styles";

function Profile() {
  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <div className="PictureAward"></div>
        </div>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ProfilesText">
            <h2>
              <img src={location} alt="test" />
              Algum Lugar{" "}
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
    </Container>
  );
}

export default Profile;
