import Header from "../../components/Header";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg"
import star from "../../assets/star.svg"

import starWhitoutColor from "../../assets/starWhitoutColor.svg"
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
              <img src={location} />
              Algum Lugar{" "}
            </h2>{" "}
            <p>Mais de 150 projetos realizados</p>
          </div>
          <div className="Stars">
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={starWhitoutColor}/>

          </div>
          <div className="ButtonsOfProfile">
            <button>
              ENTRAR EM CONTATO
            </button>
            <img src={menu}/>
          </div>
        </div>
      </InformationsContainer>
    </Container>
  );
}

export default Profile;
