import { Container } from "./styles";
import LayoutRegister from "../../../components/LayoutRegister";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext } from "../../../context";

function Register2() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);
  const handleInput = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.id]: event.target.value,
    });
  };

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
              <input
                type="password"
                name="text"
                id="password"
                placeholder="Senha"
                onChange={handleInput}
                value={registerValue.password}
              />
              <h3>Confirme Sua Senha*</h3>
              <input
                type="password"
                name="text"
                id="confirmPassword"
                placeholder="Confirme a Senha"
                onChange={handleInput}
                value={registerValue.confirmPassword}
              />
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
