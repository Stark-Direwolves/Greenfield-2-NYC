import * as React from "react";
import Modal from "./Modal.jsx";
import useModal from "./useModal.jsx";

function Ask({ productId }) {
  const { isVisible, toggleModal } = useModal();

  return (
    <div>
      <button onClick={toggleModal}>
        ADD A QUESTION +
      </button>
      <Modal isVisible={isVisible} hideModal={toggleModal} productId={productId} />
    </div>
  );
}

export default Ask;
