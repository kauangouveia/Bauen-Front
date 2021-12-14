/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import { Container } from "./styles";
import {
  listpendingFastServices,
  confirmService,
  deleteFastService,
} from "../../services";
import chat from "../../assets/chat.svg";
import close from "../../assets/closeService.png";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FastServices() {
  const [service, setService] = useState([]);
  const providerId = localStorage.getItem("id");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listpendingFastServices.list(providerId);
    setService(data);
  }, []);

  const finishService = async (IdFastService) => {
    const service = await confirmService.confirm(IdFastService);

    toast.success(service);
  };

  const username = localStorage.getItem("name");

  const cancelFastService = async (idFast) => {
    try {
     await deleteFastService.deleteService(idFast);
      toast.success("Serviço cancelado com sucesso");
    } catch (error) {
      console.log("erro");
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
              {username}, atualmente você possui {service.length} serviços em
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
                    <img src={item.photo_service} alt="imagem do perfil" />
                  </div>
                  <div className="Informations">
                    <div className="NameAndRating">
                      <h2>{item.title}</h2>
                      <h3>{item.name}</h3>
                      <h4>
                        {item.finished_at_by_service_provider === null
                          ? "Serviço ainda não finalizado"
                          : "Serviço finalizado, aguardando confirmação do cliente"}
                      </h4>
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
                    src={confirmed}
                    alt="confirmação"
                    onClick={() =>
                      finishService({ idServiceFast: item.id_fast_service })
                    }
                  />
                  <h2>Concluído</h2>
                </div>
                <div
                  className="Contact"
                  onClick={() =>
                    cancelFastService({
                      idFastService: item.id_fast_service,
                    })
                  }
                >
                  <img src={close} alt="Cancelar serviço" />
                  <h2>Cancelar serviço</h2>
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
