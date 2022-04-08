/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import {
  SModalOverlay, SModalWrapper, SModal, SHeader, STitle, SButton, SDescription,
} from './styles/Modal.style.jsx';

function Modal({
  isVisible, hideModal, productId, isVisibleA, hideModalA
}) {
  const [data, setData] = useState({ product_id: productId });

  function handleEvent(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleSubmitQ(event) {
    event.preventDefault();
    console.log(data);
    (Object.keys(data).length === 4)
      ? (
        axios.post('/qa/questions', data)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          })
      ) : alert('missing fields');
  }

  return ((isVisible
    ? createPortal(
      <>
        <SModalOverlay />
        <SModalWrapper
          aria-modal={true}
          aria-hidden={true}
          tabIndex={-1}
          role="dialog"
        >
          <SModal>
            <SHeader>
              <STitle>Ask a Question</STitle>
              <SDescription>
                <form>
                  Name
                  {' '}
                  <input name="name" type="text" placeholder="Example: jackson11!" onChange={(e) => { handleEvent(e); }} />
                  For privacy reasons, do not use your full name or email address
                  <br />
                  Email
                  {' '}
                  <input name="email" type="text" placeholder="email..." onChange={(e) => { handleEvent(e); }} />
                  <br />
                  Question
                  <textarea name="body" type="text" placeholder="Question" maxLength="1000" onChange={(e) => { handleEvent(e); }} style={{ width: '418px', resize: 'none' }} />
                  <br />
                  <button type="submit" onClick={handleSubmitQ}>Submit</button>
                </form>
              </SDescription>
            </SHeader>
            <SButton onClick={hideModal}>
              Close
            </SButton>
          </SModal>
        </SModalWrapper>
      </>,
      App,
    )
    : null)
  );
}

export default Modal;
