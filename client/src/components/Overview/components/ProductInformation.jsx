import React from 'react';
import Ratings from '../../RR/RatingHelpers';

// client/src/components/RR/RatingHelpers.js


function ProductInformation({ currentProduct, currentStyle, reviewMeta }) {
  let { category, name, default_price, description, slogan } = currentProduct;
  return (
    <div>
      <div>{Ratings.findAverageRating(reviewMeta.ratings)}</div>
      <div>
        <span
          className="stars"
          style={{
            '--rating': Ratings.findAverageRating(reviewMeta.ratings),
          }}
        />
      </div>
      <div><a href="#reviews">Read all {Ratings.findReviewCount(reviewMeta.ratings)} reviews</a></div>
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