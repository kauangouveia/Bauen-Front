import { Container, ContainerChat, ModalContainer } from "./styles";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState } from "react";
import io from "socket.io-client";
import warning from "../../assets/warning.svg";
const socket = io.connect("http://localhost:3001");
const nameProfile = localStorage.getItem("name");

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let room = getRandomArbitrary(1000, 1);

const joinRoom = (sala, name) => {
  socket.emit("join_room", room, nameProfile);
};
function Chat({ socket, username, room }) {
  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const sendMessage = async () => {
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
                <button onClick={sendMessage}>
                  <h2>Enviar</h2>
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContainerChat>

      <ModalContainer>
        <div className="ModalWarning">
          <img src={warning} alt="warning" />
          <h3>Deseja mesmo iniciar trativas com este prestador ?</h3>
          <div className="AreaButton">
            <button
              className="Next"
              onClick={() => setIsOpenModalWarning(false)}
            >
              Avançar {">"}
            </button>
          </div>
        </div>
      </ModalContainer>
    </Container>
  );
}
export default Chat;
