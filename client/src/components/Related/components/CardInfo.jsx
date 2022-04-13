import React from 'react';
import PropTypes from 'prop-types';
import Ratings from '../../RR/RatingHelpers';
import CardInfoContainer from '../styles/CardInfoContainer.styled';

function CardInfo({ related, sale }) {
  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };

  return (
    <CardInfoContainer>
      <p>{related.category}</p>
      <div>{related.name}</div>
      <div><b>{related.styles[0].name.toLowerCase()}</b></div>
      {sale
        ? (
          <div>
            <s>{`$${related.styles[0].original_price}`}</s>
            <span>{` $${related.styles[0].sale_price}`}</span>
          </div>
        )
        : (
          <div>
            {`$${related.styles[0].original_price}`}
          </div>
        )}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(related), '--star-size': '15px' }} />
      </div>
    </CardInfoContainer>
  );
}

CardInfo.propTypes = {
  related: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    styles: PropTypes.instanceOf(Array),
    original_price: PropTypes.string,
  }),
  sale: PropTypes.bool,
};

CardInfo.defaultProps = {
  related: {},
  sale: true,
};

export default CardInfo;
