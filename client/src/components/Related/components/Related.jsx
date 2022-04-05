import React from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

function Related({ relatedProducts }) {
  return (
    <div data-testid="related">
      <h3>Related Products</h3>
      <Container>
        {relatedProducts.map((product) => <Card key={product.id} product={product} />)}
      </Container>
      <button type="button">Left</button>
      <button type="button">Right</button>
    </div>
  );
}

export default Related;
