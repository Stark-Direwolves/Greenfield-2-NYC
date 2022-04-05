import styled from 'styled-components';

const Button = styled.button`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  z-index: 1;

  svg:hover {
    fill: black;
  }
`;

export default Button;
