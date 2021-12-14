/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import { Container, ModalContainer } from "./styles";
import {
  listServicesInProgress,
  confirmFinishFastService,
  sendComments,
  deleteFastService
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
import { useHistory } from "react-router-dom";

function ServicesInProgress() {
  
  const history = useHistory  ();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpenModalComment, setOpenModalComment] = useState(false);
  const [commetClient, setCommentClient] = useState("");
  const [provider, setProvider] = useState();

  const client = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  const [service, setService] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listServicesInProgress.list(client);
    setService(data);
  }, []);

  const saveRoomProvider = (room) => {
    localStorage.setItem("roomProvider", room);
  };

  const confirmServices = async (idFastService) => {
    try {
      const confirmFastService = await confirmFinishFastService.confirmFinished(
        idFastService
      );
      toast.success(confirmFastService.message);
    } catch (error) {
      console.log("werr");
    }
  };

  const commentProvider = async (idProvider, idClient, comments) => {
    try {
      const message = await sendComments.comments(
        idProvider,
        idClient,
        comments
      );
      toast.success(message);
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
                  onClick={() => {
                    setIsModalVisible(
                      true,
                      setOpenModalComment(true),
                      setProvider(item.id_service_provider)
                    );
                    confirmServices({ idService: item.id_fast_service });
                  }}
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
                <div className="Contact"
                  onClick={() => {
                    saveRoomProvider(item.room);
                    history.push("/chat");
                  }}
                >
                  <img src={chat} alt="chat" />
                  <h2>Chat</h2>
                </div>
              </CardProfile>
            ))}
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
        {isModalVisible && (
          <ModalContainer>
            {isOpenModalComment && (
              <div className="ModalComment">
                <h2>Por favor insira um comentário sobre este prestador</h2>

                <div className="message">
                  <input
                    type="text"
                    name="coment"
                    placeholder="Comentário"
                    maxlength="50"
                    onChange={(event) => setCommentClient(event.target.value)}
                  />
                </div>
                <div className="AreaButton">
                  <button
                    className="Next"
                    onClick={() => {
                      commentProvider({
                        idProvider: provider,
                        idClient: client,
                        coment: commetClient,
                      });
                      setIsModalVisible(false, setOpenModalComment(false));
                    }}
                  >
                    Avançar {">"}
                  </button>
                </div>
              </div>
            )}
          </ModalContainer>
        )}
      </Container>
    </>
  );
}

export default ServicesInProgress;
