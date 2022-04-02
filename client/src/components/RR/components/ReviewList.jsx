import React from 'react';
import Review from './Review.jsx';
import ReviewBox from '../RRstyles/ReviewBox.js';
import MoreButton from '../RRstyles/MoreButton.js';

// need to handle situation with 0 reviews

function ReviewList({ reviewslist }) {
  if (reviewslist.length >= 2) {
    const firstTwo = reviewslist.slice(0, 2);
    return (
      <div>
        {/* <ReviewBox> */}
          <ul>
            {firstTwo.map((review, key) => <Review key={key} review={review} />)}
          </ul>
        {/* </ReviewBox> */}
        <MoreButton> MORE REVIEWS </MoreButton>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {reviewslist.map((review, key) => <Review key={key} review={review} />)}
      </ul>
    </div>
  );
}

export default ReviewList;
