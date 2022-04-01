import styled from 'styled-components';

const RRcontainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
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

export default (RRcontainer, ReviewBox);