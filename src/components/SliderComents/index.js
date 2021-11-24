import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ContainerCarousel } from "./styles";

function SliderComents() {
  return (
    <>
      <ContainerCarousel>
        <h1 className="Next">{">"}</h1>
        <h1 className="Return">{"<"}</h1>
          <div className="container">
            <div className="Title">
              <h1>Comentários</h1>
            </div>
            <Carousel show={4}>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
              <div className="ContainerItem">
                <div className="ItemSlide">
                  <h2>Nome do usúario</h2>
                  <p>
                    "Comentário comentário comentário 
                    Comentário comentário comentário 
                    Comentário comentário comentário 
                  </p>
                  <h3>Há quanto tempo</h3>
                </div>
              </div>
            </Carousel>
          </div>
        
      </ContainerCarousel>
    </>
  );
}

export default SliderComents;
