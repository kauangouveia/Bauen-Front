import { Container, ContainerChat } from "./styles";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState } from "react";
import io from "socket.io-client";

const socket = io('http://localhost:3535')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

function Chat() {

  // const [username, setUser]

  const [message, updateMessage] = useState("");
  const [messages, updateMessages] = useState([]);

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      updateMessages([...messages, {
        id : 1,
        message
      }])
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
                    onChange={handleInputChange}
                    value={message}
                  />
                </label>
                <button type="submit">
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
