import React from 'react';
import { StyledImg, LeftDiv, RightDiv } from './styles/StyledCarousel.styled.js';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export function CarouselItem({ children, width, image}) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <StyledImg src={image.url} style={{ height: '600px' }} />
    </div>
  );
}

function Carousel({ children, currentImageIndex, updateIndex, limit }) {
  let show = {};

  if (currentImageIndex === 0) {
    show.left = 'hidden';
  }
  if (currentImageIndex === limit - 1) {
    show.right = 'hidden';
  }
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => React.cloneElement(child, { width: '100%' }))}
      </div>
      <LeftDiv show={show} onClick={() => { updateIndex(currentImageIndex - 1); }}>
        <ChevronLeftIcon style={{ height: "25px" }} />
      </LeftDiv>
      <RightDiv show={show} onClick={() => { updateIndex(currentImageIndex + 1); }}>
        <ChevronRightIcon style={{ height: "25px" }} />
      </RightDiv>
    </div>
  );
};

export default Carousel;
