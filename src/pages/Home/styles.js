import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 1268px;
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
        height: 40px;
        font-size: 20px;
        border: solid 0.5px #dadada;
        padding: 10px;
      }
      input::placeholder {
        color: #5679e0;
      }
      img {
        margin-top: 20px;
        width: 40px;
        height: 40px;
        margin-left: 15px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-top: 10px;
      color: #00277d;
      font-family: "Baloo 2";
    }
    div {
      border-radius: 100%;
    }
    img {
      width: 200px;
      height: 200px;
      background-color: #cce9ff;
    }
  }
`;

export const CardContainerServices = styled.div`
  display: flex;
  width: 100vw;
  height: 330px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Baloo 2";
  div {
    flex-direction: row;
    display: flex;
    width: 100vw;
    height: 150px;
    align-items: center;
    justify-content: center;
    .AreaOfServices {
      font-size: 13px;
      flex-direction: column;
      width: 130px;
      height: 130px;
      background-color: black;
      margin-left: 20px;
      background-color: white;
      border-radius:5px;
      padding: 5px;
      box-shadow: 0 0 0.5em #48494a;
      /* transition: 0.25s; */
      transition: 0.3s ease-out;

      
    }
    .AreaOfServices:hover{
        background-color:#074EAD;
        color: white;
        cursor: pointer;
    transform: translateY(-8px);

        svg{
          color: white;
        }
      }
  }
`;
