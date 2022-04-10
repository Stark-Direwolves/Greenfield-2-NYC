import React from 'react';
import { StyledImg, LeftButton, RightButton, StyledCarousel, StyledInner, StyledCarouselItem } from './styles/StyledCarousel.styled.js';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function Carousel({ children, currentImageIndex, updateIndex, limit }) {
  const showLeft = (currentImageIndex === 0);
  const showRight = (currentImageIndex === limit - 1);
  return (
    <StyledCarousel>
      <StyledInner
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => React.cloneElement(child, { width: '100%' }))}
      </StyledInner>
      <LeftButton show={showLeft} onClick={() => { updateIndex(currentImageIndex - 1); }}>
        <ChevronLeftIcon style={{ height: "25px" }} />
      </LeftButton>
      <RightButton show={showRight} onClick={() => { updateIndex(currentImageIndex + 1); }}>
        <ChevronRightIcon style={{ height: "25px" }} />
      </RightButton>
    </StyledCarousel>
  );
};

export function CarouselItem({ width, image }) {
  return (
    <StyledCarouselItem width={width}>
      <StyledImg src={image.url} />
    </StyledCarouselItem>
  );
}

export default Carousel;
