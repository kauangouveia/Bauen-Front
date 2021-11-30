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
import arquiteto from "../../assets/arquiteto.png";
import arquitetoWhite from "../../assets/arquitetoWhite.png";
import azulejista from "../../assets/azulejista.png";
import azulejistaWhite from "../../assets/azulejistaWhite.png";
import carpinteiro from "../../assets/carpinteiro.png";
import carpinteiroWhite from "../../assets/carpinteiroWhite.png";
import eletrecista from "../../assets/eletrecista.png";
import eletrecistaWhite from "../../assets/eletrecistaWhite.png";
import encanador from "../../assets/encanador.png";
import encanadorWhite from "../../assets/encanadorWhite.png";
import engenheiro from "../../assets/engenheiro.png";
import engenheiroWhite from "../../assets/engenheiroWhite.png";
import gesseiro from "../../assets/gesseiro.png";
import gesseiroWhite from "../../assets/gesseiroWhite.png";
import jardineiro from "../../assets/jardineiro.png";
import jardineiroWhite from "../../assets/jardineiroWhite.png";
import marceneiro from "../../assets/marceneiro.png";
import marceneiroWhite from "../../assets/marceneiroWhite.png";
import pedreiro from "../../assets/pedreiro.png";
import pedreiroWhite from "../../assets/pedreiroWhite.png";
import pintor from "../../assets/pintor.png";
import pintorWhite from "../../assets/pintorWhite.png";
import vidraceiro from "../../assets/vidraceiro.png";
import vidraceiroWhite from "../../assets/vidraceiroWhite.png";
import component2 from "../../assets/component2.svg";
import component3 from "../../assets/component3.svg";
import component4 from "../../assets/component4.svg";
import component5 from "../../assets/component5.svg";
import { useEffect } from "react";
import React, { useState } from "react";
import { listservice } from "../../services";

function Home() {
  const [service, setService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listservice.listService();
    setService(data.services);
  }, []);
  // const date = new Date();
  // const teste = date.getFullYear() +" "+ date.getMonth() +" "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  // console.log(teste);  
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
                    placeholder="O que você precisa?"
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
            
              <div className="AreaOfServices" >
                <img className="HomeLight" src={arquitetoWhite} alt="Tipo1" />
                <img className="Home" src={arquiteto} alt="Tipo" />
                <h2>Arquiteto</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={azulejistaWhite} alt="Tipo1" />
                <img className="Home" src={azulejista} alt="Tipo" />
                <h2>Azulejista</h2>
              </div>
              
              <div className="AreaOfServices" >
                <img className="HomeLight" src={carpinteiroWhite} alt="Tipo1" />
                <img className="Home" src={carpinteiro} alt="Tipo" />
                <h2>Carpinteiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={eletrecistaWhite} alt="Tipo1" />
                <img className="Home" src={eletrecista} alt="Tipo" />
                <h2>Eletrecista</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={encanadorWhite} alt="Tipo1" />
                <img className="Home" src={encanador} alt="Tipo" />
                <h2>Encanador</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={engenheiroWhite} alt="Tipo1" />
                <img className="Home" src={engenheiro} alt="Tipo" />
                <h2>Engenheiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={gesseiroWhite} alt="Tipo1" />
                <img className="Home" src={gesseiro} alt="Tipo" />
                <h2>Gesseiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={jardineiroWhite} alt="Tipo1" />
                <img className="Home" src={jardineiro} alt="Tipo" />
                <h2>Jardineiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={marceneiroWhite} alt="Tipo1" />
                <img className="Home" src={marceneiro} alt="Tipo" />
                <h2>Marceneiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={pedreiroWhite} alt="Tipo1" />
                <img className="Home" src={pedreiro} alt="Tipo" />
                <h2>Pedreiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={pintorWhite} alt="Tipo1" />
                <img className="Home" src={pintor} alt="Tipo" />
                <h2>Pintor</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={vidraceiroWhite} alt="Tipo1" />
                <img className="Home" src={vidraceiro} alt="Tipo" />
                <h2>Vidraceiro</h2>
              </div>
       
          </div>
        </CardContainerServices>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
