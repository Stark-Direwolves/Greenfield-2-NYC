import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import styled from 'styled-components';

const StyledRow = styled.tr`
  .center {
    text-align: center;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

function Table({ feature, current, related }) {
  const toggleFeature = (product, features) => {
    for (let i = 0; i < product.length; i += 1) {
      if (product[i].feature === features.feature && product[i].value === features.value) {
        return true;
      }
    }
    return false;
  };

  return (
    <StyledRow>
      <td className="center">{toggleFeature(current, feature) ? <CheckIcon /> : null}</td>
      <td>
        {feature.feature}: {feature.value}
      </td>
      <td className="center">{toggleFeature(related, feature) ? <CheckIcon /> : null}</td>
    </StyledRow>
  );
}

export default Table;
