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
  height: 302px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color:black;

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
  height: 302px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color:blue;
  >div{
    width: 230px;
    height: 230px;
    border-radius: 100%;
    background-color:red;
    margin-left:50px
  }
`