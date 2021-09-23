import styled from "styled-components";
export const SlideContainer = styled.div`
  width: 100vw;
  height: 350px;
  background-color: white;
  display: flex;
  justify-content: center;
  border-bottom: solid 0.3px #dadada;
  .SliderContainer {
    width: 1360px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    overflow: hidden;

    /* background-color: black; */
    img {
      width: 374px;
      height: 210px;
      margin-left: 10px;
      background-color: bisque;
      border-radius: 10%;
    }
    div {
      background-color: bisque;
      div {
        background-color: black;
        button {
          color: white;
          background-color: blue;
          border: 0px;
        }
        button:hover {
          background-color: transparent;
        }
      }
    }
    button {
      background-color: transparent;
      border-radius: 0%;
      color: black;
    }  
  }

`;
