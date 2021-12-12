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
      height: 50px;
      font-size: 20px;
      border: solid 0.5px #dadada;
      padding: 10px;
    }
    input::placeholder {
      color: #5679e0;
    }
    img {
      margin-top: 20px;
      background-color: #074EAD;
      width: 50px;
      height: 50px;
      margin-left: 5px;
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
    width: 1080px;
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
    border: 1px solid #DADADA;
    display: flex;
    overflow-y: hidden;
    border-radius: 2.5px;

    margin-bottom: 10px;
    box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.25);
    .ProfileImage {
      width: 400px;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 85%;
        height: 85%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2.5px;
      }
    }
    .Informations {
      width: 700px;
      height: 160px;
      display: flex;

      h2 {
        color: #00277d;
        font-size: 25px;
        margin-top: 5px;
        margin-bottom: 25px;
        font-weight: bold;
        overflow: hidden;
      }

      h3 {
        color: #5679e0;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 25px;
        overflow: hidden;
      }

      h4{
        font-size: 18px;
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
            margin-top: 10px;
            margin-right: 15px;
            cursor: pointer;
          }
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
    transition: 0.3s ease-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 2.5px;
    text-align: center;
    background-color: #074ead;
    cursor: pointer;

    img {
      width: 85px;
      height: 85px;
    }

    h2 {
      font-size: 28px;
      color: white;
  }
  }
`;
