import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Container from '../styles/Container.styled';
import AddOutfit from './AddOutfit.jsx';
import OutfitCard from './OutfitCard.jsx';
import LeftButton from '../styles/LeftButton.styled';
import RightButton from '../styles/RightButton.styled';

function Outfit({ product, style, meta }) {
  const [outfits, setOutfits] = useState([]);
  const [index, setIndex] = useState(0);
  const length = outfits.length + 1;

  const getStoredOutfits = () => {
    const keys = Object.keys(localStorage);
    const list = [];
    for (let i = 0; i < keys.length; i += 1) {
      list.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setOutfits(list);
  };

  useEffect(() => {
    getStoredOutfits();
  }, []);

  const updateIndex = (i) => {
    let newIndex = i;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }
    setIndex(newIndex);
  };

  const addOutfit = () => {
    const currentItem = { meta, product, style };
    const styleId = style.style_id;
    const list = outfits.slice();
    if (!localStorage.getItem(styleId)) {
      list.unshift(currentItem);
      setOutfits(list);
      localStorage.setItem(styleId, JSON.stringify(currentItem));
    }
  };

  const removeOutfit = (outfit) => {
    const list = outfits.slice();
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].style.style_id === outfit.style.style_id) {
        list.splice(i, 1);
        i -= 1;
      }
    }
    setOutfits(list);
    localStorage.removeItem(outfit.style.style_id);
  };

  return (
    <div id="outfit">
      <h3>My Outfits</h3>
      <Container style={{ transform: `translateX(-${index * 300}px)` }}>
        <AddOutfit addOutfit={addOutfit} product={product} />
        {outfits.map((outfit) => (
          <OutfitCard
            outfit={outfit}
            outfits={outfits}
            removeOutfit={removeOutfit}
          />
        ))}
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
