import styled from "styled-components";

const StyledImageGallery = styled.div`
  display: grid;
  background-color: ${props => props.theme.colors[0]};
  padding: 20px;
  height: 835px;
  grid-column-start: col1-start;
  grid-column-end: col1-end;
  grid-template-rows: [row1-start] 80% [row1-end row2-start] 20% [row2-end];
`;

const StyledImageSelector = styled.div`
  grid-row-start: row2-start;
  grid-row-end: row2-end;
`;

const StyledImagePreview = styled.div`
  grid-row-start: row1-start;
  grid-row-end: row1-end;
  height: auto;
  display: flex;
  margin: auto;
`;

const CurvedDiv = styled.div`
  margin: 5px 5px 5px 0;
  border-radius: 8%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 75px;
  height: 75px;
  background: #ccc;
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-height:100%;
  max-width:100%;
  object-fit: cover;
`;

const StyledLi = styled.li`
  display: inline-block;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export { StyledImageGallery, StyledImageSelector, StyledImagePreview, CurvedDiv, StyledImg, StyledLi, StyledUl };