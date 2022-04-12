/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreButton from '../RRstyles/MoreButton';
import AddButton from '../RRstyles/AddButton';
import ReviewListBox from '../RRstyles/ReviewListBox';

function ReviewList({ reviewslist, setShowModal, getReviewSort, currentProductId }) {
  const [view, setView] = useState(2);
  const firstTwo = reviewslist.slice(0, view);
  const [sort, setSort] = useState('relevant');
  const id = currentProductId;

  return (
    <ReviewListBox>
      <b>Sort By</b>
      &nbsp;
      <select onChange={(e) => getReviewSort(id, e.target.value)}>
        <option value="relevant">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
      <div>
        {firstTwo.map((review) => <Review key={review.review_id} review={review} />)}
      </div>
      <div>
        {
        (reviewslist.length >= view)
          ? <MoreButton onClick={() => setView((prevCount) => prevCount + 2)}> MORE REVIEWS </MoreButton>
          : null
        }
        <AddButton onClick={() => { setShowModal(true) }}> ADD REVIEW </AddButton>
      </div>
    </ReviewListBox>
  );
}

export default ReviewList;
