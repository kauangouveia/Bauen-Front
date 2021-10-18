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
  width: 1200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
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
    border : 2px solid #074EAD;
    border-radius: 5px;
  }

  img{
    width: 350px;
    height: 350px;
  }

  img:hover{
    cursor: pointer;
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
    height: 75px;
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
    color: #074EAD;
    border: 2px solid #074EAD;
    border-radius: 5px;
    margin-right: 100px;
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
