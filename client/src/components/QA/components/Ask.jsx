import * as React from 'react';
import Modal from './Modal';
import useModal from './useModal';

import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.colors[6]};
  color: white;
  margin: 20px 0 20px 0;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors[7]};
  }
`;

function Ask({ productId, productName }) {
  const { isVisible, toggleModal } = useModal();

  return (
    <div>
      <Button type="submit" onClick={toggleModal}>
        ADD A QUESTION +
      </Button>
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
