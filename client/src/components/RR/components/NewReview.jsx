/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AddReview from '../RRstyles/AddReview.js';
import AddPhoto from '../RRstyles/AddPhoto.js';
import axios from 'axios';

function NewReview({ currentProduct, currentProductId, setShowModal }) {
  const [formRating, setFormRating] = useState(0);
  const [formSummary, setFormSummary] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formRecommend, setFormRecommend] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhotos, setFormPhotos] = useState([]);
  // characteristics/meta data
  const [charSize, charSetSize] = useState(1);
  const [charWidth, charSetWidth] = useState(1);
  const [charComfort, charSetComfort] = useState(1);
  const [charQuality, charSetQuality] = useState(1);
  const [charLength, charSetLength] = useState(1);
  const [charFit, charSetFit] = useState(1);

  const reviewBody = {
    "product_id": 65631,
    "rating": 1,
    "summary": "1 star review",
    "body": "I hate this product",
    "recommend": false,
    "name": "hater",
    "email": "meanreviewer@gmail.com",
    "photos": [],
    "characteristics": { }
  };

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal((prev) => !prev);
    axios.post('/reviews', reviewBody)
      .then((res) => {
        console.log('review submitted', res);
      })
      .catch((err) => {
        console.log('uh oh try again', err);
      });
  };

  return (
    <div>
      <h2> Write your Review </h2>
      <h3>
        About the {currentProduct}
      </h3>
      <div>
        <b> Select Rating </b>
        1
        <input
          onChange={(e) => { setFormRating(e.target.value); }}
          type="radio"
          checked={formRating === '1'}
          value="1"
        />
        2
        <input
          onChange={(e) => { setFormRating(e.target.value); }}
          type="radio"
          checked={formRating === '2'}
          value="2"
        />
        3
        <input
          onChange={(e) => { setFormRating(e.target.value); }}
          type="radio"
          checked={formRating === '3'}
          value="3"
        />
        4
        <input
          onChange={(e) => { setFormRating(e.target.value); }}
          type="radio"
          checked={formRating === '4'}
          value="4"
        />
        5
        <input
          onChange={(e) => { setFormRating(e.target.value); }}
          type="radio"
          checked={formRating === '5'}
          value="5"
        />
      </div>
      <div>
        <b> Do you recommend this product? </b>
        Yes
        <input
          type="radio"
          checked={formRecommend === 'Yes'}
          value="Yes"
          onChange={(e) => { setFormRecommend(e.target.value); }}
        />
        No
        <input
          type="radio"
          checked={formRecommend === 'No'}
          value="No"
          onChange={(e) => { setFormRecommend(e.target.value); }}
        />
      </div>
      <br />
      <div>
        <b> Review Summary </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(event) => { setFormSummary(event.target.value); }} style={{ width: '418px', resize: 'none' }} />
        </form>
      </div>
      <br />
      <div>
        <b> Review Body </b>
        <br />
        <form>
          <textarea type="text" display="flex" maxLength="1000" size="60" placeholder="Why did you like the product or not?" style={{ resize: 'none', paddingBottom: 80, height: '80px', width: '418px' }} onChange={(event) => { setFormBody(event.target.value); }} required />
          <div>
            {(formBody.length < 50)
              ? (
                <small>
                  {50 - formBody.length}
                  {' '}
                  characters required
                </small>
              )
              : (
                <small>
                  Minimum characters reached!
                </small>
              )}
          </div>
        </form>
      </div>
      <br />
      <div>
        <b> What is your Name </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(event) => { setFormName(event.target.value); }} style={{ resize: 'none' }} size="60" required />
          <br />
          <small> For privacy reasons, do not use your full name or email address </small>
        </form>
      </div>
      <br />
      <div>
        <b> Email </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(event) => { setFormEmail(event.target.value); }} style={{ resize: 'none' }} required />
          <br />
          <small> For authentication reasons, you will not be emailed </small>
        </form>
      </div>
      <br />
      <div>
        <b> Upload Your Photos </b>
        <input type="file" onChange={(e) => { setFormPhotos(Array.from(e.target.files)); }} />
        <AddPhoto>
          {(formPhotos.length >= 1)
            ? <img src={URL.createObjectURL(formPhotos[0])} alt="" style={{ height: '80px', width: '80px' }} />
            : null}
        </AddPhoto>
      </div>
      <br />
      <button type="submit" onClick={(event) => { submitForm(event); }}> Submit Review </button>
    </div>
  );
}

export default NewReview;
