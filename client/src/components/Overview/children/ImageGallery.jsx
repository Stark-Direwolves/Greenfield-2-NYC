import React from 'react';

function ImageGallery({ styleImages }) {
  return (
    <div id="image-gallery">
      <div id="image-preview" className="component-separator">
        <img src={styleImages[0].url} width="670"/>
      </div>
      <div id="image-selector" className="component-separator">
        image-selector
      </div>
    </div>
  );
}

export default ImageGallery;