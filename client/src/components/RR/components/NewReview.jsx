import React, { useState } from 'react';
import AddReview from '../RRstyles/AddReview.js';

function NewReview({ currentProduct, setShowModal }) {
  const [formRating, setFormRating] = useState(0);
  const [formRecommend, setFormRecommend] = useState(false);
  // const [formCharacteristics, setFormCharacteristics] =
  const [formSummary, setFormSummary] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={(event) => { submitForm(event) }} />
      <h2> Write your Review </h2>
      <h3>
        About the {currentProduct}
      </h3>
      <b> Select Rating </b>
      <div>
        <b> Do you recommend this product? </b>
        <label>
          Yes
          <input
            type="radio"
            checked={formRecommend === 'Yes'}
            value="Yes"
            onChange={ (e) => { setFormRecommend(e.target.value) }}
          />
        </label>
        <label>
          No
          <input type="radio"
            checked={formRecommend === 'No'}
            value="No"
            onChange={ (e) => { setFormRecommend(e.target.value) }}
          />
        </label>
      </div>
      {/* </form> */}
    </div>
  );
}

export default NewReview;
