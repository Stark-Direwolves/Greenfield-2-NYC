import styled from 'styled-components';

const LeftButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 20px;
  background-color: rgb(128, 128, 128, 0.5);
  border: none;

  svg {
    margin: 0 auto;
    width: 25px;
    height: 25px;
    color: black;
  }
`;

export default LeftButton;
