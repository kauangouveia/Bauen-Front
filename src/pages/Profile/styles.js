import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 370px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color: #074ead;
  flex-direction: row-reverse;
  flex-direction: column;
  color: white;
  position: relative;

  .AreaReward {
    display: flex;
    width: 275px;
    height: 255px;
    margin-bottom: 52px;
    position: absolute;
    overflow-y: hidden;

    .Reward {
      position: absolute;
      bottom: -25px;
      right: -30px;
      width: 150px;
      height: 150px;
    }
  }

  .PictureProfile {
    flex-direction: column-reverse;
    flex-direction: row-reverse;
    display: flex;
    height: 250px;
    width: 250px;
    background-color: #dadada;
    border-radius: 100%;
    background-position: center;
    border: solid 4px #ff5c00;
    margin-top: 10px;
    align-items: flex-end;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .AreaName {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    height: auto;
    margin-top: 20px;
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 180px;
  overflow-y: hidden;
  justify-content: center;
  font-family: "Baloo 2";
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  input[type="file"] {
    display: none;
  }
  .plus {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    border-radius: 5%;
    border: 0px;
    color: white;
    background-color: #074ead;
    box-shadow: 0 0 0.5em gray;
    cursor: pointer;
    font-family: "Baloo 2";
    height: 60px;
    margin-left: 5px;
    margin-right: 5px;
    overflow: hidden;
    .add{
        width: 60px;
        height: 60px;
      }
  }

  .services {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 1360px;
    height: 60px;

    .servicesType {
      height: 55px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .Card {
        width: 150px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #074ead;
        border-radius: 10px;
        margin-left: 5px;
        margin-right: 5px;

        h3 {
          color: white;
        }
      }
    }
  }
  .Informations {
    display: flex;
    height: 100px;
    width: 1300px;
    justify-content: center;

    .ProfilesText {
      height: auto;
      width: 400px;
      margin-right: 20px;
      padding-left: 10px;
      padding-top: 10px;
      h2 {
        display: flex;
        align-items: center;
        height: 45px;
        text-align: start;
        font-family: "Baloo 2";
        color: #00277d;
        img {
          margin-bottom: 5px;
          height: 35px;
          width: 35px;
        }
      }
      p {
        font-weight: bold;
        text-align: start;
        padding-left: 35px;
        font-family: "Baloo 2";
        color: #074ead;
      }
    }
    .AreaStars {
      display: flex;
      height: auto;
      width: 450px;
      justify-content: center;
      align-items: center;

      .CenterStar {
        display: flex;
        width: 250px;
        height: auto;

        .Star {
          cursor: pointer;
          transition: color 200ms;
        }
      }
    }

    .ratingButton {
      display: none;
    }

    .ButtonsOfProfile {
      align-items: flex-end;
      display: flex;
      align-items: center;
      justify-content: end;
      flex-direction: row;
      width: 350px;
      height: auto;
      margin-left: 20px;
      padding-right: 5px;
      font-family: "Baloo 2";

      .ButtonsIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        border-radius: 5%;
        border: 0px;
        color: white;
        background-color: #074ead;
        box-shadow: 0 0 0.5em gray;
        cursor: pointer;
        font-family: "Baloo 2";
        height: 60px;
        margin-left: 5px;
        margin-right: 5px;

        .Storm {
          width: 50px;
          height: 50px;
        }

        .Time {
          width: 48px;
          height: 48px;
        }

        .Chat {
          width: 40px;
          height: 40px;
        }
      }
    }

    .Menu {
      cursor: pointer;
      margin-top: auto;
      margin-bottom: auto;
      width: 45px;
      height: 45px;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  .ModalWarning {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 290px;
    border: 2px solid #00277d;
    border-radius: 10px;
    background-color: white;
    z-index: 1998;

    @keyframes ModalWarning {
      from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    img {
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 25px;
      color: #00277d;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      margin: 5px;
    }

    .Next {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      width: 150px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }

  .ModalImageProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 600px;
    border: 2px solid #00277d;
    border-radius: 10px;
    background-color: white;
    z-index: 1999;

    @keyframes ModalImageProfile {
      from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    img {
      width: 400px;
      height: 400px;
      margin-bottom: 10px;
      border-radius: 100%;
      border: 2px solid #00277d;
    }

    h2 {
      font-size: 25px;
      color: #00277d;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin: 5px;
    }

    .Next {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 250px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    input[type="file"] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 250px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
   
    }
  }

  .ModalImageProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 600px;
    border: 2px solid #00277d;
    border-radius: 10px;
    background-color: white;
    z-index: 1999;

    @keyframes ModalImageProfile {
      from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    img {
      width: 400px;
      height: 400px;
      margin-bottom: 10px;
      border-radius: 100%;
      border: 2px solid #00277d;
    }

    h2 {
      font-size: 25px;
      color: #00277d;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin: 5px;
    }

    .Next {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 250px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    input[type="file"] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 250px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }
  .ModalPortifolio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 600px;
    font-size: 20px;
    color: #00277d;
    border: 2px solid #00277d;
    border-radius: 5px;
    background-color: white;
    z-index: 1999;
    padding-bottom: 10px;
    input[type="file"] {
    display: none;
  }
    .AreaIamge {
      height: 450px;
      width: 650px;
      border-radius: 2.5px;
      border: solid 4px #00277d;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin-top: 10px;
      margin-bottom: 12px;
      img{
        width: 100%;
        width: 100%;
      }
    }
    .fechar {
      display: flex;
      height: auto;
      width: 100%;
      justify-content: center;
      align-items: center;

      .tile{
        width: 600px;
        padding-left: 5px;
        margin-top: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: start;
      }
        
      }
      .buttonFechar{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        overflow: hidden;
        height: 65px;
        padding-top: 8px;
        cursor: pointer;

        img{
          transition: 0.5s;
          width: 50px;
          height: 50px;
        }

        img:hover{
          transform: scale(1.1);
        }
      }
    }
    .AreaButton {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      .Next {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 50px;
        background-color: #00277d;
        border: 0px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }
      .Adicionar {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 50px;
        background-color: #00277d;
        border: 0px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }
    }
  }
  .ModalService {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 560px;
    height: 330px;
    border: 2px solid #00277d;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 150px;

    @keyframes ModalAviso {
      from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    img {
      width: 140px;
      height: 130px;
    }

    h2 {
      font-size: 25px;
      color: #00277d;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin-bottom: 25px;
    }

    select {

      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      min-height: 50px;
      margin-right: 50px;
      padding: 5px;
      background-color: white;
      border: 2px solid #dadada;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: #074ead;
      cursor: pointer;
    }

    .Close {
      display: flex;
      align-items: start;
      color: #00277d;
      width: 100%;
      height: 65px;
      border: 0px;
      background: transparent;
    }

    .Close h2 {
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
      width: 40px;
      height: 50px;
      padding: 0px;
      margin: 0px;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
    }

    .Next {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
`;
