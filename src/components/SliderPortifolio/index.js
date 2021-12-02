import React, { useEffect } from "react";

import { ContainerCarousel } from "./styles";
import construction from "../../assets/construction.jpg";
import addPhoto from "../../assets/addPhoto.svg";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { listPhotos } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-slideshow-image";

// function SliderComents() {
const idUser = localStorage.getItem("id");

const MultipleSlidesExample = () => {
  const [image, setimage] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listPhotos.photosPortifolio(idUser);
    setimage(data);
  }, []);

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };

  return (
    <ContainerCarousel>
      <div>
       <h1>Portifolio </h1><img src={addPhoto} alt ='addPhoto' className="add"/>
        <Slide {...properties}>
          {image.map((item) => (
            <div className="each-slide">
              <div>
                <img
                  className="image-slide"
                  src={item.photo_portifolio}
                  alt="teste"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </ContainerCarousel>
  );
};

export default MultipleSlidesExample;
