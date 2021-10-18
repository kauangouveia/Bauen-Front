import LayoutRegister from "../../components/LayoutRegister";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext } from "../../context";
import * as React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function Register() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);

  const handleInput = (event) => {
    
    const key = event.target.type === "radio" ? "userType": event.target.id
    console.log(key)
    setRegisterValue({
      ...registerValue,
      [key]: event.target.value,
    });
  };
  
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Escolha como deseja se cadastrar
            </FormLabel>
            <RadioGroup
              row
              aria-label="Escolha como deseja se cadastrar"
              defaultValue="Prestador de Serviços"
              name="radio-buttons-group"
              id="userType"
              
            >
              <FormControlLabel
                value="SERVICE_PROVIDER"
                control={<Radio />}
                label="Prestador de Serviços"
                onChange={handleInput}
              />
              <FormControlLabel
                register
                value="CLIENT"
                control={<Radio />}
                label="Cliente"
                onChange={handleInput}
              />
            </RadioGroup>
          </FormControl>

          <form>
            <h3>Nome*</h3>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              onChange={handleInput}
              value={registerValue.name}
            />
            <h3>Email*</h3>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleInput}
              value={registerValue.email}
            />
            <h3>Celular*</h3>
            <input
              type="text"
              id="phone"
              placeholder="Celular"
              onChange={handleInput}
              value={registerValue.phone}
            />
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
