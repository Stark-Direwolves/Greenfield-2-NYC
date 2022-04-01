import React from 'react';
import Review from './Review.jsx';
import ReviewBox from './RRstyles/ReviewBox.js';

function ReviewList({ reviewslist }) {
  return (
    <div>
      <ReviewBox>
        <ul>
          {reviewslist.map((review, key) => <Review key={key} review={review} />)}
        </ul>
      </ReviewBox>
    </div>
  );
}

export default ReviewList;
