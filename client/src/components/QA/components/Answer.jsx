import * as React from 'react';
import Modal from './Modal';
import useModal from './useModal';

import styled from 'styled-components';

function Answer({ questionId, productName, questionBody }) {
  const { isVisibleA, toggleModalA } = useModal();

  return (
    <>
      <span onClick={toggleModalA}>
        Add Answer
      </span>
      <Modal
        isVisibleA={isVisibleA}
        hideModalA={toggleModalA}
        questionId={questionId}
        productName={productName}
        questionBody={questionBody}
      />
    </>
  );
}

export default Answer;
