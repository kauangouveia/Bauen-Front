import Header from "../../components/Header"
import {Container} from "./styles";
import search from "../../assets/search.png";
import chat from "../../assets/chat.svg";
import filter from "../../assets/filter.svg";
import Footer from "../../components/Footer";
import {SearchContainer, ContainerFilters, ContainerResult, ContainerFeed, ContainerProfile} from "./styles"

function ListServices(){
    return(
    <>    
        <Container>
            <Header/>
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
                  <img src={filter}/>
                  <h1>Ordenar por:</h1>
                  <h2>Recentes</h2>
                  <h2>Avaliação</h2>
                  <h2>Quantidade de estrelas</h2>
              </div>
            </ContainerFilters>
            <ContainerResult>
                <h2>0 Resultados</h2>
            </ContainerResult>
            <ContainerFeed>
              <ContainerProfile>
                <div className="Profile">
                  <div className="ProfileImage">
                    
                  </div>
                </div>
                <div className="Contact">
                  <img src={chat}/>
                  <h2>Contatar</h2>
                </div>
              </ContainerProfile>
            </ContainerFeed>
            <Footer/>
        </Container>
    </>
    );
}

export default ListServices;