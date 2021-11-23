import { Container, ContainerChat, ModalContainer } from "./styles";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import constructor from "../../assets/constructor.svg";
import { useHistory } from "react-router";

const socket = io.connect("http://localhost:3001");
const nameProfile = localStorage.getItem("name");
let room = localStorage.getItem("room");

const joinRoom = (sala, name) => {
  socket.emit("join_room", room, nameProfile);
};

function Chat() {
  const [isOpenModalWarning, setIsOpenModalWarning] = useState(true);

  const [currentMessage, setCurrentMessage] = useState("");

  const history = useHistory();

  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (socket, username, room) => {
    if (currentMessage !== "") {
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
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const type = localStorage.getItem("type");
  const backProfile = () => {
    if (type === "provider") {
      history.push("/profile");
    } else {
      history.push("/profilevclient");
    }
  };
  return (
    <Container>
      <Header />
      <ContainerChat>
        <div className="ChatBox">
          <div className="Conversation">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={nameProfile === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p className="time">{messageContent.time}</p>
                      <p className="name">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ContainerSendMessage">
            <div className="Emojis">
              <img src={clip} alt="anexo de imagens" />
            </div>
            <div className="Messages">
              <input
                type="text"
                value={currentMessage}
                placeholder="Digite algo aqui...."
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter" &&
                    sendMessage(socket, nameProfile, room);
                }}
              />

              <button onClick={() => sendMessage(socket, nameProfile, room)}>
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
              <button className="Back" onClick={() => backProfile()}>
                Não desejo
              </button>
              <button
                className="Next"
                onClick={() =>
                  setIsOpenModalWarning(false, joinRoom(room, nameProfile))
                }
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
