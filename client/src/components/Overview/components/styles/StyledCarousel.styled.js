import styled, { css } from 'styled-components';

const StyledCarousel = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #E3E3DD;
`;

const StyledInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

const StyledCarouselItem = styled.div`
  display: inline-flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  color: #fff;
`;

const StyledImg = styled.img`
  height: auto;
  max-height:100%;
  max-width:100%;
  object-fit: cover;
  &:hover {
    cursor: zoom-in;
  }
`;

const StyledButton = styled.button`
  border: none;
  display: flex;
  position: absolute;
  margin: 5px 0px;
  top: 50%;
  font-size: 30px;
  width: 30px;
  height: 30px;
  background-color: #00000033;
  ${(props) => props.show && css`
    visibility: hidden;
  `}
`;

const RightButton = styled(StyledButton)`
  right: 0;
`;

const LeftButton = styled(StyledButton)`
  left: 0;
`;

export { StyledImg, LeftButton, RightButton, StyledCarousel, StyledInner, StyledCarouselItem };
