
import logo from "../../assets/logo.png";
import illustrations from "../../assets/iconeConstrutor.png"
import { Container } from "./styles";

function LayoutRegister({children}) {
  return (
    <Container>
      <div className="containerLogin">
        <div className="AreaBlue">
        <img src={illustrations} alt="illustrações"/>
        </div>
        <div className="AreaLogin">
          <div className="Logo">
              <img src={logo} alt="logo"/>
          </div>
          <div >
          {children}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LayoutRegister;