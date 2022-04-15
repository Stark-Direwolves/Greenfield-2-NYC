import { useState } from 'react';

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleA, setIsVisibleA] = useState(false);
  const [isPhotoA, setIsPhotoA] = useState(false);

  function toggleModal() {
    setIsVisible(!isVisible);
  }

  function toggleModalA() {
    setIsVisibleA(!isVisibleA);
  }

  function togglePhotoA() {
    setIsPhotoA(!isPhotoA);
  }

  return {
    isVisible,
    toggleModal,
    isVisibleA,
    toggleModalA,
    isPhotoA,
    togglePhotoA,
  };
};
export default useModal;
