import styled, { css } from 'styled-components';

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLi = styled.li`
  display: inline-block;
  flex: 1 0 21%;
`;

const StyledImg = styled.img`
  max-height:100%;
  max-width:100%;
  object-fit: cover;
  height: auto;
  width: 100%;
`;

const StyleName = styled.h3`
  margin-bottom: 0.5em;
  font-family: sans-serif;
  text-transform: lowercase;
`;

const Checkmark = styled.div`
  position: absolute;
  right:-33px; top: -5px;
  width: 17px;
  height: 17px;
  text-align: center;
  border: 1px solid #aaa;
  background: #f8f8f8;
  border-radius: 50%;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.3);
  z-index: 1;
  visibility: hidden;
  ${(props) => props.selected && css`
    visibility: visible;
  `}
`;

const Style = styled.div`
  margin: 5px auto 5px auto;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  width: 65px;
  height: 65px;
  background: #ccc;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.7s;
  box-shadow: 4px 3px 10px grey;

  &:hover {
    transition: transform 0.3s, box-shadow 0.7s;
    transform: scale(1.1, 1.1);
    box-shadow: 1px 2px 11px 0px black;
  }

  ${(props) => props.selected && css`
    box-shadow: 1px 2px 11px 0px black;
    transform: scale(1.1, 1.1);
  `}
`;

export {
  StyledUl, StyledLi, StyledImg, StyleName, Checkmark, Style,
};
