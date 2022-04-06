import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`

const StyledLi = styled.li`
  display: inline-block;
  flex: 1 0 21%;
`

const StyledImg = styled.img`
  max-height:100%;
  max-width:100%;
  object-fit: cover;
  height: auto;
  width: 100%;
`;

export { StyledUl, StyledLi, StyledImg };