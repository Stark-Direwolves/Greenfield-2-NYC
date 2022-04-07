import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import AddOutfitContainer from '../styles/AddOutfitContainer.styled';
import AddButton from '../styles/AddButton.styled';

function AddOutfit() {
  return (
    <AddOutfitContainer>
      <AddButton type="button"><PlusIcon /></AddButton>
    </AddOutfitContainer>
  );
}

export default AddOutfit;
