import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 1360px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 46px;
  overflow: hidden;

  .InputWithImg {
    width: 100%;
    height: 150px;
    display: flex;

    justify-content: center;
    input {
      margin-top: 20px;
      width: 500px;
      border-radius: 5px;
      height: 40px;
      font-size: 20px;
      border: solid 0.5px gray;
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
    img:hover {
      cursor: pointer;
    }
  }
`;

export const ContainerFilters = styled.div`
  width: 1360px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .Filters {
    width: 600px;
    height: 80px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: inherit;

    h1 {
      font-size: 35px;
      color: #00277d;
    }

    h2 {
      color: white;
      font-weight: normal;
      margin-left: 20px;
      cursor: pointer;
    }

    h2:hover {
      border-bottom: 2px solid white;
    }
  }
`;

export const ContainerResult = styled.div`
  width: 1360px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .Result {
    width: 800px;
    height: 80px;
    display: flex;
    justify-content: center;
    margin: inherit;
  }
`;

export const ContainerFeed = styled.div`
  width: 1360px;
  height: 675px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const ContainerProfile = styled.div`
  width: 1100px;
  min-height: 650px;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 20px;
  flex-direction: column;
`;

export const CardProfile = styled.div`
  width: 1100px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  .Profile {
    width: 580px;
    height: 160px;
    margin-right: 10px;
    border: 2px solid gray;
    display: flex;
    overflow-y: hidden;
    margin-bottom: 10px;
    box-shadow: 5px 7px 4px #7d7d7d;
    .ProfileImage {
      width: 250px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 85%;
        height: 85%;
        border: 5px solid gray;
        border-radius: 10px;
      }
    }
    .Informations {
      width: 700px;
      height: 150px;
      display: flex;

      h2 {
        color: #00277d;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 15px;
      }

      h3 {
        color: #5679e0;
      }

      .NameAndRating {
        width: 400px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .Options {
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;

        .Favorite {
          display: flex;
          padding-right: 20px;
          align-items: center;
          justify-content: end;
          width: 150px;
          height: 60px;

          img {
            width: 35px;
            height: 35px;
            margin-right: 5px;
            cursor: pointer;
          }
        }

        .Services {
          width: 150px;
          height: 120px;
          display: flex;
          text-align: right;
          padding-right: 40px;
          padding-bottom: 10px;
          justify-content: center;
          flex-direction: column;
        }

        h4 {
          color: #5679e0;
          font-size: 18px;
        }
      }
    }
  }

  .Contact {
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    box-shadow: 5px 7px 4px #7d7d7d;
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: #074ead;
    cursor: pointer;

    img {
      width: 70px;
      height: 70px;
    }

    h2 {
      color: white;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  .ModalComment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 310px;
    border: 2px solid #00277d;
    border-radius: 10px;
    background-color: white;
    z-index: 1998;
    padding: 10px;
    .message {
      width: 100%;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 400px;
        height: 100px;
        border-radius: 5px;
        padding:10px;
        font-size:15px;
      }
    }

    .AreaButton {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      margin-bottom: 25px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 50px;
      background-color: #00277d;
      border: 0px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
  }
`;
