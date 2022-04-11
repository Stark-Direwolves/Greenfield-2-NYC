/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import AddReview from '../RRstyles/AddReview';
import AddPhoto from '../RRstyles/AddPhoto';
import FormCharacteristics from '../RRstyles/FormCharacteristics';

function NewReview({ currentProduct, currentProductId, setShowModal, meta }) {
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

  let characteristics = {};
  if (meta.characteristics.Size) {
    const size = meta.characteristics.Size.id;
    characteristics[String(size)] = Number(charSize);
  }
  if (meta.characteristics.Width) {
    const width = meta.characteristics.Width.id;
    characteristics[String(width)] = Number(charWidth);
  }
  if (meta.characteristics.Comfort) {
    const comfort = meta.characteristics.Comfort.id;
    characteristics[String(comfort)] = Number(charComfort);
  }
  if (meta.characteristics.Quality) {
    const quality = meta.characteristics.Quality.id;
    characteristics[String(quality)] = Number(charQuality);
  }
  if (meta.characteristics.Length) {
    const length = meta.characteristics.Length.id;
    characteristics[String(length)] = Number(charLength);
  }
  if (meta.characteristics.Fit) {
    const fit = meta.characteristics.Fit.id;
    characteristics[String(fit)] = Number(charFit);
  }

  const reviewBody = {
    "product_id": currentProductId,
    "rating": Number(formRating),
    "summary": formSummary,
    "body": formBody,
    "recommend": (formRecommend === 'True'),
    "name": formName,
    "email": formEmail,
    "photos": [],
    "characteristics": characteristics,
  };

  const submitPhoto = (event) => {
    axios.post('/photos/upload', formPhotos)
      .then((res) => {
        console.log(res.url);
        formPhotos.push(res.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(reviewBody);
    setShowModal((prev) => !prev);
    axios.post('/reviews', reviewBody)
      .then((res) => {
        console.log('review submitted', res);
      })
      .catch((err) => {
        console.log('uh oh try again', err);
      });
  };

  const closeForm = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <h2 style={{ color: '#6b6a6a' }}> Write your Review </h2>
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
      <br />
      <div>
        <b> Select Characteristics </b>
        <FormCharacteristics>
          Size
          &nbsp;
          A size too small
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '1'}
            value="1"
          />
          1/2 a size too small
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '2'}
            value="2"
          />
          Perfect
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '3'}
            value="3"
          />
          1/2 a size too big
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '4'}
            value="4"
          />
          A size too wide
          <input
            onChange={(e) => { setCharSize(e.target.value); }}
            type="radio"
            checked={charSize === '5'}
            value="5"
          />
        </FormCharacteristics>
        <div>
          Width
          &nbsp;
          Too narrow
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={formRating === '1'}
            value="1"
          />
          Slightly narrow
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '2'}
            value="2"
          />
          Perfect
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '3'}
            value="3"
          />
          Slightly wide
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '4'}
            value="4"
          />
          Too wide
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharWidth(e.target.value); }}
            type="radio"
            checked={charWidth === '5'}
            value="5"
          />
        </div>
        <div>
          Comfort
          &nbsp;
          Uncomfortable
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '1'}
            value="1"
          />
          Slightly uncomfortable
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '2'}
            value="2"
          />
          Ok
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '3'}
            value="3"
          />
          Comfortable
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '4'}
            value="4"
          />
          Perfect
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharComfort(e.target.value); }}
            type="radio"
            checked={charComfort === '5'}
            value="5"
          />
        </div>
        <div>
          Quality
          &nbsp;
          Poor
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '1'}
            value="1"
          />
          Below average
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '2'}
            value="2"
          />
          What I expected
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '3'}
            value="3"
          />
          Pretty great
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '4'}
            value="4"
          />
          Perfect
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharQuality(e.target.value); }}
            type="radio"
            checked={charQuality === '5'}
            value="5"
          />
        </div>
        <div>
          Length
          &nbsp;
          Runs short
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '1'}
            value="1"
          />
          Runs slightly short
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '2'}
            value="2"
          />
          Perfect
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '3'}
            value="3"
          />
          Runs slightly long
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '4'}
            value="4"
          />
          Runs long
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharLength(e.target.value); }}
            type="radio"
            checked={charLength === '5'}
            value="5"
          />
        </div>
        <div>
          Fit
          &nbsp;
          Runs tight
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '1'}
            value="1"
          />
          Runs slightly tight
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '2'}
            value="2"
          />
          Perfect
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '3'}
            value="3"
          />
          Runs slightly long
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '4'}
            value="4"
          />
          Runs long
          <input
            style={{ textAlign: 'center' }}
            onChange={(e) => { setCharFit(e.target.value); }}
            type="radio"
            checked={charFit === '5'}
            value="5"
          />
        </div>
      </div>
      <br />
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
          <textarea type="text" display="flex" maxLength="1000" size="60" placeholder="Why did you like the product or not?" style={{ resize: 'none', paddingBottom: 80, height: '60px', width: '418px' }} onChange={(event) => { setFormBody(event.target.value); }} required />
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
        <input type="file" multiple onChange={(e) => { setFormPhotos(Array.from(e.target.files)); }} />
        <AddPhoto>
          {(formPhotos.length >= 1)
            ? formPhotos.map((photo, i) => <img key={i} src={URL.createObjectURL(photo)} alt="" style={{ height: '80px', width: '80px', padding: '10px' }} />)
            : null}
        </AddPhoto>
      </div>
      <br />
      <button type="submit" onClick={(event) => { submitForm(event); }}> Submit Review </button>
      &nbsp;
      <button type="submit" onClick={(event) => { closeForm(event); }}> Close Review </button>
    </div>
  );
}

export default NewReview;
