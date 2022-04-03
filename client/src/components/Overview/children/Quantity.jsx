import React from 'react';

function Quantity({ sku, setQuantity }) {
  const qty = (num) => <option value={num} key={num}>{num}</option>;
  let qtyArray = [qty('-')];
  if (sku) {
    if (sku.quantity > 0) {
      let cur = 1;
      while (cur <= sku.quantity && cur <= 15) {
        qtyArray.push(qty(cur));
        cur += 1;
      }
    }
  }


  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <label htmlFor="quantity">
      <select name="quantity" id="quantity" onChange={handleChange}>
        {qtyArray}
      </select>
    </label>
  );
}

export default Quantity;