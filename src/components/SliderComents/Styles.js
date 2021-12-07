import styled from "styled-components";
export const ContainerCarousel = styled.div `
  width: 1360px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center; 

  h1{
    color: #00277D;
  }

  .each-slide{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      width: 450px;
      height: 250px;
      border-radius: 5px;
      border: 4px solid #074ead;
      margin: 2px;
      position: relative;
      overflow: hidden;
  }

  .PhotoComments{
      border-radius: 100%;
      border: 2px solid #dadada;
      width: 70px;
      height: 70px;
      position: absolute;
      top: 25px;
      left: 45px;
      overflow: hidden;

      img{
        width: 70px;
        height: 70px;
      }
  }

  .NameComments{
    text-overflow: ellipsis;
    color: #00277D;
    font-size: 15px;
    height: 40px;
    width: 60%;
    margin-top: 20px;
    margin-left: 65px;
  }

  .ContainerComments{
    font-size: 18px;
    height: 80px;
    width: 65%;
    color: black;
    margin-top: 20px;
    overflow-wrap: break-word;

    p{
      width: 100%;
    }
  }

  .ContainerTime{
      overflow: hidden;
      width: 65%;
      height: 30px;
      color: #5679E0;

      h3{
        font-size: 18px;
      }
    }

  .react-slideshow-container .default-nav {
    height: 250px;
    display: flex;
    background: #074ead;
    width: -90px;
    border: 0;
    fill: white;
    text-align: center;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

  .react-slideshow-container .default-nav:hover{
    background-color: #00277D;
      fill: white;
    }
`;
