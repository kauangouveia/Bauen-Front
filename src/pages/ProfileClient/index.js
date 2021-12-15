import Header from "../../components/Header";
import Footer from "../../components/Footer";
import locationWhite from "../../assets/localtionWhite.svg";
import {
  Container,
  ProfileContainer,
  InformationsContainer,
  ModalContainer,
} from "./styles";
import chatlogobauen from "../../assets/chatlogobauen.png";
import { sendPhotoClient, getPhotoClient } from "../../services";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

function ProfileClient() {
  const [imageProfile, setImageProfile] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getPhotoClient.getPhotoClientProfile();
    if (data.message === "Nao contem foto no perfil") {
      setIsModalVisible(true, setImageProfile(true));
    } else {
      setIsModalVisible(false, setImageProfile(false));
      setImageProfile(data.photo);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isOpenModalImageProfile, setIsOpenModalImageProfile] = useState(true);
  const nameProfile = localStorage.getItem("name");
  const locationOfServiceProvier = localStorage.getItem("city");

  const imgRef = useRef();
  const [image, setImage] = useState(null);

  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  const checkingPhoto = () => {
    setImageProfile(false);
  };
  const history = useHistory()


  const changePageListServices = ()=>{
    history.push("/listservices")
  }
  const changePagePost = ()=>{
    history.push("/post")
  }
  const changePageInProgress = ()=>{
    history.push("/inprogress")
  }

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
        < div className="InfoClient">
          <div className="AreaLocation">
            <img src={locationWhite} alt="Location"/>
            <h1>{locationOfServiceProvier}</h1>
          </div>
          <div className="AreaName">
            <h1>{nameProfile}</h1>
          </div>
          <div className="Chat">
            <div className="Notification">
              <h4>Nº</h4>
            </div>
            <img src={chatlogobauen} alt="Chat"/>
          </div>
        </div>
      </ProfileContainer>
      <InformationsContainer>
        <div className="Informations">
          <div className="ButtonsOfProfile">
            <button onClick={changePageListServices}>
              <h2>CONTRATAR UM SERVIÇO</h2>
            </button>
            <button onClick={changePagePost}>
              <h2>REALIZAR UMA NOVA POSTAGEM</h2>
            </button>
            <button onClick={changePageInProgress}>
              <h2>SEUS SERVIÇOS EM ANDAMENTO</h2>
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
                  onClick={(event) =>
                    photoProfileClient(
                      setIsOpenModalImageProfile(
                        false,
                        setIsModalVisible(false)
                      )
                    )
                  }
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
