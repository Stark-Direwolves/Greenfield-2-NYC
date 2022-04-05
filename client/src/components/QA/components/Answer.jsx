import * as React from "react";
import Modal from "./Modal.jsx";
import useModal from "./useModal.jsx";

function Answer() {
  const { isVisible, toggleModal } = useModal();

  return (
    <div>
      <button onClick={toggleModal}>
        Show modal
      </button>
      <Modal isVisible={isVisible} hideModal={toggleModal} />
    </div>
  );
}

export default Answer;
