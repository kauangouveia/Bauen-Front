import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";

function Register() {
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>LOGIN</h2>
          </div>
          <form>
            <label>
              <h3>Nome*</h3>
              <input type="text" name="name" placeholder="E-mail" />
              <h3>Email*</h3>
              <input type="email" name="name" placeholder="Senha" />
              <h3>Celular*</h3>
              <input type="number" name="name" placeholder="Senha" />
            </label>
          <button><h2>CONTINUAR -{">"} </h2></button>
          </form>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register;
