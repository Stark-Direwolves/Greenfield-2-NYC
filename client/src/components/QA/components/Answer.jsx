import * as React from 'react';
import Modal from './Modal';
import useModal from './useModal';

function Answer({ questionId, productName, questionBody, setAnswers }) {
  const { isVisibleA, toggleModalA } = useModal();

  return (
    <>
      <span
        onClick={toggleModalA}
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
      >
        Add Answer
      </span>
      <Modal
        isVisibleA={isVisibleA}
        hideModalA={toggleModalA}
        questionId={questionId}
        productName={productName}
        questionBody={questionBody}
        setAnswers={setAnswers}
      />
    </>
  );
}

export default Answer;
