import React from 'react';

function ProductInformation({ productInfo, style }) {
  let { category, name, default_price, description, slogan } = productInfo.id;

  return (
    <div className="component-separator">
      <div>!!Star Rating</div>
      <div>!!Number of Reviews</div>
      <div>!!Read all # reviews</div>
      <div>{category}</div>
      <div>{name}</div>
      <div>
        { default_price !== style.original_price ?
          (
            <>
              <div style={{ textDecoration: default_price !== style.original_price ? 'line-through' : '' }}>
                {default_price}
              </div>
              <div>
                {style.original_price}
              </div>
            </>
          )
          : <div>{style.original_price}</div>
        }
      </div>
      <div>{slogan}</div>
      <div>{description}</div>
      <div>Share on Social Media</div>
    </div>
  );
}

export default ProductInformation;