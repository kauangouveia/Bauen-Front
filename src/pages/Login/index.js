import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "../../assets/logo.png";
import { Container } from "./styles";

function Login() {
  return (
    <Container>
      <Header />
      <div className="containerLogin">
        <div className="AreaBlue"></div>
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
            <div>Esquecia a Senha</div>
            <button>LOGAR</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
