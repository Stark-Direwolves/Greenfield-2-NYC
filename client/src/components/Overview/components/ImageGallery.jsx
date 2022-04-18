/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel, { CarouselItem } from './Carousel';
import ExpandedZoom from './ExpandedZoom';
import ImageSelector from './ImageSelector';
import { StyledImageGallery, StyledImagePreview } from './styles/ImageGallery.styled';

function ImageGallery({ styleImages, setExpanded, expanded }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [expandedZoom, setExpandedZoom] = React.useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= styleImages.length) {
      newIndex = styleImages.length - 1;
    }

    setCurrentImageIndex(newIndex);
  };

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [styleImages]);

  return (
    <StyledImageGallery>
      { expandedZoom
        ? (
          <ExpandedZoom
            expandedZoom={expandedZoom}
            setExpandedZoom={setExpandedZoom}
            image={styleImages[currentImageIndex]}
          />
        ) : null }
      <StyledImagePreview>
        <Carousel
          styleImages={styleImages}
          setCurrentImageIndex={setCurrentImageIndex}
          limit={styleImages.length}
          currentImageIndex={currentImageIndex}
          updateIndex={updateIndex}
          setExpanded={setExpanded}
          expanded={expanded}
        >
          {styleImages.map((image, index) => (
            <CarouselItem
              image={image} key={index} expanded={expanded}
              expandedZoom={expandedZoom}
              setExpandedZoom={setExpandedZoom}
              setExpanded={setExpanded}
            />
          ))}
        </Carousel>
      </StyledImagePreview>
      <ImageSelector
        styleImages={styleImages}
        updateIndex={updateIndex}
        currentImageIndex={currentImageIndex}
      />
    </StyledImageGallery>
  );
}

export default ImageGallery;
