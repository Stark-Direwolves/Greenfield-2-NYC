import React from 'react';
import Ratings from '../../RR/RatingHelpers';
import { StyledDiv } from './styles/ProductInformation.styled.js';


function ProductInformation({ currentProduct, currentStyle, meta }) {
  let { category, name, description, slogan } = currentProduct;
  return (
    <StyledDiv>
      <StyledDiv>{Ratings.findAverageRating(meta.ratings)}</StyledDiv>
      <StyledDiv>
        <span
          className="stars"
          style={{
            '--rating': Ratings.findAverageRating(meta.ratings),
          }}
        />
      </StyledDiv>
      <StyledDiv><a href="#reviews">Read all {Ratings.findReviewCount(meta.ratings)} reviews</a></StyledDiv>
      <StyledDiv>{category}</StyledDiv>
      <h2>{name}</h2>
      <StyledDiv>
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
      </StyledDiv>
      <StyledDiv>{slogan}</StyledDiv>
      <StyledDiv>{description}</StyledDiv>
      <br />
      { currentProduct.features.map((feature, index) => { return (
        <StyledDiv key={index}>
          <b>{feature.feature}</b>: {feature.value}
        </StyledDiv>
        )
      }) }
      <br />
      <StyledDiv>Share on Social Media</StyledDiv>
    </StyledDiv>
  );
}

export default ProductInformation;