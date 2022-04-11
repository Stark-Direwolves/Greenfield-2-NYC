/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import ReviewBox from '../RRstyles/ReviewBox';
import ReviewHelpful from '../RRstyles/ReviewHelpful';
import ReviewReport from '../RRstyles/ReviewReport';
import ViewMoreBody from '../RRstyles/ViewMoreBody';

// reference to get rid of warning message
// https://github.com/facebook/react/issues/11184#issuecomment-335942439

const moment = require('moment');

function Review({ review }) {
  const [clicked, setClicked] = useState(false);
  const [report, setReport] = useState(false);
  const [clickYes, setClickYes] = useState(0);
  // const [clickNo, setClickNo] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  // no review API information for no counter, omitting for now
  // const updateNoCount = (event) => {
  //   event.preventDefault();
  //   setClickNo(clickNo + 1);
  //   setClicked(true);
  // };

  const updateYesCount = () => {
    console.log(review.review_id);
    axios.put(`/reviews/${review.review_id}/helpful`)
      .then((res) => {
        setClickYes(clickYes + 1);
        setClicked(true);
        console.log(res);
      })
      .catch((err) => {
        console.log('unable to vote', err);
      });
  };

  const reportReview = () => {
    axios.put(`/reviews/${review.review_id}/report`)
      .then(() => {
        console.log('successfully reported');
        setReport(true);
      })
      .catch((err) => {
        console.log('not successfully reported', err);
      });
  };

  const viewMoreBody = () => {
    setViewMore(true);
  };

  return (
    <ReviewBox>
      <div4 is="x3d">
        <span
          className="stars"
          style={{
            '--rating': review.rating,
            '--star-size': '18px',
          }}
        />
      </div4>
      <div1 is="x3d"><b>{review.summary}</b></div1>
      <div2 is="x3d">{review.reviewer_name}</div2>
      {(review.recommend)
        ? <div3 is="x3d"> ✓ I recommend this product</div3>
        : null }
      <br />
      <div3 is="x3d">
        {(review.body.length >= 250 && (viewMore === false))
          ? (<>{review.body.slice(0, 250)}
            <ViewMoreBody onClick={viewMoreBody}> ... view more </ViewMoreBody></>)
          : review.body}
        {/* {(viewMore)
          ? (review.body.slice(250, review.body.length))
          : null} */}
      </div3>
      <div4 is="x3d">{moment(review.date).format('MMM Do YYYY')}</div4>
      <div4 is="x3d">
        {(review.photos.length >= 1)
          ? review.photos.map((photo, i) => <img key={i} src={`${photo.url}`} alt="" style={{ maxHeight: '100px', maxWidth: '100%', padding: '10px' }}/>)
          : null}
      </div4>
      <div4 is="x3d">
        Was this rating Helpful?
        &nbsp;
        {(clicked)
          ? ('Thanks for your vote!')
          : (
            <ReviewHelpful onClick={updateYesCount}>
              Yes:
              {' '}
              {review.helpfulness}
              {' '}
            </ReviewHelpful>
          )}
      </div4>
      <div4 is="x3d">
        {(report)
          ? ('Review Reported! You wont see this again!')
          : (
            <ReviewReport onClick={reportReview}>
              {' '}
              Report?
              {' '}
            </ReviewReport>
          )}
      </div4>
    </ReviewBox>
  );
}

export default Review;
