/* eslint-disable import/extensions */
import React from 'react';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import ProductInformation from './components/ProductInformation.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import { StyledOverview, StyledDetails } from './styles/Overview.styled.js';

function Overview({ product, styles, meta }) {
  const [ currentStyle, setCurrentStyle ] = React.useState(styles.results[0]);
  const [ currentSku, setCurrentSku ] = React.useState('none');
  const [ currentSize, setCurrentSize ] = React.useState('Select Size');
  const [ currentQty, setCurrentQty ] = React.useState('-');
  const [ currentTotal, setCurrentTotal ] = React.useState(0);

  React.useEffect(
    () => {
      setCurrentSku('none');
      setCurrentSize('Select Size');
      setCurrentQty('-');
      setCurrentTotal(0);
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
          styles={styles}
          currentSku={currentSku}
          currentSize={currentSize}
          currentQty={currentQty}
          setCurrentSku={setCurrentSku}
          setCurrentSize={setCurrentSize}
          setCurrentQty={setCurrentQty}
          currentTotal={currentTotal}
          setCurrentTotal={setCurrentTotal}
        />
      </StyledDetails>
    </StyledOverview>
  );
}

export default Overview;