import React from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/outline';
import { ComparisonBackground, ComparisonContainer, StyledTable } from '../styles/Comparison.styled';
import { ModalButton } from '../styles/StyledButtons.styled';
import Table from './Table';

function Comparison({
  compare, toggleCompare, related, current,
}) {
  const filterFeatures = (currentProduct, relatedProduct) => {
    const features = currentProduct.features.concat(relatedProduct.features);
    const filtered = [];
    const featObj = {};
    for (let i = 0; i < features.length; i += 1) {
      const { feature } = features[i];
      featObj[feature] = features[i];
    }
    const keys = Object.keys(featObj);
    for (let j = 0; j < keys.length; j += 1) {
      filtered.push(featObj[keys[j]]);
    }
    return filtered;
  };

  return compare
    ? createPortal(
      <ComparisonBackground data-testid="comparison">
        <ComparisonContainer>
          <ModalButton type="button" onClick={toggleCompare}><XIcon /></ModalButton>
          <h3>compare</h3>
          <StyledTable>
            <thead>
              <tr>
                <th>{current.name}</th>
                <th> </th>
                <th>{related.name}</th>
              </tr>
            </thead>
            <tbody>
              {filterFeatures(current, related).map((feature) => (
                <Table feature={feature} related={related.features} current={current.features} />
              ))}
            </tbody>
          </StyledTable>
        </ComparisonContainer>
      </ComparisonBackground>,
      document.body,
    ) : null;
}

export default Comparison;
