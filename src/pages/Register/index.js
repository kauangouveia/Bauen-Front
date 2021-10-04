import LayoutRegister from "../../components/LayoutRegister";
import FormRegister from "../../components/Form";
import { Container } from "./styles";
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


function Register() {
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>Cadastro</h2>
          </div>
          <FormRegister>
          </FormRegister>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register;

{/* <label>
  <h3>Nome*</h3>
  <input type="text" name="name" placeholder="Nome" />
  <h3>Email*</h3>
  <input type="email" name="name" placeholder="Email" />
  <h3>Celular*</h3>
  <input type="text" name="name" placeholder="Celular" />
</label>
<Link to="/register2">
  <button>
    <h2>CONTINUAR -{">"} </h2>
  </button>
</Link> */}