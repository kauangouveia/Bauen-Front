import styled from "styled-components";
export const ContainerCarousel = styled.div `
  width: 1360px;
  height: 450px;
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
    img{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 450px;
      height: 250px;
      border-radius: 5px;
      border: 4px solid #074ead;
      margin: 2px;
    }
    .add{
      display: flex;
      cursor: pointer;
      width: 45px;
      height: 45px;
    }
    .each-slide > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      height:auto;
      border-radius: 5px;
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