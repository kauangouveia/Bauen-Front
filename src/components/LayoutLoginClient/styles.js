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
    height: 1000px;
    background-color: #074EAD;  
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .AreaBlue {
      width: 1100px;
      height: 100vh;
      background-color: #074EAD;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      display: flex;
      img{
        width: 80%;
        height: 75%;
      }
    }
    .AreaLogin {
      display: flex;
      width: 900px;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color:white;
      .Logo{
        width: 400px;
        height: 100px;
        display: flex;
        justify-content: center; 

      }
      
    }
  
  }
`;