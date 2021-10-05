import { Container, ContainerChat } from "./styles";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import clip from "../../assets/clip.svg";
import { useState } from "react";

function Chat() {
  const [message, updateMessage] = useState('');
  
  const [messages, updateMessages] = useState([]);

  const handleFormOnSubmit= (event) => {
    event.preventDefault() 
    if (message.trim()){
      updateMessage('')
    }
  } 

  const handleInputChange= (event) => {
      updateMessage(event.target.value)  
    }
  return (
    <Container>
      <Header />
      <ContainerChat>
        <div className="ChatBox">
          <div className="Conversation">
            <ul>
                {messages.map(m => ())}
              <li className="listItem mine">
                <span className="minemessage"><h3>ola porra</h3></span>
              </li>
              <li className="listItem  other">
                <span className="othermessage"><h3>ola porra</h3></span>
              </li>
              
            </ul>
          </div>
          <div className="ContainerSendMessage">
            <div className="Emojis">
              <img src={clip} alt="anexo de imagens" />
            </div>
            <div className="Messages">
              <form onSubmit={handleFormOnSubmit}>
                <label>
                  <input type="text" name="name" placeholder="Digite algo aqui...." onChange={handleInputChange} value={message} />
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
