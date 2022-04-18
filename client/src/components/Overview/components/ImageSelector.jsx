/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledImageSelector, CurvedDiv, StyledImg,
  ThumbnailContainer, ImageSelectorContainer,
} from './styles/ImageSelector.styled';

function ImageSelector({ styleImages, updateIndex, currentImageIndex }) {
  return (
    <StyledImageSelector>
      <ImageSelectorContainer>
        {styleImages.map((image, index) => (
          <ImageSelectorEntry
            key={index}
            thumb_url={image.thumbnail_url}
            index={index}
            updateIndex={updateIndex}
            currentImageIndex={currentImageIndex}
          />
        ))}
      </ImageSelectorContainer>
    </StyledImageSelector>
  );
}

function ImageSelectorEntry({
  thumb_url, updateIndex, index, currentImageIndex,
}) {
  const isActive = index === currentImageIndex;
  return (
    <ThumbnailContainer isActive={isActive} onClick={() => { updateIndex(index); }}>
      <CurvedDiv>
        <StyledImg src={thumb_url} height="70" alt={index} />
      </CurvedDiv>
    </ThumbnailContainer>
  );
}

export default ImageSelector;
