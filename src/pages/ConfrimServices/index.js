/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import { Container } from "./styles";
import { listAcceptServices } from "../../services";
import search from "../../assets/search.png";
import confirmed from "../../assets/confirmed.svg";
import Footer from "../../components/Footer";
import {
  SearchContainer,
  ContainerFilters,
  ContainerResult,
  ContainerFeed,
  ContainerProfile,
  CardProfile,
} from "./styles";
import menu from "../../assets/menu.svg";
function CofirmServices() {
  return (
    <>
      <Container>
        <Header />
        <SearchContainer>
          <div className="InputWithImg">
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="O que você precisa?"
                />
              </label>
            </form>
            <img src={search} alt="" />
          </div>
        </SearchContainer>
        <ContainerFilters>
          <div className="Filters">
            <h1>Serviços em andamento</h1>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>
              Fulano de tal, atualmente você possui  serviços em
              andamento
            </h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img  alt="imagem do perfil" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>nome do prestador</h2>
                    <h3>data de inicio</h3>
                    <h3>tipo de serviço</h3>
                    
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services"></div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} alt="confirmação" />
                <h2>Confirmar</h2>
              </div>
            </CardProfile>
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default CofirmServices;
