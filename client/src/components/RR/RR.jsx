/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import reviews from '../../seedData/reviewSeed.js';
import product from '../../seedData/productSeed.js';
import Ratings from './components/Ratings.jsx';
import ReviewList from './components/ReviewList.jsx';
import NewReview from './components/NewReview.jsx';
// styles
import RRcontainer from './RRstyles/RRcontainer.js';

const { findReviewCount, findAverageRating } = require('./RatingHelpers.js');

function RR() {
  let reviewCount = findReviewCount(reviews.meta.ratings);
  let averageRating = findAverageRating(reviews.meta.ratings);
  let currentProduct = product.id.name;
  const [showModal, setShowModal] = useState(false);

  return (
    // if there are reviews, will refactor for no reviews
    <div>
      <div>
        <h3> Ratings & Reviews </h3>
      </div>
      <div>
        {(showModal === true)
          ? (
            <NewReview currentProduct={currentProduct} setShowModal={setShowModal}> </NewReview>
          )
          : (
            <RRcontainer>
              <Ratings reviewCount={reviewCount} averageRating={averageRating} />
              <div>
                <ReviewList reviewslist={reviews.list.results} setShowModal={() => setShowModal(true)} />
              </div>
            </RRcontainer>
          )}
      </div>
    </div>
  );
}

export default RR;

// main rr component
