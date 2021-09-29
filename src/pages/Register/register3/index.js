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
              <h3>CPF*</h3>
              <input type="text" name="text" placeholder="CPF" />
              <h3>RG*</h3>
              <input type="email" name="text" placeholder="RG "/>
              <h3>Data De Nascimento*</h3>
              <input type="text" name="text"/>
            </label>
            <Link to="/register4">
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
