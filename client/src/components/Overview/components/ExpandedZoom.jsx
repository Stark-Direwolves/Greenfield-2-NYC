import React from 'react';
import { StyledDiv, StyledImg, Viewport } from './styles/ExpandedZoom.styled';

function ExpandedZoom ({ setExpandedZoom, image, expandedZoom }) {
  const [width, height] = [window.innerWidth - 100, window.innerHeight - 100];
  const [mousePos, setMousePos] = React.useState([0, 0]);
  const updateMousePos = (e) => {
    // setMousePos([e.clientX, e.clientY]);
    const bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    console.log(x, y);
  };

  // React.useEffect(() => {
  //   window.addEventListener('mousemove', updateMousePos);
  // }, [expandedZoom]);

  return (
    <StyledDiv onClick={()=>{ setExpandedZoom(false); }}>
      <Viewport width={width} height={height}>
        <StyledImg src={image.url} onMouseMove={updateMousePos} />
      </Viewport>
    </StyledDiv>
  )
}

export default ExpandedZoom;