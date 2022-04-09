/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/outline';
import AddReview from '../RRstyles/AddReview';
import AddPhoto from '../RRstyles/AddPhoto';

function NewReview({ currentProduct, currentProductId, setShowModal }) {
  const [formRating, setFormRating] = useState(0);
  const [formSummary, setFormSummary] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formRecommend, setFormRecommend] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhotos, setFormPhotos] = useState([]);
  // characteristics/meta data
  const [charSize, setCharSize] = useState(0);
  const [charWidth, setCharWidth] = useState(0);
  const [charComfort, setCharComfort] = useState(0);
  const [charQuality, setCharQuality] = useState(0);
  const [charLength, setCharLength] = useState(0);
  const [charFit, setCharFit] = useState(1);

  const reviewBody = {
    "product_id": currentProductId,
    "rating": Number(formRating),
    "summary": formSummary,
    "body": formBody,
    "recommend": (formRecommend === 'True'),
    "name": formName,
    "email": formEmail,
    "photos": formPhotos,
    "characteristics": { },
  };

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal((prev) => !prev);
    console.log(reviewBody);
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
        <b> Select Characteristics </b>
        <div>
          Size
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '5'}
            value="5"
          />
        </div>
        <div>
          Width
          <input
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={formRating === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '5'}
            value="5"
          />
        </div>
        <div>
          Comfort
          <input
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '5'}
            value="5"
          />
        </div>
        <div>
          Quality
          <input
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '5'}
            value="5"
          />
        </div>
        <div>
          Length
          <input
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '5'}
            value="5"
          />
        </div>
        <div>
          Fit
          <input
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '1'}
            value="1"
          />
          <input
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '2'}
            value="2"
          />
          <input
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '3'}
            value="3"
          />
          <input
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '4'}
            value="4"
          />
          <input
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '5'}
            value="5"
          />
        </div>
      </div>
      <div>
        <b> Do you recommend this product? </b>
        Yes
        <input
          onChange={(e) => { setFormRecommend(e.target.value); }}
          type="radio"
          checked={formRecommend === 'True'}
          value="True"
        />
        &nbsp;
        No
        <input
          onChange={(e) => { setFormRecommend(e.target.value); }}
          type="radio"
          checked={formRecommend === 'False'}
          value="False"
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
