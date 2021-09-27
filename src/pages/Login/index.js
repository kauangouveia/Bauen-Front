
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "../../assets/logo.png";
import illustrations from "../../assets/bigrentz_constructionriskmanagement_dribbble_4x.png"
import { Container } from "./styles";

function Login() {
  return (
    <Container>
      {/* <Header /> */}
      <div className="containerLogin">
        <div className="AreaBlue">
        <img src={illustrations}/>

        </div>
        <div className="AreaLogin">
          <div className="Logo">
              <img src={logo}/>
          </div>
          <div className="ContainerInput">
          <div className="title"><h2>LOGIN</h2></div>
            <form>
              <label>
                <input type="text" name="name" />
                <input type="text" name="name" />
              </label>
            </form>
            <div className="EsqueciSenha">Esquecia a Senha</div>
            <button><h2>LOGAR</h2></button>
            <div className="Line"></div>
            <div className="title"><h3>CADASTRAR-SE</h3></div>
            <p>Caso estiver encontrando problemas no login, entre em contato com o setor responsável</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;