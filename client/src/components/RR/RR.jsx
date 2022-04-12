/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import Ratings from './components/Ratings';
import ReviewList from './components/ReviewList';
import NewReview from './components/NewReview';

// styles
import RRcontainer from './RRstyles/RRcontainer.js';
import AddReview from './RRstyles/AddReview.js';
import CharacteristicRatings from './RRstyles/CharacteristicRatings.js';

const { findReviewCount, findAverageRating, findPercentRecommended } = require('./RatingHelpers.js');

function RR({ reviews, meta, product, getReviewSort }) {
  const averageRating = findAverageRating(meta.ratings);
  const totalReviews = findReviewCount(meta.ratings);
  const percentRecommended = findPercentRecommended(meta.recommended);
  const currentProduct = product.name;
  const currentProductId = product.id;
  const [showModal, setShowModal] = useState(false);

  let [size, width, comfort, quality, length, fit] = Array(6).fill(0);

  if (meta.characteristics.Size) {
    size = Number(meta.characteristics.Size.value)};
  if (meta.characteristics.Width) {
    width = Number(meta.characteristics.Width.value)};
  if (meta.characteristics.Comfort) {
    comfort = Number(meta.characteristics.Comfort.value)};
  if (meta.characteristics.Quality) {
    quality = Number(meta.characteristics.Quality.value)};
  if (meta.characteristics.Length) {
    length = Number(meta.characteristics.Length.value)};
  if (meta.characteristics.Fit) {
    fit = Number(meta.characteristics.Fit.value)};

  return (
    // if there are reviews, if none just show add review button
    <div id="reviews" style={{ backgroundColor: '#EDEDE9' }}>
      <div>
        <h3> Ratings & Reviews </h3>
      </div>
      <div>
        {(showModal === true)
          ? (
            <AddReview><NewReview currentProduct={currentProduct} currentProductId={currentProductId} setShowModal={setShowModal} meta={meta}> </NewReview></AddReview>
          )
          : null}
            <RRcontainer>
              <Ratings averageRating={averageRating} totalReviews={totalReviews} percentRecommended={percentRecommended} meta={meta} currentProduct={currentProduct}/>
              <CharacteristicRatings>
                {(size > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Size </span>
                    <br />
                    <input type="range" min="1" max="5" value={size} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> A size too small </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> A size too wide </span>
                    </div>
                  : null}
                {(width > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Width </span>
                    <br />
                    <input type="range" min="1" max="5" value={width} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> Too narrow </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> Too wide </span>
                    </div>
                  : null}
                {(comfort > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Comfort </span>
                    <br />
                    <input type="range" min="1" max="5" value={comfort} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> Uncomfortable </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> Perfect </span>
                    </div>
                  : null}
                {(quality > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Quality </span>
                    <br />
                    <input type="range" min="1" max="5" value={quality} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> Poor </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> Perfect </span>
                    </div>
                  : null}
                {(length > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Length </span>
                    <br />
                    <input type="range" min="1" max="5" value={length} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> Runs short </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> Runs long </span>
                    </div>
                  : null}
                {(fit > 0)
                  ? <div className="slidecontainer">
                    <br />
                    <span> Fit </span>
                    <br />
                    <input type="range" min="1" max="5" value={fit} className="slider" disabled />
                    <br />
                    <span style={{ fontSize: '10px', float: 'left' }}> Runs tight </span>
                    <span style={{ fontSize: '10px', float: 'right' }}> Runs long </span>
                    </div>
                  : null}
              </CharacteristicRatings>
              <div>
                <ReviewList currentProductId={currentProductId} reviewslist={reviews.results} setShowModal={() => setShowModal(true)} getReviewSort={getReviewSort} />
              </div>
            </RRcontainer>
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
