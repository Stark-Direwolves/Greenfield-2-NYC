import React from 'react';
import { DropBtn, DropdownContent, DropdownSmall, DropdownContentA } from './styles/AddToCart.styled.js'

function Quantity({ sku, currentQty, handleQtyClick }) {
  const qty = (num) => <DropdownContentA key={num} onClick={() => {handleQtyClick(num)}}>{num}</DropdownContentA>;
  let qtyArray = [];
  if (sku) {
    if (sku.quantity > 0) {
      let cur = 1;
      while (cur <= sku.quantity && cur <= 15) {
        qtyArray.push(qty(cur));
        cur += 1;
      }
    }
  }

  return (
    <>
      quantity
      <br />
      <DropdownSmall>
        <DropBtn>{currentQty}</DropBtn>
        <DropdownContent>
          {qtyArray}
        </DropdownContent>
      </DropdownSmall>
    </>
  );
}

export default Quantity;