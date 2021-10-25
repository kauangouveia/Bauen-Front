import { Container } from "./styles";
import LayoutReceipt from "../../../components/LayoutReceipt";
import defaultPhoto from "../../../assets/user.png"
import { useState} from "react";
import { useRef } from "react";

function Register2() {
  const imgRef = useRef()
  const [image, setImage] = useState()
  const handleFile =(e)=>{ 
    setImage(e.target.files[0])
    imgRef.current.src = URL.createObjectURL(e.target.files[0])
  }
  return (
    <Container>
      <LayoutReceipt title="Agora precisamos que coloque uma foto de perfil">
        <div className="ContainerInput">
          <div className="PictureProfile" >
            <img at='foto de perfil' ref={imgRef}/>
          </div>
          <form>
            <label htmlFor="inputImage">
              <input type="file" id="inputImage" onChange={handleFile} />
            </label>
              <button>
                <h2>CONTINUAR -{">"} </h2>
              </button>
          </form>
        </div>
      </LayoutReceipt>
    </Container>
  );
}

export default Register2;
