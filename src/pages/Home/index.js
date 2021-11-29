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
import arquiteto from "../../assets/arquiteto.svg";
import arquitetoWhite from "../../assets/arquitetoWhite.svg";
import azulejista from "../../assets/azulejista.svg";
import azulejistaWhite from "../../assets/azulejistaWhite.svg";
import carpinteiro from "../../assets/carpinteiro.svg";
import carpinteiroWhite from "../../assets/carpinteiroWhite.svg";
import eletrecista from "../../assets/eletrecista.svg";
import eletrecistaWhite from "../../assets/eletrecistaWhite.svg";
import encanador from "../../assets/encanador.svg";
import encanadorWhite from "../../assets/encanadorWhite.svg";
import engenheiro from "../../assets/engenheiro.svg";
import engenheiroWhite from "../../assets/engenheiroWhite.svg";
import gesseiro from "../../assets/gesseiro.svg";
import gesseiroWhite from "../../assets/gesseiroWhite.svg";
import jardineiro from "../../assets/jardineiro.svg";
import jardineiroWhite from "../../assets/jardineiroWhite.svg";
import marceneiro from "../../assets/marceneiro.svg";
import marceneiroWhite from "../../assets/marceneiroWhite.svg";
import pedreiro from "../../assets/pedreiro.svg";
import pedreiroWhite from "../../assets/pedreiroWhite.svg";
import pintor from "../../assets/pintor.svg";
import pintorWhite from "../../assets/pintorWhite.svg";
import vidraceiro from "../../assets/vidraceiro.svg";
import vidraceiroWhite from "../../assets/vidraceiroWhite.svg";
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
                <img className="HomeLight" src={encanador} alt="Tipo1" />
                <img className="Home" src={encanadorWhite} alt="Tipo" />
                <h2>Encanador</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={engenheiro} alt="Tipo1" />
                <img className="Home" src={engenheiroWhite} alt="Tipo" />
                <h2>Engenheiro</h2>
              </div>

              <div className="AreaOfServices" >
                <img className="HomeLight" src={gesseiro} alt="Tipo1" />
                <img className="Home" src={gesseiroWhite} alt="Tipo" />
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
