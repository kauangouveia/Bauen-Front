import Header from "../../components/Header";
import { Container } from "./styles";
import search from "../../assets/search.png";
import chat from "../../assets/chat.svg";
import filter from "../../assets/filter.svg";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import {
  SearchContainer,
  ContainerFilters,
  ContainerResult,
  ContainerFeed,
  ContainerProfile,
  CardProfile,
} from "./styles";
import user from "../../assets/user.png";
import menu from "../../assets/menu.svg";
import love from "../../assets/love.svg";

function ListServices() {
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
            <img src={search} alt="procurar" />
          </div>
        </SearchContainer>
        <ContainerFilters>
          <div className="Filters">
            <img src={filter} alt="filtros" />
            <h1>Ordenar por:</h1>
            <h2>Recentes</h2>
            <h2>Avaliação</h2>
            <h2>Quantidade de estrelas</h2>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>0 Resultados</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} alt="usuario" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Nome do usúario</h2>
                    <Star />
                    <h3>Quantidade de projetos realizados</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={love} alt="amei" />
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services">
                      <h4>Função</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={chat} alt="chat" />
                <h2>Contatar</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} alt="usuario" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Nome do usúario</h2>
                    <Star />
                    <h3>Quantidade de projetos realizados</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={love} alt="amei" />
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services">
                      <h4>Função</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={chat} alt="chat" />
                <h2>Contatar</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} alt="usuario" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Nome do usúario</h2>
                    <Star />
                    <h3>Quantidade de projetos realizados</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={love} alt="amei" />
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services">
                      <h4>Função</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={chat} alt="chat" />
                <h2>Contatar</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} alt="usuario" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Nome do usúario</h2>
                    <Star />
                    <h3>Quantidade de projetos realizados</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={love} alt="amei" />
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services">
                      <h4>Função</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={chat} alt="chat" />
                <h2>Contatar</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} alt="usuario" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Nome do usúario</h2>
                    <Star />
                    <h3>Quantidade de projetos realizados</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={love} alt="amei" />
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services">
                      <h4>Função</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={chat} alt="chat" />
                <h2>Contatar</h2>
              </div>
            </CardProfile>
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default ListServices;
