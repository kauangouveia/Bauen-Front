import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 800px;
  border-left: 2px solid #dadada;
  border-right: 2px solid #dadada;
  margin-left: auto;
  margin-right: auto;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 800px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  flex-direction: column;

  .HeaderPost {
    display: flex;
    width: 800px;
    height: 200px;
    overflow: hidden;
    
    .PerfilPost {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 135px;
    }

    .PerfilImage {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        border: 4px solid #dadada;
        border-radius: 50%;
      }
    }
  }
  .Description {
    margin-top: 10px;
    display: flex;
    padding-left: 150px;
    padding-right: 150px;
    width: 800px;
    height: 100px;

    input {
      width: 100%;
      height: 30px;
      font-size: 20px;
      color: #5679e0;
      font-weight: bold;
      border: 0px;
      border-bottom: 2px solid #00277d;
      padding-left: 5px;
    }
    input::placeholder {
      color: #5679e0;
      font-weight: bold;
    }
  }
  .TitlePost {
    display: flex;
    justify-content: center;
    width: 500px;
    height: 135px;
    flex-direction: column;
    overflow: hidden;
  }

  h2 {
    height: 60px;
    margin-top: 27px;
    font-size: 25px;
    font-weight: bold;
    overflow: hidden;
    color: #00277d;
  }

  .ServicesList {
    width: 500px;
    height: 120px;
    padding-top: 5px;
  }

  select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    min-height: 40px;
    padding: 5px;
    background-color: white;
    border: 2px solid #00277d;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #074ead;
    cursor: pointer;
  }
`;

export const PostImage = styled.div`
  display: flex;
  width: 1000px;
  height: 650px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  overflow: hidden;
  .postImage {
    width: 600px;
    height: 700px;
    border: 4px solid #074ead;
    border-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;


    > img {
      display: none;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  }
  .post {
    display: flex;
    overflow: hidden;
    width: 600px;
    height: 150px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid #074ead;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  input[type="file"] {
    display: none;
  }
  img {
    display: flex;
    cursor: pointer;
    width: 120px;
    height: 90px;
  }
`;

export const PostButtons = styled.div`
  display: flex;
  width: 1000px;
  height: 150px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .areaButtons {
    display: flex;
    width: 600px;
    height: 80px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .Cancel {
    width: 155px;
    height: 55px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #074ead;
    border: 2px solid #074ead;
    border-radius: 5px;
    margin-right: 100px;
    background-color: white;
  }

  .Confirm {
    width: 155px;
    height: 55px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 2px solid #074ead;
    border-radius: 5px;
    background-color: #074ead;
  }
`;
