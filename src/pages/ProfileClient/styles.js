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
  height: auto;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color: #074ead;
  flex-direction: row-reverse;
  flex-direction: column;
  color:white;
  

  .info{  
      background-color: green;
      width: 100%;

    }
  h1{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;


  }
  h2{
    display: flex;
      flex-direction: row;
      justify-content: flex-start;
      background-color: red;
      width:85%;
  }
  .chat{
    display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 80%;
  }
  img{
    width: 50px;
    height: 50px;
  }

  .PictureProfile {
    flex-direction: column-reverse;
    flex-direction: row-reverse;
    display: flex;
    height: 250px;
    width: 250px;
    background-color: #dadada;
    border-radius: 100%;
    background-image: url(${useDefault});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: flex-end;  
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 300px;
  overflow-y:hidden;
  justify-content: center;
  font-family: "Baloo 2";
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

