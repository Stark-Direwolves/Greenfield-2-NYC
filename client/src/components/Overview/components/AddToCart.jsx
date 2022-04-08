import React from 'react';
import Quantity from './Quantity.jsx'
import { DropBtn, DropdownContent, Dropdown, DropdownContentA, AddToCartButton } from './styles/AddToCart.styled.js'

function AddToCart({ currentStyle, currentSku, currentSize, currentQty, setCurrentSku, setCurrentSize, setCurrentQty, currentTotal, setCurrentTotal }) {
  let price = Number(currentStyle.sale_price || currentStyle.original_price);

  const handleClick = (sku_id) => {
    setCurrentSku(sku_id);
    setCurrentSize(currentStyle.skus[sku_id].size);
  };

  const handleQtyClick = (num) => {
    setCurrentQty(num);
    setCurrentTotal(num*price);
  }

  const AddToCartClick = (e) => {
    let purchaseObj = { currentSku, currentQty };
    console.log('purchase object:', purchaseObj);
  }

  return (
    <>
      Size:
      <br />
      <Dropdown>
        <DropBtn>{currentSize}</DropBtn>
        <DropdownContent>
          {Object.keys(currentStyle.skus).map(
            (sku_id, index) =>
              <DropdownContentA key={sku_id} onClick={()=>{ handleClick(sku_id) }}> {currentStyle.skus[sku_id].size}</DropdownContentA>
          )}
        </DropdownContent>
      </Dropdown>
      <br />
      <Quantity sku={currentStyle.skus[currentSku]} handleQtyClick={handleQtyClick} currentQty={currentQty} />
      <div>
        <AddToCartButton onClick={AddToCartClick}>Add To Cart ${currentTotal}</AddToCartButton>
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