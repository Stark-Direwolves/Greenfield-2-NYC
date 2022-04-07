import * as React from "react";
import Modal from "./Modal.jsx";
import useModal from "./useModal.jsx";

function Answer() {
  const { isVisibleA, toggleModalA } = useModal();

  return (
    <div>
      <button type="submit" onClick={toggleModalA}>
        Add Answer
      </button>
      <Modal isVisibleA={isVisibleA} hideModalA={toggleModalA} />
    </div>
  );
}

export default Answer;
