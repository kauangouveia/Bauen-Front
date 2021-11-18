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
import { useEffect } from "react";
import { useState } from "react";

function FastServices() {
  const [service, setService] = useState([]);
  const providerId = localStorage.getItem("id");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const data = await listAcceptServices.list(providerId);
      setService(data);
      
    } catch (error) {
      console.log("error")
    }
  }, []);
  console.log(service);
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
              Fulano de tal, atualmente você possui {service.length} serviços em
              andamento
            </h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {service.map((item) => (
              <CardProfile>
                <div className="Profile">
                  <div className="ProfileImage">
                    <img src={item.photo} alt="imagem do perfil" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.title_of_project}</h2>
                      <h3>{item.nameClient}</h3>
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
                  <h2>Concluído</h2>
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

export default FastServices;
