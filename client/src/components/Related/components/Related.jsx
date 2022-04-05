import React from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

function Related({ relatedProducts, setProductID }) {
  return (
    <div>
      <h3>Related Products</h3>
      <Container>
        {relatedProducts.map((product) =>
          <Card key={product.id} product={product} setProductID={setProductID} />)}
      </Container>
    </div>
  );
}

export default Related;