import styled, { css } from 'styled-components';

const StyledImageSelector = styled.div`
  grid-row-start: row2-start;
  grid-row-end: row2-end;
`;

const CurvedDiv = styled.div`
  margin: 2.5px 2.5px 2.5px 2.5px;
  border-radius: 8%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 75px;
  height: 75px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-height:100%;
  max-width:100%;
  object-fit: cover;
`;

const ThumbnailContainer = styled.div`
  &:hover {
    border-bottom: 2px solid gray;
    padding-bottom: 1px;
  }
  ${(props) => props.isActive && css`
    border-bottom: 2px solid black;
    padding-bottom: 1px;
  `}
`;

const ImageSelectorContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { StyledImageSelector, CurvedDiv, StyledImg, ThumbnailContainer, ImageSelectorContainer };