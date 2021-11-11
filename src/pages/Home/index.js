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
import component2 from "../../assets/component2.svg"
import component3 from "../../assets/component3.svg"
import component4 from "../../assets/component4.svg"
import component5 from "../../assets/component5.svg"
import home from "../../assets/home.svg";
import homelight from "../../assets/homelight.svg"
import { useEffect } from "react";
import React, { useState } from "react";
import { listservice } from "../../services";

function Home() {
  const [service, setService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listservice.listService();
    setService(data.services);
    // console.log(data.services)
  }, []);

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
              <img src={component2} alt="" />
            </div>
            <h1>Cadastre-se</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={component3} alt="" />
            </div>
            <h1>Contrate</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={component4} alt="" />
            </div>
            <h1>Realize</h1>
          </div>
          <div className="AreaOfPicture">
            <div>
              <img src={component5} alt="" />
            </div>
            <h1>Pague</h1>
          </div>
        </CardContainer>
        <CardContainerServices>
        <h1>Encontre nossos serviços por categorias</h1>
          <div>
            {service.map((item) => (
              <div className="AreaOfServices" key={item.id_service}>
                <img className="HomeLight" src={homelight} alt="Tipo1" />
                <img className="Home" src={home} alt="Tipo" />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </CardContainerServices>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
