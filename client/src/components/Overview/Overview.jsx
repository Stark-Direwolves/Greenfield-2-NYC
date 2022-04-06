/* eslint-disable import/extensions */
import React from 'react';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import ProductInformation from './components/ProductInformation.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import { StyledOverview, StyledDetails } from './styles/Overview.styled.js';

function Overview({ product, styles, meta }) {

  const [ currentStyle, setCurrentStyle ] = React.useState(styles.results[0]);
  const [ sku, setSku ] = React.useState('Select Size');
  const [ quantity, setQuantity ] = React.useState('-');

  React.useEffect(
    () => {
      setSku('Select Size');
      setQuantity('-');
    }, [currentStyle],
  );

  return (
    <StyledOverview>
      <ImageGallery styleImages={currentStyle.photos} />
      <StyledDetails>
        <ProductInformation
          currentProduct={product}
          currentStyle={currentStyle}
          meta={meta}
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
      </StyledDetails>
    </StyledOverview>
  );
}

export default Overview;