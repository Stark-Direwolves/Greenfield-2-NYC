/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Ratings from './components/Ratings';
import ReviewList from './components/ReviewList';
import NewReview from './components/NewReview';

// styles
import RRcontainer from './RRstyles/RRcontainer.js';
import AddReview from './RRstyles/AddReview.js';

const { findReviewCount, findAverageRating, findPercentRecommended } = require('./RatingHelpers.js');

function RR({ reviews, meta, product }) {
  const reviewCount = findReviewCount(meta.ratings);
  const averageRating = findAverageRating(meta.ratings);
  const totalReviews = findReviewCount(meta.ratings);
  const percentRecommended = findPercentRecommended(meta.recommended);
  const currentProduct = product.name;
  const currentProductId = product.id;
  const [showModal, setShowModal] = useState(false);

  return (
    // if there are reviews, if none just show add review button
    <div id="reviews">
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
              <Ratings reviewCount={reviewCount} averageRating={averageRating} totalReviews={totalReviews} percentRecommended={percentRecommended} meta={meta} />
              <div>
                <ReviewList reviewslist={reviews.results} setShowModal={() => setShowModal(true)} />
              </div>
            </RRcontainer>
          )}
      </div>
    </div>
  );
}

export default RR;

// const getProductReviews = (id) => {
//   const promises = [
//     axios.get(`/reviews?product_id=${id}`),
//   ];
//   return Promise.all(promises);
// };

// const getProductMeta = (id) => {
//   const promises = [
//     axios.get(`/reviews/meta?product_id=${id}`),
//   ];
//   return Promise.all(promises);
// };
// let id = 65631;

// getProductReviews(id)
//   .then((res) => {
//     console.log(res[0].data);

//   });

// getProductMeta(id)
//   .then((res) => {
//     console.log(res[0].data);
//   });
