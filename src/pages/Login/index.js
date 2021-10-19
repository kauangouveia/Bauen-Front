import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Login(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await api.post("/login/service-provider", data);

      const nameOfProfile = response.data.user.name
      console.log(nameOfProfile);
    } catch (error) {
      alert(error.response.data.errors[0].message);
    }
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
            <button >
              <h2>LOGAR</h2>
            </button>
          </form>
          <div className="EsqueciSenha">Esquecia a Senha</div>
          <div className="Line"></div>
          <div className="title">
            <Link to="register">
              <h3>CADASTRAR-SE</h3>
            </Link>
          </div>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Login;
