import React, { useEffect } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel } from "./styles";
import construction from "../../assets/construction.jpg";
import addPhoto from "../../assets/addPhoto.svg";
import { useState } from "react";
import { listPhotos } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SliderPortifolio() {
  const idUser = localStorage.getItem("id");

  const [image, setimage] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listPhotos.photosPortifolio(idUser);
    setimage(data);
  }, [idUser]);

  console.log(image.photo_portifolio);

  return (
    <>
      <ContainerCarousel>
        <h1 className="Next">{">"}</h1>
        <h1 className="Return">{"<"}</h1>
        <div className="container">
          <div className="Title">
            <h1>Portifólio</h1>

            <img src={image.photo_portifolio} alt="adicionar" />
          </div>

          <Carousel show={4}>
            {/* <div className="ItemSlide">
              <img src={image.photo_portifolio} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={image.photo_portifolio} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={image.photo_portifolio} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={image.photo_portifolio} alt="reforma" />
            </div>       */}
          </Carousel>
        </div>
      </ContainerCarousel>
    </>
  );
}

export default SliderPortifolio;
