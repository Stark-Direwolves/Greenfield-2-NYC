/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AddReview from '../RRstyles/AddReview.js';
import AddPhoto from '../RRstyles/AddPhoto.js';

function NewReview({ currentProduct, currentProductId, setShowModal }) {
  const [formRating, setFormRating] = useState(0);
  const [formRecommend, setFormRecommend] = useState(false);
  const [formSummary, setFormSummary] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formPhotos, setFormPhotos] = useState([]);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  // characteristics/meta data
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal((prev) => !prev);
  };

  const reviewBody = {
    product_id: currentProductId,
    rating: formRating,
    summary: formSummary,
    body: formBody,
    recommend: formRecommend,
    name: formName,
    email: formEmail,
    photos: formPhotos,
    characteristics: {
      size: size,
      width: width,
      comfort: comfort,
      quality: quality,
      length: length,
      fit: fit,
    }
  }

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
          <input type="text" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(event) => { setFormSummary(event.target.value); }} size="60" />
        </form>
      </div>
      <br />
      <div>
        <b> Review Body </b>
        <br />
        <form>
          <input type="text" display="flex" maxLength="1000" size="60" placeholder="Why did you like the product or not?" style={{ paddingBottom: 80, height: '80px' }} onChange={(event) => { setFormBody(event.target.value); }} required />
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
          <input type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(event) => { setFormName(event.target.value); }} size="60" required />
          <br />
          <small> For privacy reasons, do not use your full name or email address </small>
        </form>
      </div>
      <br />
      <div>
        <b> Email </b>
        <form>
          <input type="text" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(event) => { setFormEmail(event.target.value); }} size="60" required />
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
