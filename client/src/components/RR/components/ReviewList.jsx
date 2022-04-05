/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Review from './Review.jsx';
import MoreButton from '../RRstyles/MoreButton.js';
import AddButton from '../RRstyles/AddButton.js';

function ReviewList({ reviewslist, setShowModal }) {
  const [view, setView] = useState(2);

  const firstTwo = reviewslist.slice(0, view);
  // if (reviewslist.length >= view) {
  return (
    <div>
      <div>
        {firstTwo.map((review) => <Review key={review.review_id} review={review} />)}
      </div>
      <div>
        {
        (reviewslist.length >= view)
          ? <MoreButton onClick={() => setView((prevCount) => prevCount + 2)}> MORE REVIEWS </MoreButton>
          : null
        }
        <AddButton onClick={setShowModal}> ADD REVIEW </AddButton>
      </div>
    </div>
  );
}
//   return (
//     <div>
//       <div>
//         {firstTwo.map((review) => <Review key={review.review_id} review={review} />)}
//       </div>
//     </div>
//   );
// }

export default ReviewList;
