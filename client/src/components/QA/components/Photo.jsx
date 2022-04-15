import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const PhotoBackground = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  width: 100%;
  z-index: 1000;
`;

const Modal = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  display: flex;
  margin: 1.875rem;
  max-width: 500px;
  position: relative;
  z-index: 100;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
`;

function Photo({ isPhotoA, hidePhotoA, photo }) {
  return (isPhotoA
    ? createPortal(
      <>
        <PhotoBackground />
        <PhotoContainer>
          <Modal>
            <CloseButton onClick={hidePhotoA}>
              x
            </CloseButton>
            <img src={photo} alt="" style={{ width: '500px', height: '100%' }} />
          </Modal>
        </PhotoContainer>
      </>,
      document.body,
    )
    : null
  );
}

export default Photo;
