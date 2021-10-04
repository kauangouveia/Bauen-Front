import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ContainerChat = styled.div`
  width: auto;
  height: 850px;
  background-color: black;  
  display: flex;
  justify-content:center;
  align-items: center;
  .ChatBox{
    width: 1360px;
    height: 800px;
    background-color: blue;
  }
  .ContainerTalk{
    width: auto;
    height: 680px;
    background-color: red;
  }
  .ContainerSendMessage{
    width: auto;
    height: 120px;
    background-color: green;
  }
`;
