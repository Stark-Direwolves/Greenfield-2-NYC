import React from 'react';
import Card from './Card.jsx';
import product from '../../../seedData/productSeed.js';

function Related() {
  return (
    <div>
      <h3>Related Products</h3>
      <Card id={product.id} style={product.idStyles} />
    </div>
  );
}

export default Related;
