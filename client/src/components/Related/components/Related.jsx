import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Card from './Card';
import { LeftButton, RightButton } from '../styles/StyledButtons.styled';
import { RelatedContainer, CarouselContainer } from '../styles/RelatedContainer.styled';

const axios = require('axios');

function Related({ relatedProducts, currentProduct }) {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const { length } = relatedProducts;

  // const getRelatedProducts = () => {
  //   axios.get('/products/65631/related')
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getRelatedProducts();
  // }, []);

  const hideLeftButton = () => {
    if (index === 0) {
      return true;
    }
    return false;
  };

  const hideRightButton = () => {
    if (length - 4 <= index) {
      return true;
    }
    return false;
  };

  const updateIndex = (i) => {
    let newIndex = i;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <RelatedContainer data-testid="related">
      <h3>Related Products</h3>
      <CarouselContainer style={{ transform: `translateX(-${index * 272}px)` }}>
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            related={product}
            current={currentProduct}
          />
        ))}
      </CarouselContainer>
      {hideLeftButton()
        ? null
        : (
          <LeftButton type="button" onClick={() => updateIndex(index - 1)}>
            <ChevronLeftIcon />
          </LeftButton>
        )}
      {hideRightButton()
        ? null
        : (
          <RightButton type="button" onClick={() => updateIndex(index + 1)}>
            <ChevronRightIcon />
          </RightButton>
        )}
    </RelatedContainer>
  );
}

Related.propTypes = {
  relatedProducts: PropTypes.instanceOf(Array),
  currentProduct: PropTypes.instanceOf(Object),
};

Related.defaultProps = {
  relatedProducts: [],
  currentProduct: {},
};

export default Related;
