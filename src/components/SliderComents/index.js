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

const slideImages = [construction, construction, construction];

const Slideshow = () => {
  const [image, setimage] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await listPhotos.photosPortifolio(idUser);
    setimage(data);
  }, []);

  return (
    <ContainerCarousel>
      <div>
        <Slide easing="ease">
          {image.map((item) => (
            <div className="each-slide">
              <div >
                <img
                  className="image-slide"
                  src={item.photo_portifolio}
                  alt="teste"
                />
              </div>
            </div>
          ))}
          {/* <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div> */}
          {/* <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
      </div>
    </ContainerCarousel>
  );
};

export default Slideshow;
