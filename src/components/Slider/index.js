import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Reform from "../../assets/reform.jpg";
import {CardImagesServices} from "./Styles"
class App extends Component {
  state = {
    items: [
      { id: 1, title: <img src={Reform} alt="serviço prestado"/>},
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
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
