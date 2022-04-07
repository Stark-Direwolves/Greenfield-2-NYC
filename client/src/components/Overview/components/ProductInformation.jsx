import React from 'react';
import Ratings from '../../RR/RatingHelpers';


function ProductInformation({ currentProduct, currentStyle, meta }) {
  let { category, name, description, slogan } = currentProduct;
  return (
    <div>
      <div>{Ratings.findAverageRating(meta.ratings)}</div>
      <div>
        <span
          className="stars"
          style={{
            '--rating': Ratings.findAverageRating(meta.ratings),
          }}
        />
      </div>
      <div><a href="#reviews">Read all {Ratings.findReviewCount(meta.ratings)} reviews</a></div>
      <div>{category}</div>
      <h2>{name}</h2>
      <div>
        { currentStyle.sale_price ?
          (
            <>
              <h3 style={{ textDecoration: currentStyle.sale_price ? 'line-through' : '' }}>
                {currentStyle.original_price}
              </h3>
              <h3>
                {currentStyle.sale_price}
              </h3>
            </>
          )
          : <h3>{currentStyle.original_price}</h3>
        }
      </div>
      <div>{slogan}</div>
      <div>{description}</div>
      <br />
      { currentProduct.features.map((feature, index) => { return (
        <div key={index}>
          <b>{feature.feature}</b>: {feature.value}
        </div>
        )
      }) }
      <br />
      <div>Share on Social Media</div>
    </div>
  );
}

export default ProductInformation;