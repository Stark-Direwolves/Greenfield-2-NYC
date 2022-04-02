import React, { useState } from 'react';
import reviews from '../../seedData/reviewSeed.js';
import Ratings from './components/Ratings.jsx';
import Review from './components/Review.jsx';
import ReviewList from './components/ReviewList.jsx';
import NewRR from './components/NewRR.jsx';
// styles
import RRcontainer from './RRstyles/RRcontainer.js';
import RatingsBox from './RRstyles/RatingsBox.js';

function RR() {

  // use







  return (
    // if there are reviews, will refactor for no reviews
    <div>
      <div>
        <h2> Ratings & Reviews </h2>
      </div>
      <RRcontainer>
        <Ratings ratingslist={reviews.meta} />
        <div>
          <ReviewList reviewslist={reviews.list.results} />
        </div>
      </RRcontainer>
    </div>
  );
}

export default RR;

// main rr component
