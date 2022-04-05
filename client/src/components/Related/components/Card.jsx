import React, { useState } from 'react';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';

function Card({ product }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CardContainer>
      <button type="button" onClick={toggleFavorite}>
        Favorite
      </button>
      <StyledImage src={product.styles[0].photos} />
      <p>{product.category}</p>
      <div>{product.name}</div>
      <div>{product.default_price}</div>
      <div>Placeholder Rating</div>
    </CardContainer>
  );
}

export default Card;
