import React from 'react';
import ReviewBox from '../RRstyles/ReviewBox.js';
// reference to get rid of warning message
// https://github.com/facebook/react/issues/11184#issuecomment-335942439

function Review({ review }) {
  return (
    <ReviewBox>
      <div4 is="x3d">{review.rating}</div4>
      <div1 is="x3d">{review.summary}</div1>
      <div2 is="x3d">{review.reviewer_name}</div2>
      <div3 is="x3d">{review.body}</div3>
      <div4 is="x3d">{review.date}</div4>
    </ReviewBox>
  );
}

export default Review;
