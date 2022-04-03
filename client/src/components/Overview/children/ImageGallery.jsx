import React from 'react';

function ImageGallery({ styleImages }) {
  const limit = styleImages.length - 1;
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goNext = () => {
    if (currentImageIndex < limit) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  const goPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [styleImages]);

  return (
    <div id="image-gallery">
      <div id="image-preview" className="component-separator">
        <img src={styleImages[currentImageIndex].url} width="670"/>
      </div>
      <div id="image-selector" className="component-separator">
        <button onClick={goPrevious}>previous</button><button onClick={goNext}>next</button>
      </div>
    </div>
  );
}

export default ImageGallery;