import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox.js';

function Ratings({ reviewCount, averageRating }) {
  return (
    <RatingsBox>
      <span style={{ fontSize: '50px', fontWeight: 'bold' }}> {averageRating} </span>
      <span
        className="stars"
        style={{
          '--rating': averageRating,
        }}
      />
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
