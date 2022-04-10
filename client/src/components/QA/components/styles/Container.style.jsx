import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors[0]};
  height: 85vh;
  width: 90vw;
  margin: 16px 0px;
  font: "Roboto";
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;
