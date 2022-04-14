import styled from 'styled-components';

const ReviewBox = styled.div`
  display: flex;
  row-gap: 10px;
  justify-content: space-between;
  box-sizing: 'border-box';
  // max-height: 140px;
  // min-height: 140px;
  min-width: 875px;
  max-width: 875px;
  border-radius: 3px;
  border-top: 4px solid;
  // border-bottom: 3px solid;
  padding: 10px 10px;
  margin: 15px;
  flex-direction: column;
  align-items:center;
  font-family: "Roboto", sans-serif;
  // box-shadow: 2px 2px 2px #C7A794;
  background-color: rgb(232, 230, 230);


  Div1 {
    align-self: flex-start;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }
  Div2 {
    align-self: flex-end;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    position: relative;
    right: 10px;
    bottom: 50px;
    ;
  }
  Div3 {
    align-self: flex-start;
    font-family: "Roboto", sans-serif;
    margin-right: 15%;
    font-weight: 650;
  }
  Div4 {
    align-self: flex-start;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;

export default ReviewBox;
