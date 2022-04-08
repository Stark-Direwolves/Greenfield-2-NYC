import * as React from 'react';
import Modal from './Modal';
import useModal from './useModal';

function Ask({ productId, productName }) {
  const { isVisible, toggleModal } = useModal();

  return (
    <div>
      <button type="submit" onClick={toggleModal}>
        ADD A QUESTION +
      </button>
      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        productId={productId}
        productName={productName}
      />
    </div>
  );
}

export default Ask;
