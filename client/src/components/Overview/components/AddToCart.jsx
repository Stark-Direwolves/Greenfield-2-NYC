import React from 'react';
import Quantity from './Quantity';
import { DropBtn, DropdownContent, Dropdown, DropdownContentA, AddToCartButton, SizeQuantityContainer, QuantityDiv, SizeDiv } from './styles/AddToCart.styled';

function AddToCart({ currentStyle, currentSku, currentSize, currentQty, setCurrentSku, setCurrentSize, setCurrentQty, currentTotal, setCurrentTotal }) {
  let price = Number(currentStyle.sale_price || currentStyle.original_price);
  let currentTotalString;
  console.log(currentStyle, 'currentStyle')

  const [forceShowSize, setForceShowSize] = React.useState(false);

  const sizeMessage = forceShowSize ? 'Please select a size.' : 'size';
  if (currentTotal > 0) {
    currentTotalString = ' $' + currentTotal.toString();
  } else {
    currentTotalString = '';
  }

  const handleClick = (sku_id) => {
    setCurrentSku(sku_id);
    setForceShowSize(false);
    setCurrentSize(currentStyle.skus[sku_id].size);
  };

  const handleQtyClick = (num) => {
    setCurrentQty(num);
    setCurrentTotal(num*price);
  };

  const AddToCartClick = (e) => {
    if (currentSize === 'Select Size') {
      setForceShowSize(true);
    }
    let purchaseObj = { currentSku, currentQty };
    console.log('purchase object:', purchaseObj);
  }

  const renderAddToCart = () => {
    // if (currr)
  }

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
                (sku_id, index) =>
                  <DropdownContentA key={sku_id} onClick={()=>{ handleClick(sku_id) }}> {currentStyle.skus[sku_id].size}</DropdownContentA>
              )}
            </DropdownContent>
          </Dropdown>
        </SizeDiv>
        <QuantityDiv>
          <Quantity sku={currentStyle.skus[currentSku]} handleQtyClick={handleQtyClick} currentQty={currentQty} />
        </QuantityDiv>
      </SizeQuantityContainer>
      <div>
        <AddToCartButton onClick={AddToCartClick}>ADD TO CART{currentTotalString}</AddToCartButton>
      </div>
    </>
  );
}

export default AddToCart;

/*

"ADD TO CART" will be used to place the style, size and quantity of the
product selected into the user’s cart.

If the default ‘Select Size’ is currently selected: Clicking this button should
open the size dropdown, and a message should appear above the dropdown stating
“Please select size”.

If there is no stock: This button should be hidden

If both a valid size and valid quantity are selected: Clicking this button will
add the product to the user’s cart.
*/