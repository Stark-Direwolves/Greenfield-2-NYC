import styled from 'styled-components';

const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 20px;
  background-color: rgb(128, 128, 128, 0.5);
  border: none;

  svg {
    margin: 0 auto;
    width: 25px;
    height: 25px;
    color: black;
  }
`;

export default RightButton;
