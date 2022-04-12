import React from 'react';
import { StyledDiv, StyledImg, Viewport } from './styles/ExpandedZoom.styled';

function ExpandedZoom ({ setExpandedZoom, image, expandedZoom }) {
  const [width, height] = [window.innerWidth - 100, window.innerHeight - 100];
  const [mousePos, setMousePos] = React.useState([0, 0]);
  const [imagePos, setImagePos] = React.useState([0, 0]);

  const updateMousePos = (e) => {
    let bounds = document.getElementById('viewport').getBoundingClientRect();
    let x = Math.round(e.clientX - bounds.left);
    let y = Math.round(e.clientY - bounds.top);
    setMousePos([x, y]);
  };

  // fix later -- hard stop after 3 hours. need to fix bounds! not intuitive

  React.useEffect(() => {
    let viewportBounds = document.getElementById('viewport').getBoundingClientRect();
    let imageBounds = document.getElementById('imageplz').getBoundingClientRect();
    let currentX = mousePos[0];
    let currentY = mousePos[1];
    let relatedX = ((currentX / viewportBounds.width) * imageBounds.width);
    let relatedY = ((currentY / viewportBounds.height) * imageBounds.height);
    let imagePosX, imagePosY;

    if (relatedX > (imageBounds.width - viewportBounds.width)) {
      imagePosX = (imageBounds.width - viewportBounds.width);
    } else {
      imagePosX = relatedX;
    }

    if (relatedY > (imageBounds.height - viewportBounds.height)) {
      imagePosY = (imageBounds.height - viewportBounds.height);
    } else {
      imagePosY = relatedY;
    }

    setImagePos([imagePosX, imagePosY]);
  }, [mousePos]);

  return (
    <StyledDiv onClick={()=>{ setExpandedZoom(false); }}>
      <Viewport width={width} height={height} onMouseMove={updateMousePos} id="viewport">
        <StyledImg id="imageplz" src={image.url} style={{ right: imagePos[0], bottom: imagePos[1] }} />
      </Viewport>
    </StyledDiv>
  )
}

/*
given zoomedimage width, height
given bounds x/y divided by 2


if mouse < mouseX + (boundx/2)
  boxPos = 0;
  else boxPos = mouse;

if mouseY <

if mouseY > mouseY - width, === mouseY - width
if mouseY < 0

*/

export default ExpandedZoom;