import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import StyledComparison from '../styles/Comparison.styled';

const ComparisonContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  flex-direction: column;
  position: fixed;
  width: 500px;
`;

function Comparison({ compare, toggleCompare, product }) {
  return compare
    ? createPortal(
      <StyledComparison>
        <ComparisonContainer>
          <button type="button" onClick={toggleCompare}>X</button>
          <table>
            <thead>
              <tr>
                <th>Current Product</th>
                <th>Features</th>
                <th>{product.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Check</td>
                <td>Fabric: Canvas</td>
                <td>Check</td>
              </tr>
            </tbody>
          </table>
        </ComparisonContainer>
      </StyledComparison>,
      document.body,
    ) : null;
}

export default Comparison;
