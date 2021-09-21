import styled from "styled-components";

export const Slogan = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  display: flex;
  border-bottom: solid 0.5px #dadada;
  div:nth-child(1) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div:nth-child(1) {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: "Baloo 2";
      h1 {
        color: black;
        span {
          color: #074ead;
        }
      }
    }

    div:nth-child(2) {
      width: 100%;
      height: 30%;
      input {
        width: 530px;
        height: 45px;
        border: 0px;
        padding: 10px;
        /* box-shadow: 2px 2px 2px #adadad; */
        border: solid 1px #dadada;
        font-size: 20px;
      }
      input::placeholder {
        color: #074ead;
      }
      img {
        height: 45px;
        margin-left: 5px;

        background-color: #074ead;
      }
    }
  }

  div:nth-child(3) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #074ead;
    flex-direction: row;
  
    justify-content: center;
    img:nth-child(1){
        width: 500px;
    }
  }
`;
