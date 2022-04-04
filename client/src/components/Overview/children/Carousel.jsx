import React from 'react';

export function CarouselItem({ children, width, image}) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img src={image.url} style={{ height: '600px' }} />
    </div>
  );
};

function Carousel({ children, currentImageIndex }) {
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => React.cloneElement(child, { width: '100%' }))}
      </div>
    </div>
  );
}

export default Carousel;
