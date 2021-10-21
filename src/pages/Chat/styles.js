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
      .listItem{
        width: auto;
        height: 5px;
        display: flex;
        padding: 10px;
        text-align:right;
        
        .minemessage{
          min-height: 10px;
          min-width: 95px;
          max-width: auto;
          max-height: auto;
          background-color:#074ead;
          border-radius: 5px;
          padding: 5px ;
          display: flex;
          color: white;
         
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
        flex-direction: row-reverse;
      }
      .other{
        width: auto;
        height: 50px;
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
export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  .ModalWarning{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 290px;
    border: 2px solid #00277D;
    border-radius: 10px;
    background-color: white;
    z-index: 1998;

    @keyframes ModalWarning{
      from{
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to{
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    img{
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
    }

    h2{
      font-size: 25px;
      color: #00277D;
      margin-bottom: 15px;
    }

    h3{
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      margin: 5px;
    }

    .Next{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      width: 150px;
      height: 50px;
      background-color: #00277D;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }

  .ModalImageProfile{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 570px;
    height: 310px;
    border: 2px solid #00277D;
    border-radius: 10px;
    background-color: white;
    z-index: 1999;

    @keyframes ModalImageProfile{
      from{
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to{
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    img{
      width: 130px;
      height: 130px;
      margin-bottom: 10px;
    }

    h2{
      font-size: 25px;
      color: #00277D;
      margin-bottom: 15px;
    }

    h3{
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin: 5px;
    }

    .Next{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      background-color: #00277D;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 250px;
      height: 50px;
      background-color: #00277D;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }

  .ModalService{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 560px;
    height: 330px;
    border: 2px solid #00277D;
    border-radius: 10px;
    background-color: white;

    @keyframes ModalAviso{
      from{
        opacity: 0;
        transform: translate3d(0, -60px, 0);
      }
      to{
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    
    img{
      width: 140px;
      height: 130px;
    }

    h2{
      font-size: 25px;
      color: #00277D;
      margin-bottom: 15px;
    }

    h3{
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    .AreaButton{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin-bottom: 25px;
    }

    select{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      min-height: 50px;
      margin-right: 50px;
      padding: 5px;
      background-color: white;
      border: 2px solid #DADADA;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: #074EAD;
      cursor: pointer;
    }

    .Close{
      display: flex;
      align-items: start;
      color: #00277D;
      padding-left: 30px;
      width: 100%;
      height: 65px;
      border: 0px;
      background: transparent;
    }

    .Close h2{
      display: flex;
      width: auto;
      height: auto;
      padding: 0px;
      margin: 0px;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
    }

    .Next{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      background-color: #00277D;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }
`;