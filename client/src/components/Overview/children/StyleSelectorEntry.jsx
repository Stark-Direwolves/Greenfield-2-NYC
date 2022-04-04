/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

function StyleSelectorEntry({ style, setCurrentStyle, index }) {
  return (
    <li className="style-selector-entry" onClick={() => { setCurrentStyle(style); }}>
      <img className="style-selector-thumb" src={style.photos[0].thumbnail_url} alt={style.name} />
    </li>
  );
}

export default StyleSelectorEntry;
