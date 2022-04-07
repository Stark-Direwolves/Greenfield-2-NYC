import { useState } from 'react';

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleA, setIsVisibleA] = useState(false);

  function toggleModal() {
    setIsVisible(!isVisible);
  }

  function toggleModalA() {
    setIsVisibleA(!isVisibleA);
  }

  return {
    isVisible,
    toggleModal,
    isVisibleA,
    toggleModalA,
  };
};
export default useModal;
