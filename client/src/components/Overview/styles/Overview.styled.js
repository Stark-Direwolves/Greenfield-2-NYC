import styled from "styled-components";

const StyledOverview = styled.div`
  display: grid;
  grid-template-columns: [col1-start] 60% [col1-end col2-start] 40% [col2-end];
  height: auto;
`;

const StyledDetails = styled.div`
  background-color: ${props => props.theme.colors[0]};
  padding: 20px;
  grid-column-start: col2-start;
  grid-column-end: col2-end;
`;

const SocialMedia = styled.div`
  text-align: center;
  font-family: san-serif;
`;

export { StyledOverview, StyledDetails, SocialMedia };
