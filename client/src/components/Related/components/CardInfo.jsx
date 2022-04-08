import React from 'react';
import Ratings from '../../RR/RatingHelpers';
import styled from 'styled-components';

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
`;

function CardInfo({ related, sale }) {
  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };
  return (
    <InfoContainer>
      <p><b>{related.category.toUpperCase()}</b></p>
      <div>{related.name}</div>
      <div><b>{related.styles[0].name.toLowerCase()}</b></div>
      {sale
        ? (
          <div>
            <s>${related.styles[0].original_price}</s>
            {related.styles[0].sale_price}
          </div>
        )
        : <div>${related.styles[0].original_price}</div>}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(related), '--star-size': '15px' }} />
      </div>
    </InfoContainer>
  );
}

export default CardInfo;
