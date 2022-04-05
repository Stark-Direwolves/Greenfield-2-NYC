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
              <STitle>Modal</STitle>
              <SDescription>
                Why this modal has popped up
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
