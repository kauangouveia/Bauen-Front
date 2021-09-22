import styled from "styled-components";
import home from "../../assets/home.svg";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 1268px;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 350px;
  border-bottom: solid 0.5px #dadada;
  align-items: center;
  justify-content: center;
  background-color:black;
  div{
    height: 300px;
    width: 300px;
    background-color:white;
    border-radius: 100%;
    border: solid 4px #FF5C00;
    background-image:url();
  }
`