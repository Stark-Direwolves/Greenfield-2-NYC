import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
`;

const StyledImg = styled.img`
  position: relative;
  width: 250%;
`;

const Viewport = styled.div`
  overflow: hidden;
  width: ${() => (window.innerWidth - 100).toString() + 'px' };
  height: ${() => (window.innerHeight - 120).toString() + 'px' };
  margin: auto;
`;

export { StyledDiv, StyledImg, Viewport};


//  text-align: center;
// align-items: center;
// justify-content: center;