import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #074ead;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    width: auto;
    height: auto;
    margin-bottom: 10px;
    text-align: center;
  }
  .Options {
    width: 300px;
    height: 70px;
    background-color: #5679e0;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row-reverse;
    color: white;
  }
`;
