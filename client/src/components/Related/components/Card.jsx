import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import Ratings from '../../RR/RatingHelpers';

function Card({ product }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 'No Reviews Yet';
    }
    return Ratings.findAverageRating(item.ratings);
  };

  return (
    <CardContainer>
      <Button type="button" onClick={toggleFavorite}>
        <StarIcon className="h-5 w-5 text-blue-500" />
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
      <div>{filterAverageRating(product)}</div>
    </CardContainer>
  );
}

export default Card;
