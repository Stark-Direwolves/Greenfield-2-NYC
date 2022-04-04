import React from 'react';
import ReviewBox from '../RRstyles/ReviewBox.js';

function Review({ review }) {
  return (
    <ReviewBox>
      <div1>{review.rating}</div1>
      <div1>{review.summary}</div1>
      <div2>{review.reviewer_name}</div2>
      <div3>{review.body}</div3>
      <div1>{review.date}</div1>
    </ReviewBox>
  );
}

export default Review;
// handles 'View More' button
