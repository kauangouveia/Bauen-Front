import {
  Container,
  SloganContainer,
  CardContainer,
  CardContainerServices,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Illustration from "../../assets/Illustration.svg";
import search from "../../assets/search.png";
import doing from "../../assets/doing.svg";
import hire from "../../assets/hire.svg";
import money from "../../assets/money.svg";
import register from "../../assets/register.svg";
import home from "../../assets/home.svg";

function Home() {
  return (
    <>
      <Container>
        <Header />
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
          <div className="AreaOfPicture">
            <div>
              <img src={register} alt="" />
            </div>
            <h1>Cadastre-se</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={hire} alt="" />
            </div>
            <h1>Contrate</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={doing} alt="" />
            </div>
            <h1>Realize</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={money} alt="" />
            </div>
            <h1>Pague</h1>
          </div>
        </CardContainer>
        <CardContainerServices>
          <div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
          </div>
          <div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
            <div className="AreaOfServices">
              <img src={home} alt="Tipo" />
              <h1>Trabalho</h1>
            </div>
          </div>
        </CardContainerServices>
        <Footer/>
      </Container>
    </>
  );
}

export default Home;
