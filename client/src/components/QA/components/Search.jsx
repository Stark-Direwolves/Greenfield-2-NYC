import React, { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <input placeholder="search..." onChange={onChange} />
      <button type="submit" onClick={onClick}>Search!</button>
    </form>
  );
}

export default Search;
