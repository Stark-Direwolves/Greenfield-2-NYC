import React from 'react';
import RatingsBox from '../RRstyles/RatingsBox.js';

function Ratings({ reviewCount, averageRating, meta }) {
  console.log(meta);
  let size = 0;
  let width = 0;
  let comfort = 0;
  let quality = 0;
  let length = 0;
  let fit = 0;

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
    <RatingsBox>
      <div>
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
        <div className="slidecontainer">
          <span> Size </span>
          <input type="range" min="1" max="5" value={size} className="slider" disabled />
        </div>
        <div className="slidecontainer">
          <span> Width </span>
          <input type="range" min="1" max="5" value={width} className="slider" disabled />
        </div>
        <div className="slidecontainer">
          <span> Comfort </span>
          <input type="range" min="1" max="5" value={comfort} className="slider" disabled />
        </div>
        <div className="slidecontainer">
          <span> Quality </span>
          <input type="range" min="1" max="5" value={quality} className="slider" disabled />
        </div>
        <div className="slidecontainer">
          <span> Length </span>
          <input type="range" min="1" max="5" value={length} className="slider" disabled />
        </div>
        <div className="slidecontainer">
          <span> Fit </span>
          <input type="range" min="1" max="5" value={fit} className="slider" disabled />
        </div>
      </div>
    </RatingsBox>
  );
}

export default Ratings;
