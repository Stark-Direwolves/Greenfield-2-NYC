import React from 'react';

function ProductInformation({ currentProduct, currentStyle, reviewMeta }) {
  let { category, name, default_price, description, slogan } = currentProduct;
  console.log(reviewMeta);
  return (
    <div className="component-separator">
      <div>!!Star Rating</div>
      <div>!!Number of Reviews</div>
      <div>!!Read all # reviews</div>
      <div>{category}</div>
      <h2>{name}</h2>
      <div>
        { default_price !== currentStyle.original_price ?
          (
            <>
              <h3 style={{ textDecoration: default_price !== currentStyle.original_price ? 'line-through' : '' }}>
                {default_price}
              </h3>
              <h3>
                {currentStyle.original_price}
              </h3>
            </>
          )
          : <h3>{currentStyle.original_price}</h3>
        }
      </div>
      <div>{slogan}</div>
      <div>{description}</div>
      <div>Share on Social Media</div>
    </div>
  );
}

export default ProductInformation;