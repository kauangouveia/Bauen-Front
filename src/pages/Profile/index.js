import Header from "../../components/Header";
import Star from "../../components/Star";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
// import star from "../../assets/star.svg"
import Slider from "../../components/Slider";
import SliderComents from "../../components/SliderComents";


// import starWhitoutColor from "../../assets/starWhitoutColor.svg"
import {
  Container,
  ProfileContainer,
  InformationsContainer,
} from "./styles";

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
            <button>ENTRAR EM CONTATO</button>
            <img src={menu} alt="test" />
          </div>
        </div>
      </InformationsContainer>
      <Slider/>
      <SliderComents/>
    
    </Container>
  );
}

export default Profile;
