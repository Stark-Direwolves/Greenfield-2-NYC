import React from 'react';
import ReviewBox from './RRstyles/ReviewBox.js';

function Review(props, review) {
  return (
    <div>
      <ReviewBox>
        <h3>
          <span>{props.review.summary}</span>
          <span>{props.review.rating}</span>
        </h3>
      <div>{props.review.body}</div>
      <div>{props.review.date}</div>
      </ReviewBox>
    </div>
  );
}

export default Review;
// handles 'View More' button
