import styled from "styled-components";
export const ContainerCarousel = styled.div`
  width: 1300px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: solid 0.3px #dadada;
  align-items: center;
  /* background-color: red; */

  div {
    min-height: 250px;
    min-width: 300px;
  }
  img {
    width: 100px;
    height: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
    border-radius: 50px;
  }
  .each-slide > div {
    
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: auto;
    margin-right: 5px;
    border-radius: 10px;
    border: solid 1px black;
  }

  display: flex;
  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
  .informationsClient {
    width: 1000px;
    height: 50px;
  
    display: flex;
    flex-direction: row;
    text-align: center;  
  }
  .informations{
    width: 1000px;
    height: 50px;
    display: flex;
    flex-direction: row;
    text-align: center;  
  }
  .image-slide {
    max-height: 300px;
  }
`;
