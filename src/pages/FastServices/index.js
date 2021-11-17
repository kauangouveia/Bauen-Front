import Header from "../../components/Header";
import { Container } from "./styles";
import search from "../../assets/search.png";
import like from "../../assets/like.svg";
import thunder from "../../assets/thunder.svg";
import Footer from "../../components/Footer";
import {
  SearchContainer,
  ContainerFilters,
  ContainerResult,
  ContainerFeed,
  ContainerProfile,
  CardProfile,
} from "./styles";
import menu from "../../assets/menu.svg";
import { listFastServices } from "../../services";
import { useState } from "react";
import { useEffect } from "react";

function FastServices() {
  const [fastService, setFastService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listFastServices.fastService();
    setFastService(data.data);
  }, []);

  console.log(fastService.length)

  const teste = (item, nameUser, title, idClient)=>{
    console.log(item, nameUser, title, idClient)
    }
  return (
    <>
      <Container>
        <Header />
        <SearchContainer>
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
        </SearchContainer>
        <ContainerFilters>
          <div className="Filters">
            <img src={thunder} alt="trovao" />
            <h1>Serviços rápidos</h1>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
            <h2>{fastService.length} Resultados</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            {fastService.map((item)=>(

            <CardProfile key={item.id_client_fast_services}>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={item.photoService} alt="usuarios" />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>{item.title}</h2>
                    <h3>{item.name}</h3>
                    <h3>{item.typeService}</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} alt="menu" />
                    </div>
                    <div className="Services"></div>
                  </div>
                </div>
              </div>
              <div className="Contact" onClick={()=>teste(item.idTableIntermediary, item.name, item.title, item.id)}>
                <img src={like} alt="gostei" />
                <h2>Aceitar</h2>
              </div>
            </CardProfile>
            ))}

          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default FastServices;
