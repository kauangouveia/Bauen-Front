import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";

function Login() {
  return (
    <Container>
      <LayoutRegister>
      <div className="ContainerInput">
          <div className="title"><h2>LOGIN</h2></div>
            <form>
              <label>
                <input type="email" name="name" placeholder="E-mail" />
                <input type="password" name="name" placeholder="Senha" />
              </label>
            </form>
            <div className="EsqueciSenha">Esquecia a Senha</div>
            <button><h2>LOGAR</h2></button>
            <div className="Line"></div>
            <div className="title"><h3>CADASTRAR-SE</h3></div>
          </div>
      </LayoutRegister>
    </Container>
  );
}

export default Login;
