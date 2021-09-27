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
    width: 1040px;
    height: 80px;
    border-radius: 5px;
    margin:inherit;
    background-color: #074ead;

    img{
      width: 70px;
      height: 70px;
    }

    h1{
      font-size: 25px;
      color: white;
    }

    h2{
      color : white;
      font-weight: normal;
    }

    h2:hover{
      border-bottom: 2px solid white;
    }
  }
`;

export const ContainerResult = styled.div`
  width: 1360px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 160px;
`;

export const ContainerFeed = styled.div`
  width: 1360px;
  height: 675px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerProfile = styled.div`
  width: 1100px;
  min-height: 650px;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 20px;

  .Profile{
    width: 820px;
    height: 150px;
    float: left;
    margin-right: 10px;
    border: 2px solid #DADADA;
    border-radius: 5px; 
  }

  .ProfileImage{
    width: 176px;
    height: 146px;
    background-color: #074ead;
  }

  .Contact{
    width: 220px;
    height: 150px;
    border-radius: 5px;
    padding-top: 15px;
    text-align: center;
    background-color: #074ead;
    cursor: pointer;

    img{
      width: 80px;
      height: 80px;
      
    }

    h2{
      color: white;
    }
  }
`;





