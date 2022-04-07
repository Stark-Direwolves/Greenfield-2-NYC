import React from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/outline';
import ComparisonContainer from '../styles/ComparisonContainer.styled';
import StyledComparison from '../styles/Comparison.styled';
import ModalButton from '../styles/ModalButton.styled';
import Table from './Table.jsx';

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
      <StyledComparison data-testid="comparison">
        <ComparisonContainer>
          <ModalButton type="button" onClick={toggleCompare}><XIcon /></ModalButton>
          <h3>Compare</h3>
          <table>
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
          </table>
        </ComparisonContainer>
      </StyledComparison>,
      document.body,
    ) : null;
}

export default Comparison;
