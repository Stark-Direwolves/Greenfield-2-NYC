import React, { useState } from 'react';
import { SContainer, Input, Form } from './styles/Search.style.jsx'

function Search({ setSearch }) {
  const onChange = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
  };

  return (
    <SContainer>
      <Form>
        <Input placeholder="Have a question? Search for answers…" onChange={onChange} />
      </Form>
    </SContainer>
  );
}

export default Search;
