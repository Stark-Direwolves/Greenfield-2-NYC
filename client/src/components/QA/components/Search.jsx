import React, { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="search..." onChange={onChange} />
      {/* <input placeholder="search..." /> */}
    </div>
  );
}

export default Search;
