import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: red;
  width: 100vw;
  height: 1268px;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  background-color: green;
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
  background-color: aliceblue;
  width: 1360px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;

    .Filters{
      background-color: purple;
      width: 1360px;
      height: 100px;
    }

    .Results{
      background-color: yellowgreen;
      width: 360px;
      height: 100px;
    }
`;

export const CardContainer = styled.div`
  background-color: yellow;
  width: 1390px;
  min-height: 250px;
  height: auto;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
`;

export const Profile = styled.div`

`;

export const Contact = styled.div`

`;


