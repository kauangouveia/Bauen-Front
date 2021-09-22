import Header from "../../components/Header"
import {Container} from "./styles"
import {SearchContainer, ContainerFilter, CardContainer, Profile} from "./styles"
import search from "../../assets/search.png";

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

                </div>
            </ContainerFilter>
            <CardContainer>
                <Profile>

                </Profile>
            </CardContainer>
        </Container>
    </>
    );
}

export default ListServices;