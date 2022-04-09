/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import {
  StyledOverview, StyledDetails, SocialMedia, ExpandedView,
} from './styles/Overview.styled';

function Overview({
  product,
  styles,
  meta,
  currentStyle,
  currentSku,
  currentSize,
  currentQty,
  currentTotal,
  setCurrentStyle,
  setCurrentSku,
  setCurrentQty,
  setCurrentTotal,
  setCurrentSize,
}) {
  const [expandedView, setExpandedView] = React.useState(false);
  if (!expandedView) {
    return (
      <StyledOverview>
        <ImageGallery styleImages={currentStyle.photos} setExpandedView={setExpandedView} />
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
          <SocialMedia>
            share
            <br />
            <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter" />
            <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook" />
            <img src="https://img.icons8.com/ios/50/000000/pinterest--v1.png" alt="pinterest" />
          </SocialMedia>
        </StyledDetails>
      </StyledOverview>
    );
  }
  return (
  <ExpandedView
    product={product}
    styles={styles}
    meta={meta}
    currentStyle={currentStyle}
    currentSku={currentSku}
    currentSize={currentSize}
    currentQty={currentQty}
    currentTotal={currentTotal}
    setCurrentStyle={setCurrentStyle}
    setCurrentSku={setCurrentSku}
    setCurrentQty={setCurrentQty}
    setCurrentTotal={setCurrentTotal}
    setCurrentSize={setCurrentSize}
  >
    test
  </ExpandedView>
);
}

Overview.propTypes = {
  product: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  currentStyle: PropTypes.object.isRequired,
  currentSku: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentQty: PropTypes.string.isRequired,
  currentTotal: PropTypes.number.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  setCurrentSku: PropTypes.func.isRequired,
  setCurrentQty: PropTypes.func.isRequired,
  setCurrentTotal: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default Overview;
