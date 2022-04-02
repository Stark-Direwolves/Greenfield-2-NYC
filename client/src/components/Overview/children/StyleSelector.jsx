import React from 'react';
import StyleSelectorEntry from './StyleSelectorEntry.jsx';

/*
    styleIndex={styleIndex}
    setStyleIndex={setStyleIndex}
    styles={productInfo.idStyles.results}
*/

function StyleSelector({ styleIndex, setStyleIndex, styles }) {
  console.log('this is styles', styles);
  return (
      <ul className="component-separator">
        {styles[styleIndex].name}
        {styles.map((style, index) => (
          <StyleSelectorEntry
            style={style}
            key={index}
            index={index}
            setStyleIndex={setStyleIndex}
          />
        ))}
      </ul>
  );
}

export default StyleSelector;
