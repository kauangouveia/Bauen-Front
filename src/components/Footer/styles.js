import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 210px;
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
    text-align: justify;
    justify-content: center;

    div {
      display: flex;
      width: 350px;
      height: 100%;
      margin-left: 15px;
      padding-top: 15px;
      flex-direction: column;
      
      p{
        margin-bottom: 2px;
      }

      p:hover {
        cursor: pointer;
      }
    }
    
    .Upgrade{
      width: 200px;
      height: auto;
      margin-left: 66px;
      text-align: center;
    }

    .Private{
      width: 200px;
      height: auto;
      margin-left: 32px;
      text-align: center;
    }

    .Professionals{
      width: 200px;
      height: auto;
      margin-left: 44px;
      text-align: center;
    }

    .About{
      width: 200px;
      height: auto;
      margin-left: 71px;
      text-align: center;
    }

    .TextFooter{
      width: auto;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      text-align: justify;
    }
  }
`;
