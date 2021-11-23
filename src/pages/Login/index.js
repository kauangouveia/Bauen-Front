import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/login/service-provider", data);

      const {
        token,
        user: {
          address: { city },
          serviceProvider: { name },
          serviceProvider: { room },
          serviceProvider: { id },
        },
        provider: provider,
      } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("location", city);
      localStorage.setItem("id", id);
      localStorage.setItem("room", room);
      localStorage.setItem("type", provider);

      history.push("/profile");
    } catch (error) {
      toast.error(error.response.data.errors[0].message);
    }
  };

  return (
    <>
      <ToastContainer />
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

              <button>
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
    </>
  );
}

export default Login;
