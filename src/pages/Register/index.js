import LayoutRegister from "../../components/LayoutRegister";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RegisterContext } from '../../context'

function Register() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);

  const handleInput = (event) => {
    setRegisterValue({...registerValue, [event.target.id]: event.target.value})
  }
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title"></div>
          <h2>Cadastro</h2>
          <form>
            <h3>Nome*</h3>
            <input type="text" id="name" placeholder="Nome" onChange={handleInput} value={registerValue.name}/>
            <h3>Email*</h3>
            <input type="email" id="email" placeholder="Email" onChange={handleInput} value={registerValue.email}/>
            <h3>Celular*</h3>
            <input type="text" id="phone" placeholder="Celular" onChange={handleInput} value={registerValue.phone}/>
          </form>
          <Link to="/register2">
            <button>
              <h2>CONTINUAR -{">"} </h2>
            </button>
          </Link>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register;
