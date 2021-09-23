import styled from "styled-components";
export const SliderContainerComents = styled.div`
  width: 100vw;
  height: 290px;
  display: flex;
  justify-content: center;
  border-bottom: solid 0.3px #dadada;
  align-items: center;
  flex-direction: column;
  /* overflow-y:hidden; */
  .SliderContainer {
    width: 1360px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    .rec-carousel-item {
      margin-left: 10px;
      width: 395px;
      height: 220px;
      border-radius: 5%;
      box-shadow: 0 0 0.4em gray;
      overflow-y: hidden;
      margin: 10px;
      background-color: #074ead;
      img {
        width: 100%;
        height: 100%;
      }
      .ContainerInformationProfile {
        width: 400px;
        height: 220px;
        display: flex;
        justify-content: center;
        
        align-items: center;
        flex-direction: column;
        background-color: green;
        .PhotoPerfil {
          width: 80px;
          height: 80px;
          background-color: red;
        }
      }
    }

    .rec.rec-arrow {
      border: 0px !important;
      background-color: transparent;
      box-shadow: 0 0 0px 0px transparent;
      font-size: 2em;
      color: #074ead;
      overflow-y: hidden;
    }
    .rec.rec-dot {
      box-shadow: 0 0 0px 0px transparent;
      background-color: white;
      cursor: default;
    }
    .rec.rec-arrow:hover {
      font-size: 3em;
    }
  }
`;

export const TitleComents = styled.div`
  width: 100vw;
  height: 60px;
  color: black;
  display: flex;
  justify-content: center;
  font-family: "Baloo 2";
  /* margin-top: 50px; */
  overflow-y: hidden;
  padding: 0px;
  div {
    margin-top: 20px;
    width: 1360px;
    height: 100%;
    display: flex;
  }
`;
