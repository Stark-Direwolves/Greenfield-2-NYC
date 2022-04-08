import styled from "styled-components";

const StyledDiv = styled.div`
  font: "Roboto";
  font-family: sans-serif;
`;

const StyledA = styled.a`
  font-size: small;
  text-decoration: none;
  text-transform: lowercase;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

const Category = styled.div`
  margin-top: 10px;
  margin-bottom: -5px;
  font: "Roboto";
  font-family: sans-serif;
  font-size: ${props => props.theme.fontSizes.smaller};
  font-weight: bold;
  text-transform: uppercase;
`;

const Name = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-top: 0;
  margin-bottom: 0;
`;

const Price = styled.h3`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-top: 0.2em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;

const BadPrice = styled(Price)`
  text-shadow: 0 0 3px black;
  color: transparent;
  margin-right: 10px;
  text-decoration: line-through;
`;

const SalePrice = styled(Price)`
  color: ${props => props.theme.colors[7]};
  margin-right: 10px;
`;

const Features = styled.div`
  width: 80%;
  margin: 10px auto 10px auto;
`;

const Feature = styled(StyledDiv)`
  text-transform: lowercase;
`

export { StyledDiv, Category, Name, Price, BadPrice, Features, Feature, StyledA, SalePrice };