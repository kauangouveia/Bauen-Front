import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 2000px;
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

export const ContainerFilters = styled.div`
  width: 1360px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .Filters{
    width: 1200px;
    height: 100px;
    margin:inherit;
    background-color: #074ead;
  }
`;

export const ContainerResult = styled.div`
  width: 1360px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 80px;
`;

export const ContainerFeed = styled.div`
  width: 1360px;
  height: 675px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerProfile = styled.div`
  width: 1360px;
  min-height: 650px;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 5px;

  .Profile{
    width: 800px;
    height: 150px;
    margin-right: 10px;
    background-color: thistle;
  }

  .Contact{
    width: 200px;
    height: 150px;
    background-color: tomato;
  }
`;





