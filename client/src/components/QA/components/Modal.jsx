/* eslint-disable no-unused-expressions */
import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import {
  SModalOverlay, SModalWrapper, SModal, SHeader, STitle, SButton, SDescription,
} from './styles/Modal.style';

function Modal({
  isVisible, hideModal, productId, isVisibleA, hideModalA, questionId, productName, questionBody,
}) {
  // console.log(productId)
  const [data, setData] = useState({ product_id: productId });
  const [dataA, setDataA] = useState({ photos: [] });
  const [uploadPhotos, setUploadPhotos] = useState([]);
  // not changing colors?? ^^

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
    let alerting = 'You must enter the following: \n';
    const name = ((!data.name || data.name.length < 1) ? '  \u2022  Name\n' : '');
    const email = ((!data.email || data.email.length < 1) ? '  \u2022  Email\n' : '');
    const body = ((!data.body || data.body.length < 1) ? '  \u2022  Question\n' : '');

    alerting += name + email + body;

    (Object.keys(data).length === 4 && data.email.includes('@') && data.email.includes('.'))
      ? (
        axios.post('/qa/questions', data)
          .then((result) => {
            setData({ product_id: productId });
            console.log(result);
          })
          .then(() => hideModal())
          .catch((err) => {
            console.log(err);
          })
      ) : alert(alerting);
    alerting = 'You must enter the following: \n';
  }

  function handleSubmitA(event) {
    event.preventDefault();
    let alerting = 'You must enter the following: \n';
    const name = ((!dataA.name || dataA.name.length < 1) ? '  \u2022  Name\n' : '');
    const email = (!dataA.email ? '  \u2022  Email\n' : '');
    const body = (!dataA.body ? '  \u2022  Answer\n' : '');
    alerting += name + email + body;

    (Object.keys(dataA).length === 4 && dataA.email.includes('@') && dataA.email.includes('.'))
      ? (
        axios.post(`/qa/questions/${questionId}/answers`, dataA)
          .then((result) => {
            setDataA({ photos: [] });
            console.log(result);
          })
          .then(() => hideModalA())
          .catch((err) => {
            console.log(err);
          })
      ) : alert(alerting);
    alerting = 'You must enter the following: \n';
  }

  function onChange(e) {
    setUploadPhotos((Array.from(e.target.files)));
  }

  const handleChange = useCallback((e) => { onChange(e); }, []);

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
                  <input name="name" type="text" placeholder="Example: jackson11!" maxLength="60" onChange={(e) => { handleEvent(e); }} required />
                  <div>For privacy reasons, do not use your full name or email address</div>
                  <br />
                  Email *
                  {' '}
                  <input name="email" type="text" placeholder="Example: jack@email.com" maxLength="60" onChange={(e) => { handleEvent(e); }} required />
                  <div>For authentication reasons, you will not be emailed</div>
                  <br />
                  {isVisible ? (<span>Question *</span>) : (<span>Answer *</span>)}
                  <br />
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
                      required
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
                        required
                      />
                    )}
                  <br />
                  {isVisibleA ? (
                    <input
                      type="file"
                      id="multi"
                      multiple
                      onChange={(e) => { handleChange(e); }}
                    />
                  )
                    : (
                      null)}
                  <div>
                    {(uploadPhotos.length > 0)
                      ? <img src={URL.createObjectURL(uploadPhotos[0])} alt="" style={{ height: '80px', width: '80px' }} />
                      : null}
                  </div>
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
