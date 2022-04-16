import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors[0]};
  /* height: 85vh; */
  ${({styles}) => `${styles}`};
  width: 100%;
  margin: 16px 0px;
  font: "Roboto";
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
