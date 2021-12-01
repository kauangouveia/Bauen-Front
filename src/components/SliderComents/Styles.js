import styled from "styled-components";
export const ContainerCarousel = styled.div`
  width: 1360px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border-bottom: solid 0.3px #dadada;
  align-items: center;
  background-color: red;

  div {
    min-height: 300px;
    min-width: 300px;
  }

  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
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
