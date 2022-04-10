/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import {
  SModalOverlay, SModalWrapper, SModal, SHeader, STitle, SButton, SDescription,
} from './styles/Modal.style';

function Modal({
  isVisible, hideModal, productId, isVisibleA, hideModalA, questionId, productName, questionBody,
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
    let alert = 'You must enter the following: ';

    if (!data.name) {
      alert += ' name';
    }

    (Object.keys(data).length === 4 && data.email.includes('@') && data.email.includes('.'))
      ? (
        axios.post('/qa/questions', data)
          .then((result) => {
            console.log(result);
          })
          .then(() => hideModal())
          .catch((err) => {
            console.log(err);
          })
      ) : alert(alert);
  }

  function handleSubmitA(event) {
    event.preventDefault();
    (Object.keys(dataA).length === 4 && dataA.email.includes('@') && dataA.email.includes('.com'))
      ? (
        axios.post(`/qa/questions/${questionId}/answers`, dataA)
          .then((result) => {
            console.log(result);
          })
          .then(() => hideModalA())
          .catch((err) => {
            console.log(err);
          })
      ) : alert('You must enter the following: ');
  }

  return (((isVisible || isVisibleA)
    ? createPortal(
      <>
        <SModalOverlay />
        <SModalWrapper
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <SModal>
            <SHeader>
              {isVisible ? (<STitle>Ask a Question</STitle>)
                : (<STitle>Submit your Answer</STitle>)}
              {isVisible ? (
                <span>
                  About the
                  {' '}
                  {productName}
                </span>
              ) : (
                <span>
                  {productName}
                  :
                  {questionBody}
                </span>
              )}

              <SDescription>
                <form>
                  Name *
                  {' '}
                  <input name="name" type="text" placeholder="Example: jackson11!" maxLength="60" onChange={(e) => { handleEvent(e); }} />
                  <div>For privacy reasons, do not use your full name or email address</div>
                  <br />
                  Email *
                  {' '}
                  <input name="email" type="text" placeholder="Example: jack@email.com" maxLength="60" onChange={(e) => { handleEvent(e); }} />
                  <div>For authentication reasons, you will not be emailed</div>
                  <br />
                  {isVisible ? (<span>Question *</span>) : (<span>Answer *</span>)}
                  {isVisible ? (
                    <textarea
                      name="body"
                      type="text"
                      placeholder="Question"
                      maxLength="1000"
                      onChange={(e) => { handleEvent(e); }}
                      style={{
                        resize: 'none', paddingBottom: 80, height: '80px', width: '418px',
                      }}
                    />
                  )
                    : (
                      <textarea
                        name="body"
                        type="text"
                        placeholder="Answer"
                        maxLength="1000"
                        onChange={(e) => { handleEvent(e); }}
                        style={{
                          resize: 'none', paddingBottom: 80, height: '80px', width: '418px',
                        }}
                      />
                    )}
                  <br />
                  {isVisibleA ? (
                    <input type="file" />
                    // <textarea name="body" type="text" placeholder="Photo" onChange={(e) => { handleEvent(e); }} />
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
