import React, { useState } from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

function Related({ relatedProducts }) {
  const [currentFrame, setCurrentFrame] = useState(relatedProducts);

  const shiftRight = () => {
    setCurrentFrame(currentFrame.slice(1));
  };

  const shiftLeft = () => {
    setCurrentFrame(currentFrame.slice(0));
  };

  return (
    <div data-testid="related">
      <h3>Related Products</h3>
      <Container>
        {currentFrame.map((product) => <Card key={product.id} product={product} />)}
      </Container>
      <button type="button" onClick={shiftLeft}>Left</button>
      <button type="button" onClick={shiftRight}>Right</button>
    </div>
  );
}

export default Related;
