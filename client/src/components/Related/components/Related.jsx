import React, { useState } from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

function Related({ relatedProducts }) {
  const [index, setIndex] = useState(0);
  const { length } = relatedProducts;

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }

    setIndex(newIndex);
  }

  return (
    <div data-testid="related">
      <h3>Related Products</h3>
      <Container style={{ transform: `translateX(-${index * 285}px)` }}>
        {relatedProducts.map((product) => <Card key={product.id} product={product} />)}
      </Container>
      <button type="button" onClick={() => updateIndex(index - 1)}>Left</button>
      <button type="button" onClick={() => updateIndex(index + 1)}>Right</button>
    </div>
  );
}

export default Related;
