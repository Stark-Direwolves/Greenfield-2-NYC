import React from 'react';
import { StyledUl, StyledLi, StyledImg, StyleName, Checkmark, Style } from './styles/StyleSelector.styled';

function StyleSelector({ currentStyle, setCurrentStyle, styles }) {
  return (
    <div>
      <StyleName>{currentStyle.name}</StyleName>
      <StyledUl>
        {styles.map((style, index) => (
          <StyleSelectorEntry
            style={style}
            key={index}
            index={index}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
          />
        ))}
      </StyledUl>
    </div>

  );
}

function StyleSelectorEntry({ currentStyle, style, setCurrentStyle, index }) {
  const selected = style.style_id === currentStyle.style_id;
  return (
    <StyledLi>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', right: '50%' }}>
          <Checkmark selected={selected}>✓</Checkmark>
        </div>
        <Style selected={selected} onClick={() => { setCurrentStyle(style); }}>
          <StyledImg src={style.photos[0].thumbnail_url} alt={style.name} />
        </Style>
      </div>

    </StyledLi>
  );
}

export default StyleSelector;
