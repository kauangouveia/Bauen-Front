import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import location from "../../assets/location.svg";
import menu from "../../assets/menu.svg";
import { Container, ProfileContainer, InformationsContainer } from "./styles";

function ProfileClient() {

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">  
        </div>
        <h1>Nome de usuario</h1>
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
    </Container>
  );
}

export default ProfileClient;
