import { Container, ContainerChat } from "./styles";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState } from "react";

function Chat({ socket, username, room }) {
  const [message, updateMessage] = useState("");
  const [messages, updateMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
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
       await socket.emit("send_message", messageData)
    }
  };

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      updateMessages([
        ...messages,
        {
          id: 1,
          message,
        },
      ]);
      updateMessage("");
    }
  };

  const handleInputChange = (event) => {
    updateMessage(event.target.value);
  };
  return (
    <Container>
      <Header />
      <ContainerChat>
        <div className="ChatBox">
          <div className="Conversation">
            <ul>
              {messages.map((message) => (
                <li className="listItem mine">
                  <span className="minemessage" key={message.id}>
                    {message.message}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ContainerSendMessage">
            <div className="Emojis">
              <img src={clip} alt="anexo de imagens" />
            </div>
            <div className="Messages">
              <form onSubmit={handleFormOnSubmit}>
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
    </Container>
  );
}
export default Chat;
