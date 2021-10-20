import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login(props) {
      
      const history = useHistory()
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
   try {
      const response = await api.post("/login/service-provider", data);

      const tokenOfProfile =  response.data.token
      const nameOfProfile =  response.data.user.name
      const location =  response.data.user.name

      localStorage.setItem("token", tokenOfProfile);
      localStorage.setItem("name", nameOfProfile);
      localStorage.setItem("location", nameOfProfile);

      history.push("/profile")
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
            {/* <Link to="profile"> */}
            <button >
              <h2>LOGAR</h2>
            </button>
            {/* </Link> */}
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
