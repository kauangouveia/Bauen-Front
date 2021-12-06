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

const idUser = localStorage.getItem("id");

const MultipleSlidesExample = () => {
  const [comment, setComment] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await lisComments.listCommentsProvider(idUser);
    setComment(data);
  }, []);

  console.log(comment);

  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
  };

  return (
    <ContainerCarousel>
      <div>
        <h1>Comentários</h1>
        <Slide {...properties}>
          {comment.map((item) => (
            <div className="each-slide">
              <div>
                <h2>{item.name}</h2>
                <p>{item.coment}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </ContainerCarousel>
  );
};

export default MultipleSlidesExample;
