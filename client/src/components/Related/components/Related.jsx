import React from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

function Related({ relatedProducts, grabInfo }) {
  return (
    <div>
      <h3>Related Products</h3>
      <Container>
        {relatedProducts.map((product) =>
          <Card key={product.id} product={product} grabInfo={grabInfo} />)}
      </Container>
    </div>
  );
}

export default Related;
