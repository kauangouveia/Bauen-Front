import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const SloganContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 350px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  .InputAndSlogan {
    display: flex;
    width: 900px;
    height: 300px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    font-size: 25;
    font-family: "Baloo 2";

    span {
      color: #00277d;
    }

    .InputWithImg {
      width: 100%;
      height: 150px;
      display: flex;

      justify-content: center;
      input {
        margin-top: 20px;
        width: 500px;
        height: 50px;
        font-size: 20px;
        border: solid 0.5px #dadada;
        padding: 10px;
      }

      input::placeholder {
        color: #5679e0;
      }

      img {
        margin-top: 20px;
        background-color: #074EAD;
        width: 50px;
        height: 50px;
        margin-left: 5px;
      }

      img:hover{
        cursor: pointer;
      }
    }
  }

  .Illustration {
    display: flex;
    width: 460px;
    height: 300px;

    > img {
      width: 460px;
      height: inherit;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 320px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: hidden;

  .AreaOfPicture {
    width: 280px;
    height: 280px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-top: 10px;
      color: #00277d;
      font-family: "Baloo 2";
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const CardContainerServices = styled.div`
  display: flex;
  width: 100vw;
  height: 385px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Baloo 2";

  h1{
    color: #00277d;
    overflow: hidden;
    margin-top: 15px;
  }

  div {
    flex-direction: row;
    display: flex;
    width: 1100px;
    height: 320px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 8px;
    
    .AreaOfServices {
      display: flex;
      font-size: 16px;
      flex-direction: column;
      width: 150px;
      height: 130px;
      color: #00277d;
      background-color: black;
      margin-left: 20px;
      margin-bottom: 10px;
      background-color: white;
      border-radius:5px;
      padding: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: 0.3s ease-out;

      
      h2{
        overflow: hidden;
        margin-top: 70px;
      }

      .Home{
        position: absolute;
        opacity: 1;
        margin-top: -15px;
      }

      .HomeLight{
        position: absolute;
        opacity: 0;
        margin-top: -15px;
      }
    }

    .AreaOfServices:hover{
      background-color:#074EAD;
      color: white;
      cursor: pointer;

      .Home{
        opacity: 0;
        transition: 0.3s ease-out;
        margin-top: -15px;
      }

      .HomeLight{
        opacity: 1;
        transition: 0.3s ease-out;
        margin-top: -15px;
      }
    }
  }
`;
