/* eslint-disable import/extensions */
import React from 'react';
import AddToCart from './children/AddToCart.jsx';
import ImageGallery from './children/ImageGallery.jsx';
import ProductInformation from './children/ProductInformation.jsx';
import StyleSelector from './children/StyleSelector.jsx';

function Overview({ product, styles }) {

  const [ currentStyle, setCurrentStyle ] = React.useState(styles.results[0]);
  const [ sku, setSku ] = React.useState('Select Size');
  const [ quantity, setQuantity ] = React.useState('-');

  React.useEffect(
    () => {
      setSku('Select Size');
      setQuantity('-');
    }, [currentStyle],
  );

  /*
    productInformation will only get the style it needs and the default productInfo
    styleSelector receives the current index, the method to change state, and the list of styles
  */
  return (
    <div id="overview">
      <ImageGallery styleImages={currentStyle.photos} />
      <div id="details">
        <ProductInformation
          currentProduct={product}
          currentStyle={currentStyle}
        />
        <StyleSelector
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          styles={styles.results}
        />
        <AddToCart
          currentStyle={currentStyle}
          sku={sku}
          setSku={setSku}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
}

export default Overview;