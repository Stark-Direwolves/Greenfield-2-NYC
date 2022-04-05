import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import Ratings from '../../RR/RatingHelpers';

function Card({ product }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CardContainer>
      <Button type="button" onClick={toggleFavorite}>
        Favorite
      </Button>
      <StyledImage
        src={product.styles[0].photos[0].url}
        onClick={() => {
          window.location.href = `/${product.id}`;
        }}
      />
      <p>{product.category}</p>
      <div>{product.name}</div>
      <div>{product.default_price}</div>
      <div>{Ratings.findAverageRating(product.ratings)}</div>
    </CardContainer>
  );
}

export default Card;
