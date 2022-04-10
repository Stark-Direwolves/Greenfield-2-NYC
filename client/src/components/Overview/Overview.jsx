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
  product: PropTypes.object,
  styles: PropTypes.object,
  meta: PropTypes.object,
  currentStyle: PropTypes.object,
  currentSku: PropTypes.string,
  currentSize: PropTypes.string,
  currentQty: PropTypes.string,
  currentTotal: PropTypes.number,
  setCurrentStyle: PropTypes.func,
  setCurrentSku: PropTypes.func,
  setCurrentQty: PropTypes.func,
  setCurrentTotal: PropTypes.func,
  setCurrentSize: PropTypes.func,
};

export default Overview;
