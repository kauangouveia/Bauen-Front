import { Header } from "./styles";
import logo from "../../assets/logo.png";

function HeaderHome() {
  return (
    <Header>
      <div>
        <div>
          <span>Inicio</span>
          <span>Quem Somos ?</span>
          <span>Serviços</span>
          <span>Entrar</span>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </Header>
  );
}

export default HeaderHome;
