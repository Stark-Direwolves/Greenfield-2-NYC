/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import {
  StyledOverview, StyledDetails, SocialMedia,
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
  expanded,
  setExpanded,
}) {
  // const [expanded, setExpanded] = React.useState(false);

  const [curStyles, setCurStyles] = React.useState(styles.results);

  React.useEffect(() => { // if product is 65632, hardcode null images. is there a better way?
    if (product.id === 65632) {
      const replacement = Object.create(styles.results)
      replacement[0].photos[0].url = '/assets/blackblack.jpg'
      replacement[0].photos[0].thumbnail_url = '/assets/blackblack.jpg'
      replacement[1].photos[0].url = '/assets/blackgold.jpg'
      replacement[1].photos[0].thumbnail_url = '/assets/blackgold.jpg'
      replacement[2].photos[0].url = '/assets/goldblack.jpg'
      replacement[2].photos[0].thumbnail_url = '/assets/goldblack.jpg'
      replacement[3].photos[0].url = '/assets/goldgold.jpg'
      replacement[3].photos[0].thumbnail_url = '/assets/goldgold.jpg'
      setCurStyles(replacement);
    }
  }, []);

  return (
    <StyledOverview expanded={expanded} >
      <ImageGallery styleImages={currentStyle.photos} setExpanded={setExpanded} expanded={expanded} />
      { !expanded ?
        <StyledDetails>
          <ProductInformation
            currentProduct={product}
            currentStyle={currentStyle}
            meta={meta}
          />
          <StyleSelector
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            styles={curStyles}
          />
          <AddToCart
            currentStyle={currentStyle}
            styles={curStyles}
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
            <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter" />
            <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook" />
            <img src="https://img.icons8.com/ios/50/000000/pinterest--v1.png" alt="pinterest" />
          </SocialMedia>
        </StyledDetails> : <></>
      }
    </StyledOverview>
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
