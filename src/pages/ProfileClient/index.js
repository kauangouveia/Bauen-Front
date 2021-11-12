
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import user from "../../assets/user.png";
import locationWhite from "../../assets/localtionWhite.svg";
import { Container, ProfileContainer, InformationsContainer, ModalContainer } from "./styles";
import chatlogobauen from "../../assets/chatlogobauen.png"
import { sendPhotoClient, findPhoto} from "../../services";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function ProfileClient() {

  const [imageProfile, setImageProfile] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await findPhoto.findPhoto();
    if (data.message === "Nao contem foto no perfil") {
      setIsModalVisible(true,  setImageProfile(true));
    }else{
      setIsModalVisible(false,  setImageProfile(false));
      setImageProfile(data.photo);
    }
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(true);
  const nameProfile = localStorage.getItem("name");
  const locationOfServiceProvier = localStorage.getItem("location")

  const imgRef = useRef();
  const [image, setImage] = useState(null);

  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  const checkingPhoto = () => {
    setImageProfile(false);
  };
  
  const photoProfileClient = async () => {
    const data = new FormData();
    if (image === null) {
      return alert("Por favor adicone uma foto de perfil");
    } else {
      checkingPhoto();
    data.append("photoProfileClient", image);
      try {
        await sendPhotoClient.sendPhotoClient(data);
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <div className="PictureProfile">
          <img src={imageProfile} alt="Foto de perfil" />
        </div>
        <div className="AreaInfo">
          <div className="AreaLocation">
            <img src={locationWhite} alt="test" />
            {locationOfServiceProvier}
          </div>
          <div className="AreaName">
            <h1>{nameProfile}</h1>
          </div>
          <div className="AreaChat">
            <img src={chatlogobauen} alt="test" className="chat" />
          </div>
        </div>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ButtonsOfProfile">
            <button>
              <h2>PRESTADORES FAVORITADOS</h2>
            </button>
            <button>
              <h2>SEUS SERVIÇOS CONTRATADOS</h2>
            </button>
            <button>
              <h2>DADOS PARA PAGAMENTO</h2>
            </button>
          </div>
        </div>
      </InformationsContainer>
      <Footer />
      {isModalVisible && (
        <ModalContainer>
          {isOpenModalImageProfile && (
            <div className="ModalImageProfile">
              <img ref={imgRef} alt="profile" />
              <h3>Primeiro, adicione uma foto para reconhecerem você!</h3>
              <div className="AreaButton">
                <label for="file">Adicionar uma foto</label>
                <input
                  type="file"
                  onChange={(event) => {
                    handleFile(event);
                  }}
                  placeholder="Adicione uma imagem"
                  name="file"
                  id="file"
                />
                <button
                  className="Next"
                  onClick={(event) => photoProfileClient(  setIsOpenModalImageProfile(false, setIsModalVisible(false)))}
                >
                  Avançar {">"}
                </button>
              </div>
            </div>
          )}
        </ModalContainer>
      )}
    </Container>
  );
}

export default ProfileClient;
