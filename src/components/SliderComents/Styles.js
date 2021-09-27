import styled from "styled-components";
import next from "../../assets/next.svg";
import rigui from "../../assets/rigui.jpg";

export const ContainerCarousel = styled.div`
  width: 100vw;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  border-bottom: solid 0.3px #dadada;
  align-items: center;
  .container {
    width: 1400px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    .title {
      height: 60px;
      width: 1300px;
      flex-direction: row;
      text-align: left;
    }

    .styles-module_carousel-base__3keqD {
      display: flex;
      width: 1360px;
      height: 300px;
      justify-content: center;
      align-items: center;
      padding: 20px;

      .styles-module_carousel-arrow__26sRw {
        width: 50px;
        height: 50px;
        border: 0px;
        background-color: transparent;
        background-image: url(${next});
        background-repeat: no-repeat;
        background-size: 45px;
      }
      .styles-module_carousel-arrow__26sRw:hover {
        cursor: pointer;
      }
    }
  }
  .ItemSlide {
    width: 380px;
    height: 240px;
    border-radius: 5%;
    margin-left: 10px;
    overflow: hidden;
    border: 1px solid gray;
    box-shadow: 0 0 0.5em gray;
    .ProfileAndInformation {
      width: 380px;
      height: 130px;
      padding: 10px;
      display: flex;
      border-bottom: solid 0.5px #dadada;
      .PictureComents {
        width: 100px;
        height: 100px;
        background-color: red;
        border-radius: 100%;
        margin-right: 10px;
        background-image: url(${rigui});
        background-repeat: no-repeat;
        background-size: cover;
      }
      .InformationProfile {
        display: flex;
        width: 250px;
        height: 100px;

        flex-direction: column;

        text-align: justify;
        padding: 7px;

        h3 {
          color: #00277d;
        }
        p {
          color: #00277d;
          font-size: 17px;
        }
      }
    }
    .Description {
      p {
        font-size: 20px;
        color: black;
      }
    }
  }
`;
