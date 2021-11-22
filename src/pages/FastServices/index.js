import Header from "../../components/Header";
import { Container } from "./styles";
import search from "../../assets/search.png";
import like from "../../assets/like.svg";
import thunder from "../../assets/thunder.svg";
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
import { listFastServices, acceptServices } from "../../services";
import { useState } from "react";
import { useEffect } from "react";

function FastServices() {
  const [fastService, setFastService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listFastServices.fastService();
    setFastService(data.data);
  }, []);

  const providerId = localStorage.getItem("id");
  const sendAcceptService = async (
    idTableIntermediary,
    idclient,
    id_service_provider,
    nameClient,
    titleProject,
    photoService
  ) => {
    try {
      const dataService = await acceptServices.accept({
        idTableIntermediary: idTableIntermediary,
        idClient : idclient,
        idServiceProvider: id_service_provider,
        nameClient: nameClient,
        titleProject: titleProject,
        photo: photoService,
      });
      console.log(dataService, "funcionou");
    } catch (error) {
      console.log("erro");
    }
  };
  console.log(fastService)
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
            <img src={thunder} alt="trovao" />
            <h1>Serviços rápidos</h1>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>{fastService.length} Resultados</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {fastService.map((item) => (
              <CardProfile key={item.id_client_fast_services}>
                <div className="Profile">
                  <div className="ProfileImage">
                    <img src={item.photoService} alt="usuarios" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.title}</h2>
                      <h3>{item.name}</h3>
                      <h3>{item.typeService}</h3>
                    </div>
                    <div className="Options">
                      <div className="Favorite">
                        <img src={menu} alt="menu" />
                      </div>
                      <div className="Services"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="Contact"
                  onClick={() =>
                    sendAcceptService(
                      item.idTableIntermediary,
                      item.id,
                      providerId,
                      item.name,
                      item.title,
                      item.photoService
                    )
                  }
                >
                  <img src={like} alt="gostei" />
                  <h2>Aceitar</h2>
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
