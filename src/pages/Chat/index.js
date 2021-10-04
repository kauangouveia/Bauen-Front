import { Container, ContainerChat } from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Chat() {
  return (
    <Container>
      <Header />
      <ContainerChat>
          <div className="ChatBox">
            <div className= "ContainerTalk"></div>
            <div className="ContainerSendMessage">

            </div>
          </div>
      </ContainerChat>
      {/* <Footer /> */}
    </Container>
  );
}
export default Chat;
