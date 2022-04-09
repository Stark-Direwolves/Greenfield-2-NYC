import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CardContainer from '../styles/CardContainer.styled';
import { ActionButton } from '../styles/StyledButtons.styled';
import { StyledImage, ImageContainer } from '../styles/Image.styled';
import OutfitCardInfo from './OutfitCardInfo';

function OutfitCard({ outfit, removeOutfit }) {
  const [sale, setSale] = useState(false);

  const toggleSale = () => {
    if (outfit.style.sale_price) {
      setSale(true);
    }
  };

  useEffect(() => {
    toggleSale();
  }, []);

  return (
    <CardContainer>
      <ActionButton type="button" onClick={() => removeOutfit(outfit)}><XIcon /></ActionButton>
      <ImageContainer>
        <StyledImage
          src={outfit.style.photos[0].url}
          onClick={() => {
            window.location.href = `/${outfit.product.id}`;
          }}
        />
      </ImageContainer>
      <OutfitCardInfo outfit={outfit} sale={sale} />
    </CardContainer>
  );
}

export default OutfitCard;
