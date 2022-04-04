import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox.js';

function Ratings({ reviewCount, averageRating }) {
  return (
    <RatingsBox>
      <h4>
        {averageRating}
      </h4>
      <div>
        {reviewCount} Reviews
      </div>
    </RatingsBox>
  );
}

export default Ratings;
