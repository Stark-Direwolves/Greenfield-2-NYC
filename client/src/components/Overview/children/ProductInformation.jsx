import React from 'react';

function ProductInformation({ productInfo, style }) {
  console.log(productInfo)
  let { category, name, default_price, description, slogan } = productInfo.id;
  console.log(style);



  return (
    <div className="component-separator">
      <div>!!Star Rating</div>
      <div>!!Number of Reviews</div>
      <div>!!Read all # reviews</div>
      <div>category: {category}</div>
      <div>name: {name}</div>
      <div>
        price and style price:
        <div style={{ textDecoration: default_price !== style.original_price ? 'line-through' : '' }}>
          {default_price}
        </div>
        {style.original_price}
      </div>
      <div>slogan: {slogan}</div>
      <div>description: {description}</div>
      <div>Share on Social Media</div>
    </div>
  );
  /*
    deal with price sales!
  */
}

export default ProductInformation;