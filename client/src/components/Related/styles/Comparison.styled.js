import styled from 'styled-components';

const ComparisonBackground = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 500;
`;

const ComparisonContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.8em;
  background: white;
  box-shadow: 10px;
  flex-direction: column;
  position: relative;
  width: 600px;
  background-color: ${(props) => props.theme.colors[0]};
  z-index: 1000;

  h3 {
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;

  thead th:nth-child(1) {
    width: 33%;
  }

  thead th:nth-child(2) {
    width: 33%;
  }

  thead th:nth-child(3) {
    width: 33%;
  }

  th {
    letter-spacing: 1px;
  }

  td {
    letter-spacing: 1px;
    text-transform: lowercase;
  }

  tbody tr {
    .center {
      text-align: center;
    }
  }

  tbody tr:nth-child(odd) {
    background-color: ${(props) => props.theme.colors[1]};
  }

  th, td {
    padding: 5px;
  }

  svg {
    height: 20px;
    width: 20px;
  }

`;

export { ComparisonBackground, ComparisonContainer, StyledTable };
