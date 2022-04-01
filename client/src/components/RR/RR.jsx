import React from 'react';
import reviews from '../../seedData/reviewSeed.js';
import Ratings from './Ratings.jsx';
import Review from './Review.jsx';
import ReviewList from './ReviewList.jsx';
import NewRR from './NewRR.jsx';
import RRcontainer from './RRstyles/RRcontainer.js';
import RatingsBox from './RRstyles/RatingsBox.js';

function RR() {
  return (
    // if there are reviews, will refactor for no reviews
    <div>
      <div>
        <h2> Ratings & Reviews </h2>
      </div>
      <RRcontainer>
        <div>
          <Ratings ratingslist={reviews.meta} />
        </div>
        <div>
          <ReviewList reviewslist={reviews.list.results} />
        </div>
      </RRcontainer>
    </div>
  );
}

export default RR;

// main rr component
