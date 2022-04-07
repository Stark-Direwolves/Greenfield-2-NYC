import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox.js';

function Ratings({ reviewCount, averageRating }) {
  return (
    <RatingsBox>
      <span style={{ fontSize: '50px', fontWeight: 'bold' }}>
        {(averageRating > 1)
          ? averageRating
          : 'No Reviews Yet!'}
      </span>
      <span
        className="stars"
        style={{
          '--rating': averageRating,
          paddingLeft: '15px',
        }}
      />
      <div>
        {reviewCount}
        {' '}
        Total Reviews
      </div>
    </RatingsBox>
  );
}

export default Ratings;
