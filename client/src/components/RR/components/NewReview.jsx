/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import AddReview from '../RRstyles/AddReview';
import AddPhoto from '../RRstyles/AddPhoto';
import FormCharacteristics from '../RRstyles/FormCharacteristics';
import CloseReview from '../RRstyles/CloseReview';

function NewReview({ currentProduct, currentProductId, setShowModal, meta }) {
  const [formRating, setFormRating] = useState(0);
  const [formSummary, setFormSummary] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formRecommend, setFormRecommend] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhotos, setFormPhotos] = useState([]);
  const [photoPreview, setPhotoPreview] = useState([]);
  // characteristics/meta data
  const [charSize, setCharSize] = useState(0);
  const [charWidth, setCharWidth] = useState(0);
  const [charComfort, setCharComfort] = useState(0);
  const [charQuality, setCharQuality] = useState(0);
  const [charLength, setCharLength] = useState(0);
  const [charFit, setCharFit] = useState(0);

  const characteristics = {};
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

  const submitForm = () => {
    const reviewBody = {
      "product_id": currentProductId,
      "rating": Number(formRating),
      "summary": formSummary,
      "body": formBody,
      "recommend": (formRecommend === 'True'),
      "name": formName,
      "email": formEmail,
      "photos": formPhotos,
      "characteristics": characteristics,
    };
    setShowModal((prev) => !prev);
    axios.post('/reviews', reviewBody)
      .then((res) => {
        console.log('review submitted', res);
      })
      .catch((err) => {
        console.log('uh oh try again', err);
      });
  };

  const submitPhoto = () => {
    const data = new FormData();
    data.append('photos', photoPreview[0]);
    axios.post('/reviews/photos/upload', data)
      .then((res) => {
        formPhotos.push((res.data));
      })
      .then(() => {
        console.log(formPhotos);
        submitForm();
      })
      .catch((err) => {
        console.log('photo didnt go through', err);
      });
  };

  const closeForm = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <h2 style={{ color: '#6b6a6a', marginLeft: '33%' }}> Write your Review </h2>
      <h3 style={{ marginLeft: '32%', marginTop: '-2%' }}>
        About the {currentProduct}
      </h3>
      <b>
        <b> Select Rating </b>
        <b className="rating" style={{ textAlign: 'left' }}>
          <input
            style={{ display: 'none' }}
            type="radio"
            id="r5"
            onChange={(e) => { setFormRating(e.target.value); }}
            checked={formRating === '5'}
            value="5"
          />
          <label htmlFor="r5">★</label>
          <input
            style={{ display: 'none' }}
            type="radio"
            id="r4"
            onChange={(e) => { setFormRating(e.target.value); }}
            checked={formRating === '4'}
            value="4"
          />
          <label htmlFor="r4">★</label>
          <input
            style={{ display: 'none' }}
            type="radio"
            id="r3"
            onChange={(e) => { setFormRating(e.target.value); }}
            checked={formRating === '3'}
            value="3"
          />
          <label htmlFor="r3">★</label>
          <input
            style={{ display: 'none' }}
            type="radio"
            id="r2"
            onChange={(e) => { setFormRating(e.target.value); }}
            checked={formRating === '2'}
            value="2"
          />
          <label htmlFor="r2">★</label>
          <input
            style={{ display: 'none' }}
            type="radio"
            id="r1"
            onChange={(e) => { setFormRating(e.target.value); }}
            checked={formRating === '1'}
            value="1"
          />
          <label htmlFor="r1">★</label>
        </b>
      </b>
      <b style={{ marginLeft: '9.5%' }}>
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
      </b>
      <div style={{ marginTop: '3%' }}>
        <b> Review Summary </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: Best purchase ever!" onChange={(event) => { setFormSummary(event.target.value); }} style={{ width: '620px', resize: 'none', marginTop: '10px' }} />
        </form>
      </div>
      <br />
      <div>
        <b> Review Body </b>
        <br />
        <form>
          <textarea type="text" display="flex" maxLength="1000" size="60" placeholder="Why did you like the product or not?" style={{ resize: 'none', paddingBottom: 80, height: '60px', width: '620px', marginTop: '10px' }} onChange={(event) => { setFormBody(event.target.value); }} required />
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
      <div style={{ width: '600px', border: '2px solid black', padding: '1%', borderRadius: '5px',   backgroundColor: '#d4beb2', textAlign: 'center' }}>
        <b> Select Characteristics </b>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Size
          </b>
          <br />
          <FormCharacteristics>
            A size too small
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharSize(e.target.value); }}
              type="radio"
              checked={charSize === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            1/2 a size too small
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharSize(e.target.value); }}
              type="radio"
              checked={charSize === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharSize(e.target.value); }}
              type="radio"
              checked={charSize === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            1/2 a size too big
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharSize(e.target.value); }}
              type="radio"
              checked={charSize === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            A size too wide
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharSize(e.target.value); }}
              type="radio"
              checked={charSize === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Width
          </b>
          <br />
          <FormCharacteristics>
            Too narrow
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharWidth(e.target.value); }}
              type="radio"
              checked={charWidth === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Slightly narrow
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharWidth(e.target.value); }}
              type="radio"
              checked={charWidth === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharWidth(e.target.value); }}
              type="radio"
              checked={charWidth === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Slightly wide
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharWidth(e.target.value); }}
              type="radio"
              checked={charWidth === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Too wide
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharWidth(e.target.value); }}
              type="radio"
              checked={charWidth === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Comfort
          </b>
          <br />
          <FormCharacteristics>
            Uncomfortable
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharComfort(e.target.value); }}
              type="radio"
              checked={charComfort === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Slightly Uncomfortable
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharComfort(e.target.value); }}
              type="radio"
              checked={charComfort === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Ok
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharComfort(e.target.value); }}
              type="radio"
              checked={charComfort === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Comfortable
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharComfort(e.target.value); }}
              type="radio"
              checked={charComfort === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharComfort(e.target.value); }}
              type="radio"
              checked={charComfort === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Quality
          </b>
          <br />
          <FormCharacteristics>
            Poor
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharQuality(e.target.value); }}
              type="radio"
              checked={charQuality === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Below average
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharQuality(e.target.value); }}
              type="radio"
              checked={charQuality === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            What I expected
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharQuality(e.target.value); }}
              type="radio"
              checked={charQuality === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Pretty great
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharQuality(e.target.value); }}
              type="radio"
              checked={charQuality === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharQuality(e.target.value); }}
              type="radio"
              checked={charQuality === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Length
          </b>
          <br />
          <FormCharacteristics>
            Runs short
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharLength(e.target.value); }}
              type="radio"
              checked={charLength === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs slightly short
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharLength(e.target.value); }}
              type="radio"
              checked={charLength === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharLength(e.target.value); }}
              type="radio"
              checked={charLength === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs slightly long
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharLength(e.target.value); }}
              type="radio"
              checked={charLength === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs long
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharLength(e.target.value); }}
              type="radio"
              checked={charLength === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
        <div style={{ textAlign: 'center' }}>
          <b style={{ fontWeight: '900', textDecoration: 'underline' }}>
            Fit
          </b>
          <br />
          <FormCharacteristics>
            Runs tight
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharFit(e.target.value); }}
              type="radio"
              checked={charFit === '1'}
              value="1"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs slightly tight
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharFit(e.target.value); }}
              type="radio"
              checked={charFit === '2'}
              value="2"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Perfect
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharFit(e.target.value); }}
              type="radio"
              checked={charFit === '3'}
              value="3"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs slightly long
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharFit(e.target.value); }}
              type="radio"
              checked={charFit === '4'}
              value="4"
            />
          </FormCharacteristics>
          <FormCharacteristics>
            Runs long
            <input
              // style={{ textAlign: 'center' }}
              onChange={(e) => { setCharFit(e.target.value); }}
              type="radio"
              checked={charFit === '5'}
              value="5"
            />
          </FormCharacteristics>
        </div>
      </div>
      <br />
      <br />
      <div>
        <b> What is your Name </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(event) => { setFormName(event.target.value); }} style={{ resize: 'none', marginTop: '10px' }} size="60" required />
          <br />
          <small> For privacy reasons, do not use your full name or email address </small>
        </form>
      </div>
      <br />
      <div>
        <b> Email </b>
        <form>
          <textarea type="text" maxLength="60" placeholder="Example: jackson11@email.com" onChange={(event) => { setFormEmail(event.target.value); }} style={{ resize: 'none', marginTop: '10px' }} required />
          <br />
          <small> For authentication reasons, you will not be emailed </small>
        </form>
      </div>
      <br />
      <div>
        <b> Upload Your Photos </b>
        <input type="file" multiple onChange={(e) => { setPhotoPreview(Array.from(e.target.files)) }} />
        <AddPhoto>
          {(photoPreview.length >= 1)
            ? photoPreview.map((photo, i) => <img key={i} src={URL.createObjectURL(photo)} alt="" style={{ height: '80px', width: '80px', padding: '10px' }} />)
            : null}
        </AddPhoto>
      </div>
      <br />
      <button type="submit" onClick={(event) => { (submitPhoto(event)); }}> Submit Review </button>
      &nbsp;
      <CloseReview type="submit" onClick={(event) => { closeForm(event); }}> Close Review </CloseReview>
    </div>
  );
}

export default NewReview;
