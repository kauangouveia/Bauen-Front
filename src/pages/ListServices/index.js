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
import menu from "../../assets/menu.svg";
import love from "../../assets/love.svg";
import { useEffect } from "react";
import { useState } from "react";
import { serviceProvider } from "../../services";
import { useHistory } from "react-router";

function ListServicesProvider() {
  const [serviceProviders, setServiceProviders] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await serviceProvider.listServiceProvider();
    setServiceProviders(data);
  }, []);

  const saveRoomProvider = (room) => {
    localStorage.setItem("roomProvider", room);
  };

  const history = useHistory();
  const getProviderId = (id) => {
    localStorage.setItem("idServiceProviderSelect", id);
    history.push("/ProfileVclient");
  };

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
            <h2>{serviceProviders.length} Resultados</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {serviceProviders.map((item) => (
              <CardProfile key={item.id_service_provider}>
                <div
                  className="Profile"
                  onClick={() => getProviderId(item.id_service_provider)}
                >
                  <div className="ProfileImage">
                    <img src={item.photo} alt="usuario" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.name}</h2>
                      <Star />
                      <h3>Quantidade de projetos realizados</h3>
                    </div>
                    <div className="Options">
                      <div className="Favorite">
                        <img src={love} alt="amei" />
                        <img src={menu} alt="menu" />
                      </div>
                      <div className="Services">
                        <h4>{item.nameService}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="Contact"
                  onClick={() => {
                    saveRoomProvider(item.room);
                    history.push("/chat");
                  }}
                >
                  <img src={chat} alt="chat" />
                  <h2>Contatar</h2>
                </div>
              </CardProfile>
            ))}
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default ListServicesProvider;
