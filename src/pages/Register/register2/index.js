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
              <h3>CEP*</h3>
              <input type="text" name="text" placeholder="CEP" />
              <h3>Rua*</h3>
              <input type="email" name="text" placeholder="Rua" />
              <h3>Bairro*</h3>
              <input type="text" name="text" placeholder="Bairro" />
              <h3>Cidade*</h3>
              <input type="text" name="text" placeholder="Cidade" />
              <h3>Estado*</h3>
              <input type="text" name="text" placeholder="Estado" />
            </label>
            <Link to="register3">
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
