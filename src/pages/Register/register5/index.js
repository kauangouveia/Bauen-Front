import { Container } from "./styles";
import LayoutReceipt from "../../../components/LayoutReceipt";
import { Link } from "react-router-dom";
import Receipt from "../../../assets/comprovante.svg";
function Register2() {
  return (
    <Container>
      <LayoutReceipt title="Agora precisamos de uma foto do seu comprovante de residência">
        <div className="ContainerInput">
          <img src={Receipt} alt="foto do seu comprovante de residênc"/>
          <form>
            <label>
              <input type="file" name="text" placeholder="CPF" />
            </label>
            <Link to="register6">
              <button>
                <h2>CONTINUAR -{">"} </h2>
              </button>
            </Link>
          </form>
        </div>
      </LayoutReceipt>
    </Container>
  );
}

export default Register2;
