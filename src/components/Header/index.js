import { Header } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <Header>
      <div>
        <div>
          <Link to="/loginClient">
            <span>Sou cliente</span>
          </Link>
          <span>Inicio</span>
          <Link to="/login">
            <span>Sou Prestador</span>
          </Link>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </Header>
  );
}

export default HeaderHome;
