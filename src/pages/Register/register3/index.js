import LayoutRegister from "../../../components/LayoutRegister";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../../context";
import { useContext } from "react";

function Register3() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);

  const handleInput = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.id]: event.target.value,
    });
  };
  // console.log(registerValue);
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
              <input
                type="text"
                id="cpf"
                name="text"
                placeholder="CPF"
                onChange={handleInput}
                value={registerValue.cpf}
              />
              <h3>RG*</h3>
              <input
                type="email"
                id="rg"
                name="text"
                placeholder="RG "
                onChange={handleInput}
                value={registerValue.rg}
              />
              <h3>Data De Nascimento*</h3>
              <input
                type="date"
                name="text"
                id="born"
                onChange={handleInput}
                value={registerValue.born}
              />
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

export default Register3;
