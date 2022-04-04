import styled from 'styled-components';

const ReviewBox = styled.div`
  display:flex;
  row-gap: 12px;
  justify-content: space-between;
  box-sizing: 'border-box';
  max-height: 140px;
  min-height: 140px;
  min-width: 700px;
  max-width: 700px;
  border-radius: 3px;
  border: 1px solid;
  padding: 10px 10px;
  margin: 15px;
  flex-direction: column;
  align-items:center;

  Div1 {
    align-self: flex-start;
  }
  Div2 {
    align-self: flex-end;

  }
  Div3 {
    align-self: flex-start;
  }
`;

export default ReviewBox;
