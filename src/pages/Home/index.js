import { Container, SloganContainer,CardContainer } from "./styles";
import Header from "../../components/Header";
import Illustration from "../../assets/Illustration.svg";
import search from "../../assets/search.png";
import doing from "../../assets/doing.svg";


function Home() {
  return (
    <>
      <Header />
      <Container>
        <SloganContainer>
            <div className="InputAndSlogan">
              <h1>
                Nós conectamos a solução de um modo <br />{" "}
                <span>simples para você!</span>{" "}
              </h1>
              <div className="InputWithImg">
                <form>
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="O que você precisa"
                    />
                  </label>
                </form>
                <img src={search} alt="" />
              </div>
            </div>
            <div className="Illustration">
              <img src={Illustration} alt="" />
            </div>
        </SloganContainer>
        
        <CardContainer>
            <div><img src={doing} alt="" /></div>
            <div></div>
            <div></div>
            <div></div>
            {/* Alinhar as imagens no centro */}
        </CardContainer>
      </Container>
    </>
  );
}

export default Home;
