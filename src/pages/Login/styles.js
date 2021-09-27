import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .containerLogin {
    width: 100vw;
    height: 800px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .AreaBlue {
      width: 900px;
      height: 100vh;
      background-color: blue;
    }
    .AreaLogin {
      display: flex;
      width: 400px;
      height: 100vh;
      background-color: green;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .Logo{
        width: 400px;
        height: 100px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;  
      }
      .ContainerInput {
        width: 400px;
        height: 300px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      form {
        width: 300px;
        height: 100px;
        background-color: purple;
        input {
          align-items: center;
          width: 300px;
          height: 40px;
          margin-bottom: 10px;
          border-radius: 3%;
          border: 1px solid #000000;
        }
      }
      div{
        width: 300px;
        height: 30px;
        background-color:orange;
        display: flex;
        justify-content: end;
      }
      .title{
        width: 300px;
        height: 40px;
        background-color:orange;
        display: flex;
        justify-content: center;
      }
    
    }
  
  }
`;
