import React from 'react';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx'

function AddToCart({ style }) {
  // handle state for Size, SKU, and Quantity
  // change size = qt 1
  const [ sku, setSku ] = React.useState('Select Size');
  const [ quantity, setQuantity ] = React.useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value !== 'Select Size') {
      setSku(e.target.value);
    }
  };

  const quantityConditional = () => {
    if (sku !== 'Select Size') {
      return <Quantity sku={style.skus[sku]} setQuantity={setQuantity}/>
    }
    return;
  };

  return (
    <form className="component-separator">
      <label htmlFor="sizes">
        Sizes
        <select name="sizes" id="sizes" onChange={handleChange}>
          <option value="Select Size">Select Size</option>
          {Object.keys(style.skus).map(
            (sku_id, index) =>
              <Size sku={style.skus[sku_id]} key={sku_id} setSku={setSku} sku_id={sku_id} />,
          )}
        </select>
      </label>
      {quantityConditional()}
      <input type="submit" value="Add To Cart" onClick={(e) => { e.preventDefault(); }}/>
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