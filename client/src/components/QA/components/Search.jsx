import React, { useState } from 'react';

function Search({ setSearch }) {
  const onChange = (event) => {
    const newValue = event.target.value;

    setSearch(newValue);
  };

  return (
    <form>
      <input placeholder="search..." onChange={onChange} />
    </form>
  );
}

export default Search;
