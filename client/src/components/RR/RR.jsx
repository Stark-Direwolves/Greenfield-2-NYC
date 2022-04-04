/* eslint-disable import/extensions */
import React, { useState } from 'react';
import reviews from '../../seedData/reviewSeed.js';
import Ratings from './components/Ratings.jsx';
import ReviewList from './components/ReviewList.jsx';
import NewRR from './components/NewRR.jsx';
// styles
import RRcontainer from './RRstyles/RRcontainer.js';

const { findReviewCount, findAverageRating } = require('./RatingHelpers.js');

function RR() {
  let reviewCount = findReviewCount(reviews.meta.ratings);
  let averageRating = findAverageRating(reviews.meta.ratings);

  return (
    // if there are reviews, will refactor for no reviews
    <div>
      <div>
        <h3> Ratings & Reviews </h3>
      </div>
      <RRcontainer>
        <Ratings reviewCount={reviewCount} averageRating={averageRating} />
        <div>
          <ReviewList reviewslist={reviews.list.results} />
        </div>
      </RRcontainer>
    </div>
  );
}

export default RR;

// main rr component
