import React from 'react';

export function CarouselItem({ children, width, image}) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img src={image.url} style={{ height: '600px' }} />
    </div>
  );
};

function Carousel({ children, currentImageIndex, updateIndex }) {
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => React.cloneElement(child, { width: '100%' }))}
      </div>
      <button className="carousel-button-left" onClick={() => { updateIndex(currentImageIndex - 1); }}>prev</button>
      <button className="carousel-button-right" onClick={() => { updateIndex(currentImageIndex + 1); }}>next</button>
    </div>
  );
}

export default Carousel;
