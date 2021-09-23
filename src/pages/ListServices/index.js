import Header from "../../components/Header"
import {Container} from "./styles"
import search from "../../assets/search.png";
import Footer from "../../components/Footer"
import {SearchContainer, ContainerFilter, CardContainer, Profile, Contact} from "./styles"

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
                    
                </div>
                <div className="Results">
                  <h2>0 Resultados</h2>
                </div>
            </ContainerFilter>
            <CardContainer>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
                <Profile>

                </Profile>
                <Contact>

                </Contact>
            </CardContainer>
            <Footer/>
        </Container>
    </>
    );
}

export default ListServices;