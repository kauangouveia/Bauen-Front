import { Container } from "./styles";
import LayoutRegister from "../../../components/LayoutRegister";
import { Link } from 'react-router-dom'

function Register2() {
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>Cadastro</h2>
          </div>
          <form>
            <label>
              <h3>Senha*</h3>
              <input type="text" name="text" placeholder="Senha" />
              <h3>Confirme Sua Senha*</h3>
              <input type="email" name="text" placeholder="Confirme a Senha" />
            </label>
            <Link to="register5">
              <button>
                <h2>CONTINUAR -{">"} </h2>
              </button>
            </Link>
          </form>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register2;
