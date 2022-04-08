/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import {
  SModalOverlay, SModalWrapper, SModal, SHeader, STitle, SButton, SDescription,
} from './styles/Modal.style.jsx';

function Modal({
  isVisible, hideModal, productId, isVisibleA, hideModalA, questionId,
}) {
  const [data, setData] = useState({ product_id: productId });
  const [dataA, setDataA] = useState({ photos: [] });

  function handleEvent(event) {
    isVisible ? (
      setData({ ...data, [event.target.name]: event.target.value }))
      : (null);
    isVisibleA
      ? (
        setDataA({ ...dataA, [event.target.name]: event.target.value })
      )
      : (null);
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

  function handleSubmitA(event) {
    event.preventDefault();
    (Object.keys(dataA).length === 4)
      ? (
        axios.post(`/qa/questions/${questionId}/answers`, dataA)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          })
      ) : alert('missing fields');
  }

  return (((isVisible || isVisibleA)
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
              {isVisible ? (<STitle>Ask a Question</STitle>) : (<STitle>Answer</STitle>)}
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
                  {isVisible ? (<span>Question</span>) : (<span>Answer</span>)}
                  {isVisible ? (
                    <textarea name="body" type="text" placeholder="Question" maxLength="1000" onChange={(e) => { handleEvent(e); }} style={{ width: '418px', resize: 'none' }} />
                  )
                    : (
                      <textarea name="body" type="text" placeholder="Answer" maxLength="1000" onChange={(e) => { handleEvent(e); }} style={{ width: '418px', resize: 'none' }} />
                    )}
                  {isVisibleA ? (
                    <textarea name="body" type="text" placeholder="Answer" maxLength="1000" onChange={(e) => { handleEvent(e); }} style={{ width: '418px', resize: 'none' }} />
                  )
                    : (
                      null)}

                  <br />
                  {isVisible ? <button type="submit" onClick={handleSubmitQ}>Submit</button> : null}
                  {isVisibleA ? <button type="submit" onClick={handleSubmitA}>Submit</button> : null}
                </form>
              </SDescription>
            </SHeader>
            {isVisible ? (
              <SButton onClick={hideModal}>
                Close
              </SButton>
            )
              : (
                <SButton onClick={hideModalA}>
                  Close
                </SButton>
              )}
          </SModal>
        </SModalWrapper>
      </>,
      App,
    )
    : null)
  );
}

export default Modal;
