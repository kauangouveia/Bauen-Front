import styled from "styled-components";

export const ContainerCarousel = styled.div`
  width: 1360px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  input[type="file"] {
    display: none;
  }
  .Next {
    display: flex;
    font-size: 55px;
    padding-left: 5px;
    color: #00277d;
    align-items: center;
    justify-content: center;
    right: 30px;
    bottom: 150px;
    width: 50px;
    height: 50px;
    position: absolute;
    overflow-y: hidden;
  }

  .Return {
    display: flex;
    font-size: 55px;
    padding-right: 5px;
    color: #00277d;
    align-items: center;
    justify-content: center;
    left: 30px;
    bottom: 150px;
    width: 50px;
    height: 50px;
    position: absolute;
    overflow-y: hidden;
  }

  .container {
    width: 1300px;
    height: auto;

    .Title {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 55px;
      width: 1300px;
      color: #00277d;

      img {
        cursor: pointer;
        margin-left: 5px;
        width: 45px;
        height: 45px;
      }
    }

    .styles-module_carousel-base__3keqD {
      width: 1300px;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      position: relative;

      .styles-module_carousel-arrow__26sRw {
        background-color: transparent;
        width: 55px;
        height: 55px;
        border: 0px;
        background-size: 45px;
      }
      .styles-module_carousel-arrow__26sRw:hover {
        cursor: pointer;
      }
    }
  }

  .ItemSlide {
    width: 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    border: 5px solid transparent;

    img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      border: 2px solid #00277d;
    }
  }
`;
