import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel } from "./styles";
import reform from "../../assets/reform.jpg";

function SliderPortifolio() {
  return (
    <>
      <ContainerCarousel>
        <div className="container">
          <div className="title">
            <h1>Portifolio</h1>
          </div>
          <Carousel show={3}>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
            <div className="ItemSlide">
              <img src={reform} alt="reforma" />
            </div>
          </Carousel>
        </div>
      </ContainerCarousel>
    </>
  );
}

export default SliderPortifolio;
