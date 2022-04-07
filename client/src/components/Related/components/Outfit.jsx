import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Container from '../styles/Container.styled';
import AddOutfit from './AddOutfit.jsx';
import OutfitCard from './OutfitCard.jsx';
import LeftButton from '../styles/LeftButton.styled';
import RightButton from '../styles/RightButton.styled';

function Outfit({ product }) {
  const [outfits, setOutfits] = useState([]);
  const [index, setIndex] = useState(0);
  const length = outfits.length + 1;

  const updateIndex = (i) => {
    let newIndex = i;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }
    setIndex(newIndex);
  };

  const addOutfit = (item) => {
    const list = outfits.slice();
    list.unshift(item);
    setOutfits(list);
  };

  return (
    <div id="outfit">
      <h3>My Outfits</h3>
      <Container style={{ transform: `translateX(-${index * 300}px)` }}>
        <AddOutfit addOutfit={addOutfit} product={product} />
        {outfits.map((outfit) => <OutfitCard outfit={outfit} />)}
      </Container>
      <LeftButton type="button" onClick={() => updateIndex(index - 1)}>
        <ChevronLeftIcon />
      </LeftButton>
      <RightButton type="button" onClick={() => updateIndex(index + 1)}>
        <ChevronRightIcon />
      </RightButton>
    </div>
  );
}

export default Outfit;
