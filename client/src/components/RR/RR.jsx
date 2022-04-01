import React from 'react';
import reviews from '../../seedData/reviewSeed.js';
import Ratings from './Ratings.jsx';
import Review from './Review.jsx';
import ReviewList from './ReviewList.jsx';
import NewRR from './NewRR.jsx';
import RRcontainer from './RRstyles/RRcontainer.js';

function RR() {
  return (
    // if there are reviews, will refactor for no reviews
    <RRcontainer>
      <div>
        <h2> Ratings & Reviews </h2>
      </div>
      <div>
        <Ratings ratingslist={reviews.meta} />
      </div>
      <div>
        <ReviewList reviewslist={reviews.list.results} />
      </div>
    </RRcontainer>
  );
}

export default RR;

// main rr component
