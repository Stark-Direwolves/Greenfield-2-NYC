import React from 'react';
import StyleSelectorEntry from './StyleSelectorEntry.jsx';

/*
    styleIndex={styleIndex}
    setStyleIndex={setStyleIndex}
    styles={productInfo.idStyles.results}
*/

function StyleSelector({ currentStyle, setCurrentStyle, styles }) {
  console.log(currentStyle, styles);
  return (
    <div className="component-separator">
      <h3>{currentStyle.name}</h3>
      <ul>
        {styles.map((style, index) => (
          <StyleSelectorEntry
            style={style}
            key={index}
            index={index}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
          />
        ))}
      </ul>
    </div>

  );
}

export default StyleSelector;
