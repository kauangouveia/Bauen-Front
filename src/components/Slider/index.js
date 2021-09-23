import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Reform from "../../assets/reform.jpg";
import reforme from "../../assets/reforme.jpg";
import encanador from "../../assets/encanador.png";
import {CardImagesServices} from "./Styles"
class App extends Component {
  state = {
    items: [
      { id: 1, title: <img src={Reform} alt="serviço prestado"/>},
      { id: 2, title: <img src={reforme} alt="serviço prestado"/>},
      { id: 3, title: <img src={encanador} alt="serviço prestado"/>},
      { id: 4, title: <img src={Reform} alt="serviço prestado"/>},
      { id: 5, title: <img src={Reform} alt="serviço prestado"/>},
      { id: 6, title: <img src={Reform} alt="serviço prestado"/>},
      { id: 7, title: <img src={Reform} alt="serviço prestado"/>},
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Carousel itemsToShow={3}>
        {items.map((item) => (
          <CardImagesServices key={item.id}>{item.title}</CardImagesServices>
        ))}
      </Carousel>
    );
  }
}

export default App;
