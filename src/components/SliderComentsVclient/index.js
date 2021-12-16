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

const idUser = localStorage.getItem("idServiceProviderSelect");

const MultipleSlidesExample = () => {
  const [comment, setComment] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await lisComments.listCommentsProvider(idUser);
    setComment(data);
  }, []);

  console.log(comment)
  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
  };

  let data;
  let dataF;
  comment.forEach(item => {

    data =  new Date(item.created_at)
    dataF = data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear()
});

  return (
    <ContainerCarousel>
      <div>
        <h1>Comentários</h1>
        <Slide {...properties}>
          {comment.map((item) => (
            <div className="each-slide">
              <div className="PhotoComments">
                <img src={item.photo} />
              </div>
              <div className="NameComments">
                <h2>{item.name}</h2>
              </div>
              
              <div className="ContainerComments">
                <p>{item.coment}</p>
              </div>
              <div className="ContainerTime">
              <h3>postado dia {dataF}</h3>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </ContainerCarousel>
  );
};
  
export default MultipleSlidesExample;
