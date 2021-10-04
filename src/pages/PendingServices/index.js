import Header from "../../components/Header"
import { Container } from "./styles";
import search from "../../assets/search.png";
import like from "../../assets/like.svg";
import confirmed from "../../assets/confirmed.svg";
import Footer from "../../components/Footer";
import { SearchContainer, ContainerFilters, ContainerResult, ContainerFeed, ContainerProfile, CardProfile } from "./styles"
import user from "../../assets/user.png";
import menu from "../../assets/menu.svg";


function FastServices() {
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
            <h1>Serviços em andamento</h1>
          </div>
        </ContainerFilters>
        <ContainerResult>
          <div className="Result">
          <h2>Fulano de tal, atualmente você possui 5 serviços em andamento</h2>
          </div>
        </ContainerResult>
        <ContainerFeed>
          <ContainerProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Titulo do projeto</h2>
                    <h3>Nome do usuario</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} />
                    </div>
                    <div className="Services">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} />
                <h2>Concluído</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Titulo do projeto</h2>
                    <h3>Nome do usuario</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} />
                    </div>
                    <div className="Services">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} />
                <h2>Concluído</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Titulo do projeto</h2>
                    <h3>Nome do usuario</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} />
                    </div>
                    <div className="Services">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} />
                <h2>Concluído</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Titulo do projeto</h2>
                    <h3>Nome do usuario</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} />
                    </div>
                    <div className="Services">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} />
                <h2>Concluído</h2>
              </div>
            </CardProfile>
            <CardProfile>
              <div className="Profile">
                <div className="ProfileImage">
                  <img src={user} />
                </div>
                <div className="Informations">
                  <div className="NameAndRating">
                    <h2>Titulo do projeto</h2>
                    <h3>Nome do usuario</h3>
                  </div>
                  <div className="Options">
                    <div className="Favorite">
                      <img src={menu} />
                    </div>
                    <div className="Services">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Contact">
                <img src={confirmed} />
                <h2>Concluído</h2>
              </div>
            </CardProfile>
          </ContainerProfile>
        </ContainerFeed>
        <Footer />
      </Container>
    </>
  );
}

export default FastServices;