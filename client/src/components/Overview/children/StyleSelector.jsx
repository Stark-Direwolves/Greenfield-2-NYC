import React from 'react';
import StyleSelectorEntry from './StyleSelectorEntry.jsx';

/*
    styleIndex={styleIndex}
    setStyleIndex={setStyleIndex}
    styles={productInfo.idStyles.results}
*/

function StyleSelector({ currentStyle, setCurrentStyle, styles }) {
  return (
    <div className="component-separator">
      {currentStyle.name}
      <ul>
        {styles.map((style, index) => (
          <StyleSelectorEntry
            style={style}
            key={index}
            index={index}
            setCurrentStyle={setCurrentStyle}
          />
        ))}
      </ul>
    </div>

  );
}

export default StyleSelector;
