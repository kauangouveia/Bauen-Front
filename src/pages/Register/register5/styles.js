import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;

  .ContainerInput {
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5%;

    img {
      width: 350px;
      margin-top: 30px;
      margin-bottom: 30px;
      margin-right: 50px;
    }
  }
  form {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    input {
      align-items: center;
      width: 300px;
      height: 40px;
      margin-bottom: 10px;
      border-radius: 3%;
      border: 1px solid #000000;
      padding: 10px;
      font-size: 12px;
    }
    input::placeholder {
      color: #5679e0;
    }
  }
  .EsqueciSenha {
    width: 300px;
    height: 30px;
    color: #074ead;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
  }
  .EsqueciSenha:hover {
    cursor: pointer;
  }
  .title {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  button {
    width: 300px;
    height: 45px;
    border-radius: 5px;
    border: 0px;
    color: white;
    background-color: #074ead;
    box-shadow: 0 0 0.5em gray;
    cursor: pointer;
    font-family: "Baloo 2";
    margin-top: 20px;
  }
  .Line {
    width: 300px;
    height: 2px;
    background-color: gray;
    margin-top: 30px;
  }
  p {
    text-align: center;
    color: #074ead;
    font-size: 15px;
  }
`;
