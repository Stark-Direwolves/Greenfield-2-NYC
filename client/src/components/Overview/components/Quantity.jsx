import React from 'react';
import { DropBtn, DropdownContent, Dropdown, DropdownContentA } from './styles/AddToCart.styled.js'

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
      Quantity:
      <br />
      <Dropdown>
        <DropBtn>{currentQty}</DropBtn>
        <DropdownContent>
          {qtyArray}
        </DropdownContent>
      </Dropdown>
    </>
  );
}

export default Quantity;