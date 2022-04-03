import React from 'react';
import StyleSelectorEntry from './StyleSelectorEntry.jsx';

/*
    styleIndex={styleIndex}
    setStyleIndex={setStyleIndex}
    styles={productInfo.idStyles.results}
*/

function StyleSelector({ currentStyle, setCurrentStyle, styles }) {
  return (
      <ul className="component-separator">
        {currentStyle.name}
        {styles.map((style, index) => (
          <StyleSelectorEntry
            style={style}
            key={index}
            index={index}
            setCurrentStyle={setCurrentStyle}
          />
        ))}
      </ul>
  );
}

export default StyleSelector;
