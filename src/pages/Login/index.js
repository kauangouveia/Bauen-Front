import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container } from "./styles";

function Login() {
  return (
    <Container>
      <Header />
      <div className="containerLogin">
        <div className="AreaBlue"></div>
        
        <div className="AreaLogin">
          <div className="AreaOfInput">
            <form>
              <label>
                <input type="text" name="name" />
                <input type="text" name="name" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
