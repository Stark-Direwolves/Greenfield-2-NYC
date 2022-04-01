import React, { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <form>
      <input placeholder="search..." onChange={onChange} />
    </form>
  );
}

export default Search;
