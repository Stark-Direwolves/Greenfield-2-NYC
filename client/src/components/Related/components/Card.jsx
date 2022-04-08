import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import StyledImage from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import Ratings from '../../RR/RatingHelpers';
import Comparison from './Comparison.jsx';

function Card({ related, current }) {
  const [compare, setCompare] = useState(false);
  const [sale, setSale] = useState(false);

  const toggleCompare = () => {
    setCompare(!compare);
  };

  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };

  const toggleSale = () => {
    if (related.styles[0].sale_price) {
      setSale(true);
    }
  };

  useEffect(() => {
    toggleSale();
  }, []);

  return (
    <CardContainer>
      <Comparison
        compare={compare}
        toggleCompare={toggleCompare}
        related={related}
        current={current}
      />
      <Button type="button" onClick={toggleCompare}>
        <StarIcon />
      </Button>
      <StyledImage
        src={related.styles[0].photos[0].url}
        onClick={() => {
          window.location.href = `/${related.id}`;
        }}
      />
      <p>{related.category}</p>
      <div>{related.name}</div>
      <div>{related.styles[0].name}</div>
      {sale
        ? (
          <div>
            <s>{related.styles[0].original_price}</s>
            {related.styles[0].sale_price}
          </div>
        )
        : <div>{related.styles[0].original_price}</div>}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(related), '--star-size': '15px' }} />
      </div>
    </CardContainer>
  );
}

export default Card;
