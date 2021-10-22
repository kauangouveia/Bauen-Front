import { Container } from "./styles";
import LayoutRegister from "../../../components/LayoutRegister";
import { useContext } from "react";
import { RegisterContext } from "../../../context";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Register2() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);
  const history = useHistory()
  const handleInput = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.id]: event.target.value,
    });
  };


  const handleClickButton = () => {
    const { userType, ...values } = registerValue;
    
    const url =
      userType === "SERVICE_PROVIDER"
        ? "/register/service-provider"
        : "/register/client";
        Axios.post(`http://localhost:3334${url}`, {
        
      ...values,
    
    }).then((response) => {
      console.log(response);
    });
    history.push("/login")

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
          </form>
          {/* <Link to="register5"> */}
          <button onClick={handleClickButton}>
            <h2>FINALIZAR -{">"} </h2>
          </button>
          {/* </Link> */}
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register2;
