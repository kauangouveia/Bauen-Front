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
    width: 1200px;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 800px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;

    .PerfilPost{
      display: flex;
      justify-content: center;
      padding-top: 25px;
      width: 150px;
      height: 200px;
    }

    .PerfilImage{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #074EAD;
    }

    .TitlePost{
      display: flex;
      width: 500px;
      height: auto;
      padding-top: 30px;
      flex-direction: column;
    }

    h2{
      font-size: 25px;
      font-weight: bold;
      color: #00277D;
    }

    .ServicesList{
      width: 500px;
      height: 120px;
      padding-top: 10px;
    }

    select{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
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
`;

export const PostImage = styled.div`
  display: flex;
  width: 1200px;
  height: 450px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .post{
    display: flex;
    width: 550px;
    height: 420px;
    align-items: center;
    justify-content: center;  
    margin-left: auto;
    margin-right: auto;
    border : 4px solid #074EAD;
    border-radius: 5px;
  }

  img{
    width: 300px;
    height: 300px;
  }

  img:hover{
    cursor: pointer;
    width: 310px;
    height: 310px;
  }
`;

export const PostButtons = styled.div`
  display: flex;
  width: 1200px;
  height: 150px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .areaButtons{
    display: flex;
    width: 600px;
    height: 80px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .Cancel{
    width: 155px;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    color: #074EAD;
    border: 2px solid #074EAD;
    border-radius: 5px;
    margin-right: 100px;
    background-color: white;
  }

  .Cancel:hover{
    cursor: pointer;
    width: 156px;
    height: 56px;
  }

  .Confirm{
    width: 155px;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 2px solid #074EAD;
    border-radius: 5px;
    background-color: #074EAD;
  }

  .Confirm:hover{
    cursor: pointer;
    width: 156px;
    height: 56px;
  }
`;
