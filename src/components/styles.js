import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: solid 0.3px #a8a7a7 ;
  div {
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    div {
       
      span {
        display: flex;
        margin-left: 40px;
        width: 130px;
        height: 80px;
        text-align: center;
        align-items: center;
        font-family: Fira code;
        font-size: 20px;
        color: #00277D;
      }
      span:hover {
        background-color: #074EAD;
        transition: 0.5s;
        color: white;
      }
    }
    img {
      height: 60px;
    }
  }
`;
