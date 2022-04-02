import styled from "styled-components";

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  border-bottom: solid 0.3px #dadada;
  padding: 0 24px 0 24px;
  
  div {
    width: 1360px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align : center;
    overflow: hidden;
    
    div {
      span {
        display: flex;
        justify-content: center;
        margin-left: 30px;
        width: 135px;
        height: 80px;
        align-items: center;
        font-family: "Baloo 2";
        font-size: 20px;
        color: #074EAD;
        font-weight: bolder;
      }
      span:hover {
        background-color: #074ead;
        transition: 0.5s;
        color: white;
      }
    }
    img {
      height: 40px;
    }
  }
`;
