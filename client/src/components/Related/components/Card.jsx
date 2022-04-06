import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import Ratings from '../../RR/RatingHelpers';
import Comparison from './Comparison.jsx';

function Card({ product }) {
  const [compare, setCompare] = useState(false);

  const toggleCompare = () => {
    setCompare(!compare);
  };

  function filterAverageRating(item) {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 'No Reviews Yet';
    }
    return Ratings.findAverageRating(item.ratings);
  }

  return (
    <CardContainer>
      <Comparison compare={compare} toggleCompare={toggleCompare} product={product} />
      <Button type="button" onClick={toggleCompare}>
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
