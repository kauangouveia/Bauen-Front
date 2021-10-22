import { Container, ContainerChat, ModalContainer } from "./styles";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState } from "react";
import io from "socket.io-client";
import constructor from "../../assets/constructor.svg";
import { useHistory } from "react-router";

const socket = io.connect("http://localhost:3001");
const nameProfile = localStorage.getItem("name");

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let room = getRandomArbitrary(1000, 1);

const joinRoom = (sala, name) => {
  socket.emit("join_room", room, nameProfile);
};

function Chat() {
  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);

  const [currentMessage, setCurrentMessage] = useState("");

  const history = useHistory();

  const sendMessage = async (socket, username, room) => {
    if (currentMessage !== "") {
      console.log("entrei aqui");
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  return (
    <Container>
      <Header />
      <ContainerChat>
        <div className="ChatBox">
          <div className="Conversation">
            <ul>
              <li className="listItem mine">
                <span className="minemessage"></span>
              </li>
            </ul>
          </div>
          <div className="ContainerSendMessage">
            <div className="Emojis">
              <img src={clip} alt="anexo de imagens" />
            </div>
            <div className="Messages">
              <form>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite algo aqui...."
                    onChange={(event) => {
                      setCurrentMessage(event.target.value);
                    }}
                  />
                </label>
              </form>
                <button onClick={sendMessage(socket,nameProfile,room)}>
                  <h2>Enviar</h2>
                </button>
            </div>
          </div>
        </div>
      </ContainerChat>
      {isOpenModalWarning && (
        <ModalContainer>
          <div className="ModalWarning">
            <img src={constructor} alt="warning" />
            <h3>Deseja mesmo iniciar trativas com este prestador ?</h3>
            <div className="AreaButton">
              <button className="Back" onClick={() => history.push("/profile")}>
                Não desejo
              </button>
              <button
                className="Next"
                onClick={() => setIsOpenModalWarning(false, joinRoom(room, nameProfile))}
              >
                Desejo iniciar
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </Container>
  );
}
export default Chat;
