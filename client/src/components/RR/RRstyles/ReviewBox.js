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
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 10px 10px;
  margin: 15px;
  flex-direction: column;
  align-items:center;
  font-family: sans-serif;


  Div1 {
    align-self: flex-start;
    font-weight: 900;
    font-family: sans-serif;
  }
  Div2 {
    align-self: flex-end;
    font-family: sans-serif;
    font-weight: 900;
    position: relative;
    right: 10px;
    bottom: 50px;
    ;
  }
  Div3 {
    align-self: flex-start;
    font-family: sans-serif;
    margin-right: 15%;
  }
  Div4 {
    align-self: flex-start;
    font-family: sans-serif;
  }
`;

export default ReviewBox;
