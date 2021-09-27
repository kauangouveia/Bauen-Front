import Header from "../../components/Header"
import {Container} from "./styles"
import search from "../../assets/search.png";
import Footer from "../../components/Footer"
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
                
              </div>
            </ContainerFilters>
            <ContainerResult>
                <h2>0 Resultados</h2>
            </ContainerResult>
            <ContainerFeed>
              <ContainerProfile>
                <div className="Profile">

                </div>
                <div className="Contact">

                </div>
              </ContainerProfile>
            </ContainerFeed>
            <Footer/>
        </Container>
    </>
    );
}

export default ListServices;