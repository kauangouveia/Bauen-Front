import { Header } from "./styles";
import logo from "../../assets/logo.png";

function HeaderHome() {
  return (
    
    <Header>
      <div>
        <div>
          <span>Entrar</span>
          <span>Serviços</span>
          <span>Quem Somos ?</span>
          <span>Inicio</span>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </Header>
  );
}

export default HeaderHome;
