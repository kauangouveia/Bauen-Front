import styled from "styled-components";
export const ContainerCarousel = styled.div `
  width: 1360px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center; 

  h1{
    color: #00277D;
  }
  
  div {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    min-height: 250px;
    min-width: 300px;
  }
  
  img {
    width: 100px;
    height: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
    border-radius: 50px;
  }

  .each-slide > div {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 450px;
      height: 250px;
      border-radius: 5px;
      border: 4px solid #074ead;
      margin: 2px;
      padding: 50px;
      overflow: hidden;

      h2{
        width: 100%;
        height: 50px;
        color: #00277D;
        display: flex;
        overflow: hidden;
        align-items: center;
      }

      p{
        text-overflow: ellipsis;
        text-align: justify;
        width: 100%;
        height: 150px;
        color: black;
      }
  }

  .each-slide span {
    font-size: 20px;
    background: #efefef;
  }

  .react-slideshow-container .default-nav {
    height: 250px;
    display: flex;
    background: #074ead;
    width: -90px;
    border: 0;
    fill: white;
    text-align: center;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

  .react-slideshow-container .default-nav:hover{
    background-color: #00277D;
      fill: white;
    }
`;
