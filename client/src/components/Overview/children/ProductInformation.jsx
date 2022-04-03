import React from 'react';

function ProductInformation({ currentProduct, currentStyle }) {
  let { category, name, default_price, description, slogan } = currentProduct;

  return (
    <div className="component-separator">
      <div>!!Star Rating</div>
      <div>!!Number of Reviews</div>
      <div>!!Read all # reviews</div>
      <div>{category}</div>
      <div>{name}</div>
      <div>
        { default_price !== currentStyle.original_price ?
          (
            <>
              <div style={{ textDecoration: default_price !== currentStyle.original_price ? 'line-through' : '' }}>
                {default_price}
              </div>
              <div>
                {currentStyle.original_price}
              </div>
            </>
          )
          : <div>{currentStyle.original_price}</div>
        }
      </div>
      <div>{slogan}</div>
      <div>{description}</div>
      <div>Share on Social Media</div>
    </div>
  );
}

export default ProductInformation;