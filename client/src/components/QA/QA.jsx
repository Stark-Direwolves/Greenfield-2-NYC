import React from 'react';
import Answer from './Answer.jsx';
import Ask from './Ask.jsx';
import List from './List.jsx';
import Search from './Search.jsx';

function QA() {
  return (
    <>
      <Search />
      <List />
      <Answer />
      <Ask />
    </>
  );
}

export default QA;
