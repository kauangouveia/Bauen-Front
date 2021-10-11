import { Container } from "./styles";
import LayoutReceipt from "../../../components/LayoutReceipt";
import { Link } from "react-router-dom";
import idcard from "../../../assets/idcard.svg";
function Register2() {
  return (
    <Container>
      <LayoutReceipt title="Antes de finalizarmos precisamos  apenas de uma foto do seu RG frente e verso para podemos comprovar sua identidade.">
        <div className="ContainerInput">
          <img src={idcard} alt ="carteira de indentidade" />
          <form>
            <label>
              <input type="file" name="text" placeholder="CPF" />
            </label>
            <Link to="Home">
              <button>
                <h2>FINALIZAR -{">"} </h2>
              </button>
            </Link>
          </form>
        </div>
      </LayoutReceipt>
    </Container>
  );
}

export default Register2;
