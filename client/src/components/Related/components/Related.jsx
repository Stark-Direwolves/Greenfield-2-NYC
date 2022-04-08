import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';
import LeftButton from '../styles/LeftButton.styled';
import RightButton from '../styles/RightButton.styled';

function Related({ relatedProducts, currentProduct }) {
  const [index, setIndex] = useState(0);
  const { length } = relatedProducts;

  const updateIndex = (i) => {
    let newIndex = i;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <div id="related" data-testid="related">
      <h3>Related Products</h3>
      <Container style={{ transform: `translateX(-${index * 300}px)` }}>
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            related={product}
            current={currentProduct}
          />
        ))}
      </Container>
      <LeftButton type="button" onClick={() => updateIndex(index - 1)}>
        <ChevronLeftIcon />
      </LeftButton>
      <RightButton type="button" onClick={() => updateIndex(index + 1)}>
        <ChevronRightIcon />
      </RightButton>
    </div>
  );
}

export default Related;
