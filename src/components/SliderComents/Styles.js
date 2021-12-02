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
    img{
      width: 450px;
      height: 250px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height:auto;
    margin-right: 5px;
    border-radius: 10px;
    border: solid 1px black;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }

  .image-slide {
    max-height: 300px;
  }
`;
