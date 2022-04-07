import React from 'react';
import CardContainer from '../styles/CardContainer.styled';
import Button from '../styles/Button.styled';
import { XIcon } from '@heroicons/react/solid';

function OutfitCard({ outfit }) {
  return (
    <CardContainer>
      <Button><XIcon /></Button>
      <p>{outfit.category}</p>
      <div>{outfit.name}</div>
      <div>{outfit.default_price}</div>
    </CardContainer>
  );
}

export default OutfitCard;
