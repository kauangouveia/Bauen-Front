import { Container, ContainerChat } from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Chat() {
  return (
    <Container>
      <Header />
      <ContainerChat>
        <div className="ChatBox">
          <div className="ContainerTalk"></div>
          <div className="ContainerSendMessage">
            <div className="Emojis"></div>
            <div className="Messages">
              <form>
                <label>
                  <input
                    type="email"
                    name="name"
                    placeholder="E-mail"
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
      {/* <Footer /> */}
    </Container>
  );
}
export default Chat;
