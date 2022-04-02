/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

function StyleSelectorEntry({ style, setStyleIndex, index }) {
  return (
    <li className="style-selector-entry" onClick={() => { setStyleIndex(index); }}>
      <img className="style-selector-thumb" src={style.photos[0].thumbnail_url} alt={style.name} />
    </li>
  );
}

export default StyleSelectorEntry;
