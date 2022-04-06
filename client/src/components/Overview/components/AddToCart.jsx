import React from 'react';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx'

function AddToCart({ currentStyle, sku, setSku, quantity, setQuantity }) {
  // handle state for Size, SKU, and Quantity
  // change size = qt 1

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value !== 'Select Size') {
      setSku(e.target.value);
      setQuantity('-');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // if (sku === 'Select Size') {

    // }
    let purchaseObj = { sku, quantity };
    console.log('purchase object:', purchaseObj);
  };

  return (
    <form className="component-separator">
      <label htmlFor="sizes">
        Sizes
        <select name="sizes" id="sizes" onChange={handleChange}>
          <option value="Select Size">Select Size</option>
          {Object.keys(currentStyle.skus).map(
            (sku_id, index) =>
              <Size sku={currentStyle.skus[sku_id]} key={sku_id} setSku={setSku} sku_id={sku_id} />,
          )}
        </select>
      </label>
      <Quantity sku={currentStyle.skus[sku]} setQuantity={setQuantity} key={sku} />
      <input type="submit" value="Add To Cart" onClick={handleClick} />
    </form>
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