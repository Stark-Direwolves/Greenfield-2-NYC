/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

function StyleSelectorEntry({ currentStyle, style, setCurrentStyle, index }) {
  const current = style.style_id === currentStyle.style_id;

  return (
    <li>
      <div className={`checkmark ${current ? "cm-visible" : "cm-hidden"}`}>✓</div>
      <div className={`circleBase ${current ? "selected" : "unselected"}`} onClick={() => { setCurrentStyle(style); }}>
        <img className="style-selector-thumb" src={style.photos[0].thumbnail_url} alt={style.name} />
      </div>
    </li>
  );
}

export default StyleSelectorEntry;
