/* eslint-disable react/prop-types */
import React from 'react';
import { StyledDiv, StyledImg, Viewport } from './styles/ExpandedZoom.styled';

function ExpandedZoom({ setExpandedZoom, image }) {
  const [width, height] = [window.innerWidth - 100, window.innerHeight - 100];
  const [mousePos, setMousePos] = React.useState([0, 0]);
  const [imagePos, setImagePos] = React.useState([0, 0]);

  const updateMousePos = (e) => {
    const bounds = document.getElementById('viewport').getBoundingClientRect();
    const x = Math.round(e.clientX - bounds.left);
    const y = Math.round(e.clientY - bounds.top);
    setMousePos([x, y]);
  };

  // fix later -- hard stop after 3 hours. need to fix bounds! not intuitive

  React.useEffect(() => {
    const viewportBounds = document.getElementById('viewport').getBoundingClientRect();
    const imageBounds = document.getElementById('imageplz').getBoundingClientRect();
    const currentX = mousePos[0];
    const currentY = mousePos[1];
    const relatedX = ((currentX / viewportBounds.width) * imageBounds.width);
    const relatedY = ((currentY / viewportBounds.height) * imageBounds.height);
    let imagePosX;
    let imagePosY;

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
    <StyledDiv onClick={() => { setExpandedZoom(false); }}>
      <Viewport width={width} height={height} onMouseMove={updateMousePos} id="viewport">
        <StyledImg id="imageplz" src={image.url} style={{ right: imagePos[0], bottom: imagePos[1] }} />
      </Viewport>
    </StyledDiv>
  );
}

export default ExpandedZoom;
