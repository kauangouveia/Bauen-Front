import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel } from "./styles";
import construction from "../../assets/construction.jpg";
import addPhoto from "../../assets/addPhoto.svg";
import { useState } from "react";
import { portifolio } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SliderPortifolio() {
  const idUser = localStorage.getItem("id");
  const [imagePortifolio, setImagePortifolio] = useState(null);
  const handleFilePortifolio = async (e) => {
    setImagePortifolio(e.target.files[0]);
    console.log(imagePortifolio);
  };

  const sendImgPortifolio = async () => {
    const data = new FormData();
    data.append("portifolioPhoto", imagePortifolio);
    data.append("idProvider", idUser);

    try {
      await portifolio.provider(data);
      toast.success(
        "Foto adicionada ao portifolio com sucesso"
      );
    } catch (error) {
      console.log("erro");
    }
  };

  return (
    <>
    <ToastContainer />
      <ContainerCarousel>
        <h1 className="Next">{">"}</h1>
        <h1 className="Return">{"<"}</h1>
        <div className="container">
          <div className="Title">
            <h1>Portifólio</h1>

            <label for="file">
              <img src={addPhoto} alt="adicionar" />
            </label>
            <input
              type="file"
              placeholder="Adicione uma imagem"
              onChange={(event) => {
                handleFilePortifolio(event);
                sendImgPortifolio();
              }}
              name="file"
              id="file"
            />
          </div>

          <Carousel show={4}>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={construction} alt="reforma" />
            </div>
          </Carousel>
        </div>
      </ContainerCarousel>
    </>
  );
}

export default SliderPortifolio;
