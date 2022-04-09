import styled from 'styled-components';

const CardInfoContainer = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colors[0]};
  width: 100%;

  p {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    border-bottom: 2px solid black;
    text-transform: uppercase;
    font-weight: bold;
  }

  div {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export default CardInfoContainer;
