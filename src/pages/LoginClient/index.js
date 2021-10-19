import { Container } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import LayoutLoginClient from "../../components/LayoutLoginClient";

function LoginClient(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/login/client", data);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.errors[0].message);
    }
  };

  return (
    <Container>
      <LayoutLoginClient>
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
      </LayoutLoginClient>
    </Container>
  );
}

export default LoginClient;
