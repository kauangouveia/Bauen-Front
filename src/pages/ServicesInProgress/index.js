/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import { Container } from "./styles";
import {
  listServicesInProgress,
  confirmFinishFastService,
} from "../../services";
import chat from "../../assets/chat.png";
import search from "../../assets/search.png";
import confirmed from "../../assets/confirmed.svg";
import progress from "../../assets/progress.png";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function ServicesInProgress() {
  const idClient = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  const [service, setService] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listServicesInProgress.list(idClient);
    setService(data);
  }, []);
  console.log(service);

  const confirmServices = async (idFastService) => {
    
    try {
      const confirmFastService = await confirmFinishFastService.confirmFinished(
        idFastService
      );
      toast.success(confirmFastService.message)
    } catch (error) {
      console.log("werr");
    }
  };

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
            <h1>Serviços em andamento</h1>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>
              {name}, atualmente você possui {service.length}{" "}
              {service.length >= 2 ? "serviços" : "serviço"} em andamento
            </h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {service.map((item) => (
              <CardProfile>
                <div className="Profile">
                  <div className="ProfileImage">
                    <img src={item.photo_service} alt="imagem do perfil" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.title}</h2>
                      <h3>{item.type_service}</h3>
                      <h3>{`Aceito por :${item.name}`}</h3>
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
                    confirmServices({ idService: item.id_fast_service })
                  }
                >
                  <img
                    src={
                      item.finished_at_by_service_provider === null
                        ? progress
                        : confirmed
                    }
                    alt="confirmação"
                  />
                  <h2>
                    {item.finished_at_by_service_provider === null
                      ? "em andamento"
                      : "confirmar finalização"}
                  </h2>
                </div>
                <div className="Contact">
                  <img src={chat} alt="chat" />
                  <h2>Chat</h2>
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

export default ServicesInProgress;
