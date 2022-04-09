import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/outline';
import AddOutfitContainer from '../styles/AddOutfitContainer.styled';
import { AddButton } from '../styles/StyledButtons.styled';

function AddOutfit({ addOutfit, product }) {
  return (
    <AddOutfitContainer>
      <AddButton type="button" onClick={() => addOutfit(product)}><PlusIcon /></AddButton>
    </AddOutfitContainer>
  );
}

export default AddOutfit;
