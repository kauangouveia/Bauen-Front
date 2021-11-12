import Header from "../../components/Header";
import { Container } from "./styles";
import add from "../../assets/add.svg";
import { FeedContainer, PostHeader, PostImage, PostButtons } from "./styles";
import { listservice, findPhoto, sendTypeOfService } from "../../services";
import { useEffect } from "react";
import React, { useState } from "react";
import { useRef } from "react";

function Post() {
  const profileName = localStorage.getItem("name");

  const [imageProfile, setImageProfile] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await findPhoto.findPhoto();
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
    setTypeService(e.target.value);
    console.log(typeService);
  };

  return (
    <>
      <Container>
        <Header />
        <FeedContainer>
          <PostHeader>
            <div className="HeaderPost">
              <div className="PerfilPost">
                <div className="PerfilImage">
                  <img src={imageProfile} />
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
                      <option key={item.id_service}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="Description">
              <label /> Adicone uma descrição ao projeto
              <input />
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
              <button type="submit" className="Confirm">
                Confirmar
              </button>
            </div>
          </PostButtons>
        </FeedContainer>
      </Container>
    </>
  );
}

export default Post;
