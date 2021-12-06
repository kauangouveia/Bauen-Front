import React, { useEffect } from "react";

import { ContainerCarousel } from "./styles";
import construction from "../../assets/construction.jpg";
import addPhoto from "../../assets/addPhoto.svg";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { lisComments } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-slideshow-image";

const idServiceProviderSelect = localStorage.getItem("idServiceProviderSelect");

const MultipleSlidesExample = () => {
  const [comment, setComment] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await lisComments.listCommentsProvider(
      idServiceProviderSelect
    );
    setComment(data);
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
    // autoplay: true,
    indicators: true,
  };

  return (
    <ContainerCarousel>
      <div>
        <Slide {...properties}>
          {comment.map((item) => (
            <div className="each-slide">
              <div>
                <div className="informationsClient">
                  <img src={item.photo} alt="photo" />
                  <h2>{item.name}</h2>
                  <div className="informations">
                    <p>{item.coment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </ContainerCarousel>
  );
};

export default MultipleSlidesExample;
