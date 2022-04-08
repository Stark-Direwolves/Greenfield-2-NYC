import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
`;

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export { StyledImage, ImageContainer };
