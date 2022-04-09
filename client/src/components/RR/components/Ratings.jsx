/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox';

function Ratings({ reviewCount, averageRating, totalReviews, meta, percentRecommended }) {
  console.log(meta);
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
      <span style={{ fontSize: '50px', fontWeight: 'bold' }}>
        {(averageRating > 1)
          ? averageRating
          : 'No Reviews Yet!'}
      </span>
      <span
        className="stars"
        style={{
          '--rating': averageRating,
          paddingLeft: '15px',
        }}
      />
      <div>
        {reviewCount}
        {' '}
        Total Reviews
      </div>
      <br />
      <div style={{float: 'left', marginLeft: '10%'}}>
        <div>
          5 (
          {meta.ratings[5]}
          )
          &nbsp;
          <span
            className="revcount"
            style={{ '--count': meta.ratings[5], '--total': totalReviews }}
          />
        </div>
        <div>
          4 (
          {meta.ratings[4]}
          )
          &nbsp;
          <span
            className="revcount"
            style={{ '--count': meta.ratings[4], '--total': totalReviews }}
          />
        </div>
        <div>
          3 (
          {meta.ratings[3]}
          )
          &nbsp;
          <span
            className="revcount"
            style={{ '--count': meta.ratings[3], '--total': totalReviews }}
          />
        </div>
        <div>
          2 (
          {meta.ratings[2]}
          )
          &nbsp;
          <span
            className="revcount"
            style={{ '--count': meta.ratings[2], '--total': totalReviews }}
          />
        </div>
        <div>
          1 (
          {meta.ratings[1]}
          )
          &nbsp;
          <span
            className="revcount"
            style={{ '--count': meta.ratings[1], '--total': totalReviews }}
          />
        </div>
      </div>
      <div style={{float: 'right', marginRight: '10%'}}>
        {(size > 0)
          ? <div className="slidecontainer">
            <span> Size </span>
            <input type="range" min="1" max="5" value={size} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> A size too small </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> A size too wide </span>
            </div>
          : null}
        {(width > 0)
          ? <div className="slidecontainer">
            <span> Width </span>
            <input type="range" min="1" max="5" value={width} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> Too narrow </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> Too wide </span>
            </div>
          : null}
        {(comfort > 0)
          ? <div className="slidecontainer">
            <span> Comfort </span>
            <input type="range" min="1" max="5" value={comfort} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> Uncomfortable </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> Perfect </span>
            </div>
          : null}
        {(quality > 0)
          ? <div className="slidecontainer">
            <span> Quality </span>
            <input type="range" min="1" max="5" value={quality} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> Poor </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> Perfect </span>
            </div>
          : null}
        {(length > 0)
          ? <div className="slidecontainer">
            <span> Length </span>
            <input type="range" min="1" max="5" value={length} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> Runs short </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> Runs long </span>
            </div>
          : null}
        {(fit > 0)
          ? <div className="slidecontainer">
            <span> Fit </span>
            <input type="range" min="1" max="5" value={fit} className="slider" disabled />
            <br />
            <span style={{fontSize: '10px'}}> Runs tight </span>
            &nbsp;
            <span style={{fontSize: '10px'}}> Runs long </span>
            </div>
          : null}
      </div>
      <div>
        {percentRecommended}
        % of reviews recommend this product
      </div>
    </RatingsBox>
  );
}

export default Ratings;
