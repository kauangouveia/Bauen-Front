import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel } from "./styles";
import construction from "../../assets/construction.jpg";
import addPhoto from "../../assets/addPhoto.svg";

function SliderPortifolio() {
  return (
    <>
      <ContainerCarousel>
        <h1 className="Next">{">"}</h1>
        <h1 className="Return">{"<"}</h1>
          <div className="container">
            <div className="Title">
              <h1>Portifólio</h1>
              <img src={addPhoto} alt="adicionar"/>
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
