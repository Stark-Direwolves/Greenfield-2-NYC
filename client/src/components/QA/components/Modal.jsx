/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useEffect } from 'react';
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
  const [uploadPhotos, setUploadPhotos] = useState([]);
  const [limitPhotos, setLimitPhotos] = useState(0);
  const [dataA, setDataA] = useState({});

  function handleEvent(event) {
    isVisible ? (
      setData({ ...data, [event.target.name]: event.target.value }))
      : (null);
    isVisibleA
      ? (
        setDataA({ ...dataA, [event.target.name]: event.target.value, photos: uploadPhotos })
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
          .then(() => {
            setData({ product_id: productId });
          })
          .then(() => hideModal())
          .catch((err) => {
            console.log(err);
          })
      ) : alert(alerting);
    alerting = 'You must enter the following: \n';
  }

  function onChange(e) {
    const images = Array.from(e.target.files);

    const formData = new FormData();

    images.forEach((file, i) => {
      formData.append(i, file);
    });

    axios.post('/qa/answers/image-upload', formData)
      .then((response) => {
        setUploadPhotos((prev) => prev.concat(response.data[0].url));
        setLimitPhotos((prev) => prev + 1);
      })
      .catch((err) => new Error(err));
  }

  useEffect(() => {
    setDataA({ ...dataA, photos: uploadPhotos });
  }, [uploadPhotos]);

  function handleSubmitA(event) {
    event.preventDefault();

    console.log(dataA);

    console.log('current state to send ', dataA);
    let alerting = 'You must enter the following: \n';
    const name = ((!dataA.name || dataA.name.length < 1) ? '  \u2022  Name\n' : '');
    const email = (!dataA.email ? '  \u2022  Email\n' : '');
    const body = (!dataA.body ? '  \u2022  Answer\n' : '');
    alerting += name + email + body;

    (Object.keys(dataA).length === 4 && dataA.email.includes('@') && dataA.email.includes('.'))
      ? (
        axios.post(`/qa/questions/${questionId}/answers`, dataA)
          .then((result) => {
            console.log(result);
          })
          .then(() => hideModalA())
          .catch((err) => {
            console.log(err);
          })
      ) : alert(alerting);
    alerting = 'You must enter the following: \n';
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
                  {(isVisibleA) ? (
                    (limitPhotos < 5)
                      ? (
                        <input
                          type="file"
                          id="multi"
                          accept="image/png, image/gif, image/jpeg"
                          multiple
                          onChange={(e) => { handleChange(e); }}
                        />
                      )
                      : (
                        'Max 5 photos allowed'))
                    : (null)}
                  <div>
                    {(uploadPhotos.length > 0)
                      ? uploadPhotos.map((image, i) => (
                        <img key={i} src={image} alt="" style={{ height: '80px', width: '80px', padding: '3px' }} />
                      ))
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
