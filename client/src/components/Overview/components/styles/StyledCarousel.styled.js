import styled from "styled-components";

const StyledImg = styled.img`
  max-height:100%;
  max-width:100%;
  object-fit: cover;
`;

const LeftDiv = styled.button`
  visibility: ${props => props.show.left || 'visible'};
  border: none;
  display: flex;
  position: absolute;
  margin: 5px 0px;
  top: 50%;
  left: 0;
  font-size: 30px;
  width: 30px;
  height: 30px;
  background-color: #00000033;
`;

const RightDiv = styled.button`
  visibility: ${props => props.show.right || 'visible'};
  border: none;
  display: flex;
  position: absolute;
  margin: 5px 0px;
  top: 50%;
  right: 0;
  font-size: 30px;
  width: 30px;
  height: 30px;
  background-color: #00000033;
`;

export { StyledImg, LeftDiv, RightDiv };

// height: auto;
// width: 100%;