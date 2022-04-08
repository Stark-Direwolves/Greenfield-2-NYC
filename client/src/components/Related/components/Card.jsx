import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { StyledImage, ImageContainer } from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import { ActionButton } from '../styles/StyledButtons.styled';
import Ratings from '../../RR/RatingHelpers';
import Comparison from './Comparison';
import CardInfo from './CardInfo';

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
      <ActionButton type="button" onClick={toggleCompare}>
        <StarIcon />
      </ActionButton>
      <ImageContainer>
        <StyledImage
          src={related.styles[0].photos[0].url}
          onClick={() => {
            window.location.href = `/${related.id}`;
          }}
        />
      </ImageContainer>
      <CardInfo related={related} sale={sale} />
    </CardContainer>
  );
}

export default Card;
