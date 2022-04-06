import React from 'react';
import Carousel, { CarouselItem } from './Carousel.jsx';
import { StyledImageGallery, StyledImageSelector, StyledImagePreview, CurvedDiv, StyledImg, StyledLi, StyledUl } from './styles/ImageGallery.styled.js'

function ImageGallery({ styleImages }) {
  const limit = styleImages.length;
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= limit) {
      newIndex = limit - 1;
    }

    setCurrentImageIndex(newIndex);
  };

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [styleImages]);

  return (
    <StyledImageGallery>
      <div>
        <Carousel
          styleImages={styleImages}
          setCurrentImageIndex={setCurrentImageIndex}
          limit={limit}
          currentImageIndex={currentImageIndex}
          updateIndex={updateIndex}
        >
          {styleImages.map((image, index) => <CarouselItem image={image} key={index} />)}
        </Carousel>
      </div>
      <StyledImageSelector>
        <StyledUl>
          {styleImages.map((image, index) => (
            <ImageSelectorEntry
              key={index}
              thumb_url={image.thumbnail_url}
              index={index}
              updateIndex={updateIndex}
            />
          ))}
        </StyledUl>
      </StyledImageSelector>
    </StyledImageGallery>
  );
}

function ImageSelectorEntry ({ thumb_url, updateIndex, index }) {
  return (
    <StyledLi onClick={() => { updateIndex(index); }}>
      <CurvedDiv>
        <StyledImg src={thumb_url} height="70" alt={index} />
      </CurvedDiv>
    </StyledLi>
  )
}

export default ImageGallery;