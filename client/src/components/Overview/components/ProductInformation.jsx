import React from 'react';
import Ratings from '../../RR/RatingHelpers';
import { StyledDiv, Category, Name, Price, BadPrice, Features, Feature, StyledA, SalePrice } from './styles/ProductInformation.styled.js';


function ProductInformation({ currentProduct, currentStyle, meta }) {
  let { category, name, description, slogan } = currentProduct;
  const renderReviews = () => {
    if (meta) {
      if (Object.keys(meta.ratings).length > 0) {
        return (
          <>
            <StyledDiv>
              <span
                className="stars"
                style={{
                  '--rating': Ratings.findAverageRating(meta.ratings),
                }}
              />
            </StyledDiv>
            <StyledA href="#reviews">read all {Ratings.findReviewCount(meta.ratings)} reviews</StyledA>
          </>
        );
      }
    }
    return (
      <StyledDiv>no reviews</StyledDiv>
    );
  };

  return (
    <StyledDiv>
      <Category>{category} »</Category>
      <Name>{name}</Name>
      {renderReviews()}
      <StyledDiv>
        {currentStyle.sale_price ?
          (
            <>
              <BadPrice>
                ${currentStyle.original_price}
              </BadPrice>
              <SalePrice>
                ${currentStyle.sale_price}
              </SalePrice>
            </>
          )
          : <Price>${currentStyle.original_price}</Price>
        }
      </StyledDiv>
      <StyledDiv style={{ fontStyle: 'italic' }}>{slogan}</StyledDiv>
      <br />
      <StyledDiv>{description}</StyledDiv>
      <Features>
      {currentProduct.features.map((feature, index) => {
        return (
          <Feature key={index}>
            » <b>{feature.feature}</b>: {feature.value}
          </Feature>
        )
      })}
      </Features>
    </StyledDiv>
  );
}

export default ProductInformation;