/* eslint-disable react/prop-types */
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
  StyledImg, LeftButton, RightButton, StyledCarousel, StyledInner, StyledCarouselItem,
} from './styles/StyledCarousel.styled';

function Carousel({
  children, currentImageIndex, updateIndex, limit,
}) {
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
        <ChevronLeftIcon style={{ height: '25px' }} />
      </LeftButton>
      <RightButton show={showRight} onClick={() => { updateIndex(currentImageIndex + 1); }}>
        <ChevronRightIcon style={{ height: '25px' }} />
      </RightButton>
    </StyledCarousel>
  );
}

export function CarouselItem({
  width, image, expanded, setExpandedZoom, setExpanded,
}) {
  let height = '650px';
  if (expanded) {
    height = (window.innerHeight - 50).toString();
    height += 'px';
  }

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpandedZoom(true);
    }
  };

  return (
    <StyledCarouselItem width={width} height={height}>
      <StyledImg src={image.url} onClick={handleClick} />
    </StyledCarouselItem>
  );
}

export default Carousel;
