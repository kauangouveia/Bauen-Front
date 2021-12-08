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
import { listFastServices, acceptAndEnvitFastService } from "../../services";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FastServices() {
  const [fastService, setFastService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listFastServices.fastService();
    setFastService(data.data);
  }, []);
  const providerId = localStorage.getItem("id");

  const accept = async (idService) => {
    try {
      const data = await acceptAndEnvitFastService.acceptService(idService);
      toast.success("Serviço rápido aceito com sucesso");
      console.log(data);
      
    } catch (error) {
      console.log("error");
    }
  };
  console.log(fastService);
  return (
    <>
      <ToastContainer />
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
                    <img src={item.photo_service} alt="usuarios" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.title}</h2>
                      <h3>{item.name}</h3>
                      <h4>{item.type_service}</h4>
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
                  <img
                    src={like}
                    alt="gostei"
                    onClick={() =>
                      accept({
                        idService: item.id_fast_service,
                        id: parseInt(providerId),
                      })
                    }
                  />
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
