import styled from "styled-components";
import useDefault from "../../assets/user.png";
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
  height: 400px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color: #074ead;
  flex-direction: row-reverse;
  flex-direction: column;
  padding: 25px;
  color: white;

  .PictureProfile {
    flex-direction: column-reverse;
    flex-direction: row-reverse;
    display: flex;
    height: 250px;
    width: 250px;
    background-color: #dadada;
    border-radius: 100%;
    background-position: center;
    align-items: flex-end;
    margin-bottom: 25px;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .AreaInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    
    .AreaLocation{
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      height: auto;
      font-size: 25px;
      font-weight: bold;

      img{
        width: 50px;
        height: 50px;
      }
    }

    .AreaName{
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      height: auto;
    }

    .AreaChat{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: auto;

      img{
        width: 50px;
        height: 50px;
      }
    }
  }
  
  img{
    width: 50px;
    height: 50px;
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 300px;
  overflow-y:hidden;
  justify-content: center;
  font-family: "Baloo 2";
  margin-top: 20px;
  margin-bottom: 10px;

  .Informations {
    display: flex;
    height: 400px;
    width: 1300px;
    justify-content: center;
    background-color: white;
    
    .ButtonsOfProfile {
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 800px;
      justify-content: center;
      align-items: center;
      font-family: "Baloo 2";

      button {
        width: 500px;
        height: 70px;
        border-radius: 5px;
        border: 0px;
        color: white;
        background-color:#074ead;
        box-shadow: 0 0 0.5em gray;
        cursor: pointer;
        font-family: "Baloo 2";
        margin-bottom: 15px;
      }
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
`;

