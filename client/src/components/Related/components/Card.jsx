import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import Ratings from '../../RR/RatingHelpers';
import Comparison from './Comparison.jsx';

function Card({ related, current }) {
  const [compare, setCompare] = useState(false);

  const toggleCompare = () => {
    setCompare(!compare);
  };

  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };

  return (
    <CardContainer>
      <Comparison
        compare={compare}
        toggleCompare={toggleCompare}
        related={related}
        current={current}
      />
      <Button type="button" onClick={toggleCompare}>
        <StarIcon className="h-5 w-5 text-blue-500" />
      </Button>
      <StyledImage
        src={related.styles[0].photos[0].url}
        onClick={() => {
          window.location.href = `/${related.id}`;
        }}
      />
      <p>{related.category}</p>
      <div>{related.name}</div>
      <div>{related.default_price}</div>
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(related), '--star-size': '15px' }} />
      </div>
    </CardContainer>
  );
}

export default Card;
