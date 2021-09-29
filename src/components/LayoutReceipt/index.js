
import logo from "../../assets/logo.png";
// import illustrations from "../../assets/bigrentz_constructionriskmanagement_dribbble_4x.png"
import { Container } from "./styles";

function LayoutRegister({title,children}) {
  return (
    <Container>
      <div className="containerLogin">
        <div className="AreaBlue">
          <div className="title">
            {title}
          </div>
        </div>
        <div className="AreaLogin">
          <div className="Logo">
              <img src={logo}/>
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