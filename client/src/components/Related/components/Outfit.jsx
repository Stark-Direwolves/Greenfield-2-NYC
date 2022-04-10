import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import AddOutfit from './AddOutfit';
import OutfitCard from './OutfitCard';
import { LeftButton, RightButton } from '../styles/StyledButtons.styled';
import { OutfitContainer, CarouselContainer } from '../styles/RelatedContainer.styled';

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
      list.push(currentItem);
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

  const hideLeftButton = () => {
    if (index >= 1) {
      return true;
    }
    return false;
  };

  const hideRightButton = () => {
    if ((length - 1) - 4 >= index) {
      return true;
    }
    return false;
  };

  return (
    <OutfitContainer>
      <h3>My Outfits</h3>
      <CarouselContainer style={{ transform: `translateX(-${index * 275}px)` }}>
        <AddOutfit addOutfit={addOutfit} product={product} />
        {outfits.map((outfit) => (
          <OutfitCard
            key={outfit.style.name}
            outfit={outfit}
            outfits={outfits}
            removeOutfit={removeOutfit}
          />
        ))}
      </CarouselContainer>
      {hideLeftButton()
        ? (
          <LeftButton type="button" onClick={() => updateIndex(index - 1)}>
            <ChevronLeftIcon />
          </LeftButton>
        ) : null}
      {hideRightButton()
        ? (
          <RightButton type="button" onClick={() => updateIndex(index + 1)}>
            <ChevronRightIcon />
          </RightButton>
        ) : null }
    </OutfitContainer>
  );
}

Outfit.propTypes = {
  product: PropTypes.instanceOf(Object),
  style: PropTypes.shape({
    style_id: PropTypes.number,
  }),
  meta: PropTypes.instanceOf(Object),
};

Outfit.defaultProps = {
  product: {},
  style: {},
  meta: {},
};

export default Outfit;
