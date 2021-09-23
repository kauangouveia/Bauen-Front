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
  padding-top: 65px;
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
      background-color: #074EAD;
      width: 1300px;
      height: 80px;
    }

    .Results{
      margin-top: 10px;
      width: 200px;
      height: 50px;

      h2{
      margin-top: 5px;
      font-size: 25px;
      font-family: "Baloo 2";
    }
  }
`;

export const CardContainer = styled.div`
  width: 1390px;
  min-height: 250px;
  height: auto;
  overflow-y: scroll;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Profile = styled.div`
  background-color: blue;
  width: 1000px;
  height: 200px;
  margin-bottom: 20px;
  float: left;
`;

export const Contact = styled.div`
  background-color: thistle;
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  float: right;
`;


