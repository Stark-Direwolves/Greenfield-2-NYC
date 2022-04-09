import React from 'react';
import PropTypes from 'prop-types';
import Ratings from '../../RR/RatingHelpers';
import OutfitInfoContainer from '../styles/OutfitInfoContainer.styled';

function OutfitCardInfo({ outfit, sale }) {
  const filterAverageRating = (item) => {
    if (Number.isNaN(Ratings.findAverageRating(item.ratings))) {
      return 0;
    }
    return Ratings.findAverageRating(item.ratings);
  };
  return (
    <OutfitInfoContainer>
      <p>{outfit.product.category}</p>
      <div>{outfit.product.name}</div>
      <div><b>{outfit.style.name.toLowerCase()}</b></div>
      {sale
        ? (
          <div>
            <s>{`$${outfit.style.original_price}`}</s>
            <span>{` $${outfit.style.sale_price}`}</span>
          </div>
        )
        : (
          <div>
            {`$${outfit.style.original_price}`}
          </div>
        )}
      <div>
        <span className="stars" style={{ '--rating': filterAverageRating(outfit.meta), '--star-size': '15px' }} />
      </div>
    </OutfitInfoContainer>
  );
}

OutfitCardInfo.propTypes = {
  outfit: PropTypes.instanceOf(Object),
  sale: PropTypes.bool,
};

OutfitCardInfo.defaultProps = {
  outfit: {},
  sale: true,
};

export default OutfitCardInfo;
