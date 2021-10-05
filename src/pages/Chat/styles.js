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
  display: flex;
  justify-content: center;
  align-items: center;
  .ChatBox {
    width: 1360px;
    height: 830px;
    border: solid 0.3px #dadada;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .Conversation {
      width: auto;
      height: 800px;
      background-color: red;
      .listItem{
        width: auto;
        height: 50px;
        background-color: blue;
        margin-bottom: 30px;
        display: flex;
        padding: 10px;
        .minemessage{
          width: auto;
          height: auto;
          background-color:purple;
        }
        .othermessage{
          width: auto;
          height: auto;
          background-color:white;
        }
      }
      .mine{
        width: auto;
        height: 50px;
        margin-bottom: 30px;
        flex-direction: row-reverse;
      }
      .other{
        width: auto;
        height: 50px;
        margin-bottom: 30px;
        flex-direction: row;
      }

    }
  }
  .ContainerTalk {
    width: auto;
    height: 680px;
  }
  .ContainerSendMessage {
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    border: solid 0.3px #dadada;
    .Emojis {
      width: 360px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 35px;
        height: 50px;
      }
      img:hover {
        width: 40px;
        height: 50px;
        cursor: pointer;
      }
    }
    .Messages {
      width: 800px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      form {
        height: 55px;
        width: 700px;
        input {
          width: 550px;
          height: 50px;
          border: 2px solid black;
          border-radius: 4px;
          font-size: 20px;
          padding: 15px;
        }
        button {
          width: 100px;
          height: 50px;
          border-radius: 10px;
          margin-left: 40px;
          border: 0px;
          color: white;
          background-color: #074ead;
        }
        button:hover {
          cursor: pointer;
          box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.24),
            0 3px 3px 0 rgba(0, 0, 0, 0.19);
        }
      }
    }
  }
`;
