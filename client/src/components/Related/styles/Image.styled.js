import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
  box-shadow: 2px 2px 5px gray;
  z-index: 2;
`;

const StyledImage = styled.img`
  cursor: pointer;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export { StyledImage, ImageContainer };
