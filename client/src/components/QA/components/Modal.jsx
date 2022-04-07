import * as React from "react";
import { createPortal } from "react-dom";
import {
  SModalOverlay, SModalWrapper, SModal, SHeader, STitle, SButton, SDescription,
} from "./styles/Modal.style.jsx";

function Modal({ isVisible, hideModal }) {
  return isVisible
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
                  <input type="text" placeholder="Example: jackson11!" />
                  For privacy reasons, do not use your full name or email address
                  <br />
                  Email
                  {' '}
                  <input type="text" placeholder="email..." />
                  <br />
                  Question
                  <textarea type="text" placeholder="Question" maxLength="1000" />
                  <br />
                  <button onClick={(e) => { e.preventDefault(); }}>Submit</button>
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
    : null;
}

export default Modal;
