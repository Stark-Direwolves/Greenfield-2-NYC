import * as React from 'react';
import Modal from './Modal';
import useModal from './useModal';

function Answer({ questionId, productName, questionBody }) {
  const { isVisibleA, toggleModalA } = useModal();

  return (
    <div>
      <button type="submit" onClick={toggleModalA}>
        Add Answer
      </button>
      <Modal
        isVisibleA={isVisibleA}
        hideModalA={toggleModalA}
        questionId={questionId}
        productName={productName}
        questionBody={questionBody}
      />
    </div>
  );
}

export default Answer;
