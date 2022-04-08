import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import StyledImage from '../styles/Image.styled';
import Ratings from '../../RR/RatingHelpers';

function OutfitCard({ outfit, removeOutfit }) {
  const [sale, setSale] = useState(false);

  const toggleSale = () => {
    if (outfit.style.sale_price) {
      setSale(true);
    }
  };

  useEffect(() => {
    toggleSale();
  }, []);

  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };

  return (
    <CardContainer>
      <Button type="button" onClick={() => removeOutfit(outfit)}><XIcon /></Button>
      <StyledImage
        src={outfit.style.photos[0].url}
        onClick={() => {
          window.location.href = `/${outfit.product.id}`;
        }}
      />
      <p>{outfit.product.category}</p>
      <div>{outfit.product.name}</div>
      <div>{outfit.style.name}</div>
      {sale
        ? (
          <div>
            <s>{outfit.style.original_price}</s>
            {outfit.style.sale_price}
          </div>
        )
        : <div>{outfit.style.original_price}</div>}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(outfit.meta), '--star-size': '15px' }} />
      </div>
    </CardContainer>
  );
}

export default OutfitCard;
