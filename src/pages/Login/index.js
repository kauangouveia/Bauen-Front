import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";
import { useForm } from "react-hook-form";
import {login} from '../../services/index'
import { Redirect } from "react-router";
function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {  
   const user = await login.authenticateServiceProvide(data)
   return <Redirect to="/profile" />
  //  props.history.push('')
  };

  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>LOGIN</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                type="email"
                name="name"
                placeholder="E-mail"
                {...register("email")}
              />
              <input
                type="password"
                name="name"
                placeholder="Senha"
                {...register("password")}
              />
            </label>
            <button type="submit">
              <h2>LOGAR</h2>
            </button>
          </form>
          <div className="EsqueciSenha">Esquecia a Senha</div>
          <div className="Line"></div>
          <div className="title">
            <h3>CADASTRAR-SE</h3>
          </div>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Login;
