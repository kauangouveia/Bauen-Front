import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 1360px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 46px;
  overflow: hidden;

  .InputWithImg {
    width: 100%;
    height: 150px;
    display: flex;

    justify-content: center;
    input {
        margin-top: 20px;
        width: 500px;
        height: 50px;
        font-size: 20px;
        border: solid 0.5px gray;
        padding: 10px;
      }
    input::placeholder {
      color: #5679e0;
    }
    img {
        margin-top: 20px;
        background-color: #074EAD;
        width: 50px;
        height: 50px;
        margin-left: 5px;
      }
    img:hover {
      cursor: pointer;
      }
    }
`;

export const ContainerFilters = styled.div`
  width: 1360px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .Filters{
    width: 800px;
    height: 65px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    border-radius: 2.5px;
    justify-content: center;
    align-items: center;
    margin:inherit;
    background-color: #074ead;

    img{
      width: 70px;
      height: 70px;
      margin-right: 10px;
      cursor: pointer;
    }

    h1{
      font-size: 25px;
      color: white;
      
    }

    h2{
      color : white;
      font-weight: normal;
      margin-left: 20px;
      cursor: pointer;
    }

    h2:hover{
      border-bottom: 2px solid white;
    }
  }
`;

export const ContainerResult = styled.div`
  width: 1360px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .Result{
    display: flex;
    justify-content: center;
    width: 800px;
    height: 80px;
    display: flex;
    margin:inherit;
  }
`;

export const ContainerFeed = styled.div`
  width: 1360px;
   height: 675px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const ContainerProfile = styled.div`
  width: 1100px;      
  min-height: 650px;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 20px;
  flex-direction: column;
`;

export const CardProfile = styled.div`
  width: 850px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  
  .Profile{
    width: 680px;
    height: 160px;
    margin-right: 10px;
    border: 2px solid gray;
    display: flex;
    overflow-y: hidden;
    border-radius: 2.5px;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.25);
    .ProfileImage{
      width: 200px;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      
    .RewardUser{
      position: absolute;
      width: 80px;
      height: 80px;
      top: 80px;
      left: 75px;
    }
    
    .PhotoUser{
      width: 75%;
      height: 70%;
      border-radius: 100%;
      border: 4px solid #FF5C00;
    }
  }
    .Informations{
      width: 700px;
      height: 150px;
      display: flex;

      h2{
        color: #00277D;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      h3{
        color: #5679E0;
      }
      
      .NameAndRating{
        width: 400px;
        height: 150px;
        display: flex;
        flex-direction:column;
        justify-content: center;

        .AreaStars {
          display: flex;
          height: auto;
          width: 175px;
          margin-bottom: 10px;
          justify-content: center;
          align-items: center;

      .CenterStar {
        display: flex;
        width: 250px;
        height: auto;

        .Star {
          cursor: pointer;
          transition: color 200ms;
        }
      }
    }
      .ratingButton {
        display: none;
      }
    }

      .Options{
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction:column;
        
        .Favorite{
          display: flex;
          padding-right: 20px;
          align-items: center;
          justify-content: end;
          width: 160px;
          height: 150px;
          /* background-color: #074ead; */
          img{
            width: 35px;
            height: 35px;
            /* margin-right: 5px; */
            cursor: pointer;
          }
          .like{
            width: 35px;
            height: 50px;
           
            cursor: pointer;
          }
          .heartlike{
            width: 65px;
            height: 70px;
            margin-right: -15px;
            cursor: pointer;
          }
        }
        
        .Services{
          width: 165px;
          height: 60px;
          display: flex;
          text-align:right;
          padding-right: 40px;
          padding-bottom: 10px;
          justify-content: center;
          flex-direction: column;
        }

        h4{
          color: #5679E0;
          font-size: 18px;
        }
      }
    }
  }

  .Contact{
    width: 160px;
    display: flex;
    transition: 0.3s ease-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    box-shadow: 0px 8px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 2.5px;
    text-align: center;
    background-color: #074ead;
    cursor: pointer;

    img{
      width: 70px;
      height: 70px;
    }

    h2{
      color: white;
    }
  }
`;





