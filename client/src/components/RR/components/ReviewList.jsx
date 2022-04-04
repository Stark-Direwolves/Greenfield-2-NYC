/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreButton from '../RRstyles/MoreButton.js';

function ReviewList({ reviewslist }) {
  const [view, setView] = useState(2);

  const firstTwo = reviewslist.slice(0, view);
  if (reviewslist.length >= view) {
    return (
      <div>
        <div>
          {firstTwo.map((review) => <Review key={review.review_id} review={review} />)}
        </div>
        <div>
          <MoreButton onClick={() => setView((prevCount) => prevCount + 2)}> MORE REVIEWS </MoreButton>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        {firstTwo.map((review) => <Review key={review.review_id} review={review} />)}
      </div>
    </div>
  );
}

export default ReviewList;
