import React from 'react';
import Carousel, { CarouselItem } from './Carousel.jsx';

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
    <div id="image-gallery">
      <div id="image-carousel" className="component-separator">
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
      <div id="image-selector" className="component-separator">
        {styleImages.map((image, index) => <span key={index}>{index}</span>)}
      </div>
    </div>
  );
}

//<img src={image.url} width="100"/>

export default ImageGallery;