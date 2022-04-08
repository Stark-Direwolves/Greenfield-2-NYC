import React from 'react';
import styled from 'styled-components';
import Ratings from '../../RR/RatingHelpers';

const InfoContainer = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colors[0]};
  width: 100%;

  p {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    border-bottom: 2px solid black;
  }

  div {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  span {
    color: ${(props) => props.theme.colors[7]};
  }
`;

function OutfitCardInfo({ outfit, sale }) {
  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };
  return (
    <InfoContainer>
      <p><b>{outfit.product.category.toUpperCase()}</b></p>
      <div>{outfit.product.name}</div>
      <div><b>{outfit.style.name.toLowerCase()}</b></div>
      {sale
        ? (
          <div>
            <s>${outfit.style.original_price}</s>
            <span> ${outfit.style.sale_price} </span>
          </div>
        )
        : <div>${outfit.style.original_price}</div>}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(outfit.meta), '--star-size': '15px' }} />
      </div>
    </InfoContainer>
  );
}

export default OutfitCardInfo;
