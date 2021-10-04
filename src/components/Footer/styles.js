import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 180px;
  background-color: white;
  display: flex;
  justify-content: center;
  background-color: #074ead;
  font-family: "Baloo 2";
  font-size: 12px;
  color: white;
  .ContainerFooter {
    width: 1360px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    div {
      display: flex;
      width: 350px;
      height: 100%;
      margin-left: 20px;
      padding-top: 20px;
      text-align: justify;
      flex-direction: column;
      p:hover {
        cursor: pointer;
    }
    }
   
  }
`;
