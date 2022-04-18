/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import Quantity from './Quantity';
import {
  DropBtn, DropdownContent, Dropdown, DropdownContentA,
  AddToCartButton, SizeQuantityContainer, QuantityDiv, SizeDiv,
} from './styles/AddToCart.styled';

function AddToCart({
  currentStyle, currentSku, currentSize,
  currentQty, setCurrentSku, setCurrentSize,
  setCurrentQty, currentTotal, setCurrentTotal,
}) {
  // declare price and total
  const price = Number(currentStyle.sale_price || currentStyle.original_price);
  let currentTotalString;

  const [forceShowSize, setForceShowSize] = React.useState(false);

  const sizeMessage = forceShowSize ? 'Please select a size.' : 'size';
  if (currentTotal > 0) {
    currentTotalString = ` $${currentTotal.toString()}`;
  } else {
    currentTotalString = '';
  }

  // event handlers
  const handleClick = (sku_id) => {
    setCurrentSku(sku_id);
    setForceShowSize(false);
    setCurrentSize(currentStyle.skus[sku_id].size);
  };

  const handleQtyClick = (num) => {
    setCurrentQty(num);
    setCurrentTotal(num * price);
  };

  const AddToCartClick = () => {
    if (currentSize === 'Select Size') {
      setForceShowSize(true);
    }
    const purchaseObj = { sku_id: currentSku, count: currentQty };
    // axios.post('/checkout');
    if (purchaseObj.sku_id !== 'none' && purchaseObj.count !== '-') {
      axios.post('/cart/add', purchaseObj)
        .then((res) => {console.log(res)});
    }
    console.log('purchase object:', purchaseObj);
  };

  return (
    <>
      <SizeQuantityContainer>
        <SizeDiv>
          {sizeMessage}
          <br />
          <Dropdown>
            <DropBtn>{currentSize}</DropBtn>
            <DropdownContent forceShowSize={forceShowSize}>
              {Object.keys(currentStyle.skus).map(
                (sku_id, index) =>(
                  <DropdownContentA
                    key={sku_id}
                    onClick={() => { handleClick(sku_id); }}
                  >
                    {currentStyle.skus[sku_id].size}
                  </DropdownContentA>
                ),
              )}
            </DropdownContent>
          </Dropdown>
        </SizeDiv>
        <QuantityDiv>
          <Quantity
            sku={currentStyle.skus[currentSku]}
            handleQtyClick={handleQtyClick}
            currentQty={currentQty}
          />
        </QuantityDiv>
      </SizeQuantityContainer>
      <div>
        <AddToCartButton onClick={AddToCartClick}>
          ADD TO CART
          {currentTotalString}
        </AddToCartButton>
      </div>
    </>
  );
}

export default AddToCart;
