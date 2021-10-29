import Header from "../../components/Header";
import Footer from "../../components/Footer";
import locationWhite from "../../assets/localtionWhite.svg";
import { Container, ProfileContainer, InformationsContainer } from "./styles";
import chatlogobauen from "../../assets/chatlogobauen.png"
function ProfileClient() {
  const nameProfile = localStorage.getItem("name");

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
        </div>
        <div className="info">
          <h2>
            <img src={locationWhite} alt="test" />
            Algum lugar{" "}
          </h2>{" "}
          <h1>{nameProfile}</h1>
          <div className="chat"> <img src={chatlogobauen} alt="test" /></div>

        </div>

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
