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
import AddReview from './RRstyles/AddReview.js';
// import { star0, starHalf, star1, star1Half, star2, star2Half, star3, star3Half, star4, star4Half, star5 } from './RRstyles/starImages/index.js';

const { findReviewCount, findAverageRating } = require('./RatingHelpers.js');

function RR() {
  const reviewCount = findReviewCount(reviews.meta.ratings);
  const averageRating = findAverageRating(reviews.meta.ratings);
  const currentProduct = product.id.name;
  const currentProductId = product.id.id;
  const [showModal, setShowModal] = useState(false);

  return (
    // if there are reviews, if none just show add review button
    <div>
      <div>
        <h3> Ratings & Reviews </h3>
      </div>
      <div>
        {(showModal === true)
          ? (
            <AddReview><NewReview currentProduct={currentProduct} currentProductId={currentProductId} setShowModal={setShowModal}> </NewReview></AddReview>
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
