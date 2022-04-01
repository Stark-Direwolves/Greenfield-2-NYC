import styled from 'styled-components';

const RRcontainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border: 100px solid black;
  flex-basis: content;
  `;

const ReviewBox = styled.div`
  display: flex;
  flex-direction:
  column-gap: 20px;
  justify-content: space-between;
  box-sizing: 'border-box';
  minWidth: 100;
  border-radius: 30px;
  `;

const RatingsBox = styled.div`
  height:120px;
  width:700px;
  background-color:#e1e9f5;
  border:1px solid #c1cee0;
  border-radius: 10px;
  // display:flex;
  // justify-content:flex-start;
  // flex-direction: column;
`;

export default (RRcontainer, ReviewBox, RatingsBox);
