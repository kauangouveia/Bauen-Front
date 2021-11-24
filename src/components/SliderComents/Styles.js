import styled from "styled-components";
export const ContainerCarousel = styled.div`
  width: 1360px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: solid 0.3px #dadada;
  align-items: center;

  .Next{
    display: flex;
    font-size: 55px;
    padding-left: 5px;
    color: #00277D;
    align-items: center;
    justify-content: center;
    right: 30px;
    bottom: 150px;
    width: 50px;
    height: 50px;
    position: absolute;
    overflow-y: hidden;
  }

  .Return{
    display: flex;
    font-size: 55px;
    padding-right: 5px;
    color: #00277D;
    align-items: center;
    justify-content: center;
    left: 30px;
    bottom: 150px;
    width: 50px;
    height: 50px;
    position: absolute;
    overflow-y: hidden;
  }

  .container {
    width: 1300px;
    height: auto;

    .Title{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 55px;
      width:  1300px;
      color: #00277D;

      img{
        cursor: pointer;
        margin-left: 5px;
        width: 45px;
        height: 45px;
      }
    }
    
  .styles-module_carousel-base__3keqD {
      width: 1300px;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      position: relative;

      .styles-module_carousel-arrow__26sRw{
        background-color: transparent;
        width: 55px;
        height: 55px;
        border: 0px;
        background-size: 45px;
     
      } .styles-module_carousel-arrow__26sRw:hover{
          cursor: pointer;
      }
    }
  }

  .ContainerItem{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    margin-right: 4px;
    padding: 5px;
    width: 295px;
    height: 200px;
    border-radius: 5px;
    border: 2px solid #00277D;
    overflow: hidden;

    .ItemSlide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 295px;
      height: 190px;
      margin-left: 5px;
      margin-right: 5px;
      overflow: hidden;

      h2{
        font-size: 19px;
        color: #00277D;
      }

      p{
        font-size: 17px;
        color: black;
      }

      h3{
        margin-top: 2px;
        font-size: 17px;
        color: #dadada;
      }
    }
  }  
`;
