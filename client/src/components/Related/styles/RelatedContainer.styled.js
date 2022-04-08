import styled from 'styled-components';

const RelatedContainer = styled.div`
  font: "Roboto";
  font-family: sans-serif;
  position: relative;
  background-color:${(props) => props.theme.colors[0]};
  padding: 20px;
  overflow-x: hidden;
`;

const OutfitContainer = styled.div`
  font: "Roboto";
  font-family: sans-serif;
  position: relative;
  background-color: ${(props) => props.theme.colors[0]};
  padding: 20px;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 375px;
  margin: 0 auto;
  gap: 20px;
  transition: transform 0.5s;
`;

export { RelatedContainer, OutfitContainer, CarouselContainer };
