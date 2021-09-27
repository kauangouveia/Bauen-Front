import Header from "../../components/Header"
import {Container} from "./styles"
import search from "../../assets/search.png";
import Footer from "../../components/Footer"
import filter from "../../assets/filter.svg"
import chat from "../../assets/chat.svg"
import {SearchContainer, ContainerFilter, CardContainer, Profile, Contact, FeedContainer} from "./styles"

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
            <ContainerFilter>
                <div className="Filters">
                    <img src={filter}/>
                    <h1>Ordenar por:</h1>
                    <h2>Recentes</h2>
                    <h2>Avaliação</h2>
                    <h2>Quantidade de estrelas</h2>
                </div>
                <div className="Results">
                  <h2>0 Resultados</h2>
                </div>
            </ContainerFilter>
            <FeedContainer>
              <CardContainer>
                <Profile>

                </Profile>
                <Contact>
                  <img src={chat}/>
                  <h2>Contatar</h2>
                </Contact>
              </CardContainer>
              <CardContainer>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
              </CardContainer>
              <CardContainer>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
              </CardContainer>
              <CardContainer>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
              </CardContainer>
            </FeedContainer>
            <Footer/>
        </Container>
    </>
    );
}

export default ListServices;