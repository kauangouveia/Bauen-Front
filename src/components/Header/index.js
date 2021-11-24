import { Header } from "./styles";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router";

function HeaderHome() {
  const userType = localStorage.getItem("type");

  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";

  if (userType === "client") {
    text1 = "Post";
    text2 = "Perfil";
    text3 = "Contratar";
    text4 = "Favoritos";
  } else if (userType === "provider") {
    text1 = "Serviços Pendentes";
    text2 = "Serviços Rápidos";
    text3 = "Perfil";
    text4 = "Sala";
  } else {
    text1 = "Sou Prestador";
    text2 = "Sou Cliente";
    text3 = "Nossos Serviços";
    text4 = "Metodologia";
  }

  const history = useHistory();
  const linkto = (texto) => {
    if (texto === "Post") {
      history.push("/post");
    } else if (texto === "Serviços Pendentes") {
      history.push("/pendingservices");
    } else if (texto === "Sou Prestador") {
      history.push("/login");
    } else if (texto === "Perfil" && userType === "client") {
      history.push("/profileClient");
    } else if (texto === "Perfil" && userType === "provider") {
      history.push("/profile");
    } else if (texto === "Post") {
      history.push("/post");
    } else if (texto === "Contratar") {
      history.push("/listservices");
    } else if (texto === "Serviços Rápidos") {
      history.push("/fastservices");
    } else if (texto === "Sala") {
      history.push("/chat");
    } else if (texto === "Sou Cliente") {
      history.push("/loginClient");
    }
  };

  return (
    <Header>
      <div>
        <div>
          <span onClick={() => linkto(text1)}>{text1}</span>
          <span onClick={() => linkto(text2)}>{text2}</span>
          <span onClick={() => linkto(text3)}>{text3}</span>
          <span onClick={() => linkto(text4)}>{text4}</span>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </Header>
  );
}

export default HeaderHome;
