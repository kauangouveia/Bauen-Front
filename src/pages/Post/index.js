import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./styles";
import add from "../../assets/add.svg";
import { FeedContainer, PostHeader, PostImage, PostButtons } from "./styles";
import { listservice, getPhotoClient, fastService } from "../../services";
import { useEffect } from "react";
import React, { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const profileName = localStorage.getItem("name");
  const id = localStorage.getItem("id");

  const [imageProfile, setImageProfile] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getPhotoClient.getPhotoClientProfile();
    if (data.message === "Nao contem foto no perfil") {
      console.log("Nao contem foto");
    } else {
      setImageProfile(data.photo);
    }
  }, []);

  const [service, setService] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const data = await listservice.listService();
      setService(data.services);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const imgRef = useRef();
  const [image, setImage] = useState(null);
  const handleFile = async (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      imgRef.current.style.display = "block";
    } else {
      imgRef.current.src = "";
      imgRef.current.style.display = "none";
    }
    setImage(e.target.files[0]);
  };

  const [typeService, setTypeService] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTypeService(e.target.value);
  };
  // console.log(typeService);

  const [titleFastService, setTitleFastService] = useState("");
  const sendtitleFastService = (e) => {
    setTitleFastService(e);
  };

  const sendFastService = async () => {
    const data = new FormData();
    data.append("userId", id);
    data.append("fastService", image);
    data.append("title", titleFastService);
    data.append("TypeOfService", typeService);
    try {
      await fastService.sendFS(data);
      toast.success(
        "Serviço Rapido adionado, basta aguardar um dos nossos colaboradores entrar em contato"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
      <ToastContainer />
        <Header />
        <FeedContainer>
          <PostHeader>
            <div className="HeaderPost">
              <div className="PerfilPost">
                <div className="PerfilImage">
                  <img src={imageProfile} alt="foto de perfil" />
                </div>
              </div>
              <div className="TitlePost">
                <h2>{profileName}</h2>
                <div className="ServicesList">
                  <select
                    name="services"
                    className="OptionsServices"
                    onChange={handleChange}
                  >
                    {service?.map((item) => (
                      <option key={item.id_service}>{item.nameService}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="Description">
              <input
                placeholder="Detalhe o tipo de serviço com um título"
                maxlength="20"
                onChange={(e) => sendtitleFastService(e.target.value)}
              />
            </div>
          </PostHeader>
          <PostImage>
            <div className="postImage">
              <img ref={imgRef} alt="post para serviços rapidos" />
            </div>
            <div className="post">
              <label for="file">
                <img src={add} alt="add" />
              </label>
              <input
                type="file"
                onChange={(event) => {
                  handleFile(event);
                }}
                placeholder="Adicione uma imagem"
                name="file"
                id="file"
              />
            </div>
          </PostImage>
          <PostButtons>
            <div className="areaButtons">
              <button type="submit" className="Cancel">
                Cancelar
              </button>
              <button
                type="submit"
                className="Confirm"
                onClick={sendFastService}
              >
                Publicar
              </button>
            </div>
          </PostButtons>
        </FeedContainer>
      </Container>
      <Footer/>
    </>
  );
}

export default Post;
