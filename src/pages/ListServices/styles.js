import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 1268px;
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
        border: solid 0.5px #dadada;
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
      img:hover{
        cursor: pointer;
      }
    }
`;

export const ContainerFilter = styled.div`
  width: 1360px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;

    .Filters{
      display: flex;
      flex-direction: row;
      background-color: #074EAD;
      width: 1300px;
      height: 80px;
      align-items: center;
      justify-content: center;

    img{
      width: 80px;
      height: 80px;
      margin-right: 15px;
    }

    img:hover{
      cursor: pointer;
    }

      h1{
        font-size: 30px;
        color: white;
        font-weight: bold;
        margin-right: 50px;
      }

      h2{
        font-size: 25px;
        color: white;
        font-weight: 500;
        margin-right: 50px;
      }

      h2:hover{
        cursor: pointer;
        border-bottom: 3px solid white;
      }
    }

    .Results{
      float: left;
      margin-top: 20px;
      padding-top: 5px;
      width: 1300px;
      height: 50px;

      h2{
      margin-left: 20px;
      font-size: 25px;
      font-family: "Baloo 2";
    }
  }
`;

export const FeedContainer = styled.div`
  width: 1390px;
  box-sizing: border-box;
  min-height: 250px;
  height: auto;
  overflow-y: scroll;
  padding-left: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;

export const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 180px;
  width: 1290px;
`;

export const Profile = styled.div`
  width: 1000px;
  height: 180px;
  border: 2px solid #DADADA;
  border-radius: 5px;
  margin-right: 15px;
  float: left;
`;

export const Contact = styled.div`
  background-color: #074EAD;
  border-radius: 5px;
  width: 250px;
  height: 180px;
  text-align: center;
  padding-top: 20px;
  float: left;
  cursor: pointer;
  
  img{
      width: 100px;
      height: 100px;
    }

    h2{
      font-size: 30px;
      color: white;
    }
`;


