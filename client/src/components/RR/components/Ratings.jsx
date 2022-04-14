/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox';

function Ratings({ averageRating, totalReviews, meta, percentRecommended, currentProduct }) {
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

  if (!meta.ratings[5]) {
    meta.ratings[5] = 0;
  }
  if (!meta.ratings[4]) {
    meta.ratings[4] = 0;
  }
  if (!meta.ratings[3]) {
    meta.ratings[3] = 0;
  }
  if (!meta.ratings[2]) {
    meta.ratings[2] = 0;
  }
  if (!meta.ratings[1]) {
    meta.ratings[1] = 0;
  }

  return (
    <RatingsBox>
      <b> About the {currentProduct} </b>
      <br />
      <span style={{ fontSize: '50px', fontWeight: 'bold' }}>
        {(averageRating > 1)
          ? averageRating
          : 'No Reviews Yet!'}
      </span>
      <span
        className="stars"
        style={{
          '--rating': averageRating,
          '--star-background': '#C7A794',
          paddingLeft: '15px',
        }}
      />
      <br />
      <b>
        {totalReviews}
        {' '}
        Total Reviews
      </b>
      <br />
      <br />
      {(averageRating > 1)
        ? <b>
          {percentRecommended}
          % of reviews recommend this product
        </b>
        : null }
      <br />
      <br />
      <div>
        <div style={{ textAlign: 'justify', marginLeft: '37.5%'}}>
          5
          &nbsp;
          <span
            className="revcount"
            style={{
              '--count': meta.ratings[5], '--total': totalReviews, marginLeft: '10px', marginRight: '10px'
            }}
          />
          <small style={{ fontSize: '10px' }}>
            (
            {meta.ratings[5]}
            )
          </small>
        </div>
        <div style={{ textAlign: 'justify', marginLeft: '37.5%' }}>
          4
          &nbsp;
          <span
            className="revcount"
            style={{
              '--count': meta.ratings[4], '--total': totalReviews, marginLeft: '10px', marginRight: '10px'
            }}
          />
          <small style={{ fontSize: '10px' }}>
            (
            {meta.ratings[4]}
            )
          </small>
        </div>
        <div style={{ textAlign: 'justify', marginLeft: '37.5%' }}>
          3
          &nbsp;
          <span
            className="revcount"
            style={{
              '--count': meta.ratings[3], '--total': totalReviews, marginLeft: '10px', marginRight: '10px'
            }}
          />
          <small style={{ fontSize: '10px' }}>
            (
            {meta.ratings[3]}
            )
          </small>
        </div>
        <div style={{ textAlign: 'justify', marginLeft: '37.5%' }}>
          2
          &nbsp;
          <span
            className="revcount"
            style={{
              '--count': meta.ratings[2], '--total': totalReviews, marginLeft: '10px', marginRight: '10px'
            }}
          />
          <small style={{ fontSize: '10px' }}>
            (
            {meta.ratings[2]}
            )
          </small>
        </div>
        <div style={{ textAlign: 'justify', marginLeft: '37.5%' }}>
          1
          &nbsp;
          <span
            className="revcount"
            style={{
              '--count': meta.ratings[1], '--total': totalReviews, marginLeft: '10px', marginRight: '10px'
            }}
          />
          <small style={{ fontSize: '10px' }}>
            (
            {meta.ratings[1]}
            )
          </small>
        </div>
      </div>
    </RatingsBox>
  );
}

export default Ratings;
