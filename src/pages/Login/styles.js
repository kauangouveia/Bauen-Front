import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .containerLogin {
    display: flex;
    width: 100vw;
    height: 590px;
    overflow: hidden;
    display: flex;

    .AreaBlue {
      width: 70vw;
      height: 590px;
      background-color: #074ead;
    }
    .AreaLogin {
      width: 50vw;
      height: 590px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .AreaOfInput {
        width: 50vw;
        height: 150px;
        background-color: yellow;
        align-items: center;
        justify-content: center;
        display: flex;
        input {
          display: flex;
          width: 300px;
          height: 50px;
          font-size: 25;
          font-family: "Baloo 2";
            margin-bottom: 10px;
        }
      }
    }
  }
`;
