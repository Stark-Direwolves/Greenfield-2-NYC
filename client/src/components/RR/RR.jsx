import React from 'react';
import Ratings from './Ratings.jsx';
import Review from './Review.jsx';
import ReviewList from './ReviewList.jsx';
import NewRR from './NewRR.jsx';

function RR() {
  return (
    // if there are reviews, will refactor for no reviews
    <div>
      <div>
        <h2> Ratings & Reviews </h2>
      </div>
      <div>
        <Ratings />
        <ReviewList />
      </div>
    </div>
  );
}

export default RR;

// main rr component
