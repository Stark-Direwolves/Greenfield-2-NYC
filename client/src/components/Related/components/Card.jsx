import React, { useState } from 'react';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Ratings from '../../RR/RatingHelpers';

function Card({ product, setProductID }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CardContainer>
      <button type="button" onClick={toggleFavorite}>
        Favorite
      </button>
      <StyledImage
        src={product.styles[0].photos[0].thumbnail_url}
        onClick={() => {
          console.log('firing');
          setProductID(product.id);
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