import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors[0]};
    border-style: solid none none;
    border-width: 1px 0px 0px;
  line-height: 16px;
  padding: 48px 0px;
  font: "Roboto";
  font-family: sans-serif;
  outline: solid;
`;
