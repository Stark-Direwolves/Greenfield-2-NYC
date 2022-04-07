import React from 'react';
import { StyledUl, StyledLi, StyledImg } from './styles/StyleSelector.styled.js';

function StyleSelector({ currentStyle, setCurrentStyle, styles }) {
  return (
    <div>
      <h3>{currentStyle.name}</h3>
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
  const current = style.style_id === currentStyle.style_id;

  return (
    <StyledLi>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', right: '50%' }}>
          <div className={`checkmark ${current ? "cm-visible" : "cm-hidden"}`}>✓</div>
        </div>

        <div className={`circleBase ${current ? "selected" : "unselected"}`} onClick={() => { setCurrentStyle(style); }}>
          <StyledImg src={style.photos[0].thumbnail_url} alt={style.name} />
        </div>
      </div>

    </StyledLi>
  );
}

export default StyleSelector;
