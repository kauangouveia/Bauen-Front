import { SliderContainerComents, TitleComents } from "./Styles";

import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class SliderComents extends Component {
  state = {
    items: [
      { id: 1, title: "" },
      { id: 2, title: "" },
      { id: 3, title: "" },
      { id: 4, title: "" },
      { id: 5, title: "" },
      { id: 6, title: "" },
      { id: 7, title: "" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <TitleComents>
          <div>
            <h1>Comentarios</h1>
          </div>
        </TitleComents>
        <SliderContainerComents>
          <div className="SliderContainer">
            <Carousel itemsToShow={3}>
              {items.map((item) => (
                <div className="CardImagesServices" key={item.id}>
                  {item.title}
                  <div className="ContainerInformationProfile">
                    <div className="PhotoPerfil"></div>
                    <div className="WeekPotsAndName"></div>
                  </div>
                  <div className="InformationOfProfile"></div>
                </div>
              ))}
            </Carousel>
          </div>
        </SliderContainerComents>
      </>
    );
  }
}

export default SliderComents;
