import React, { useState } from 'react';
import { Container } from './components/styles/Container.style.jsx';
import Answer from './components/Answer.jsx';
import Ask from './components/Ask.jsx';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

function QA() {
  const [state, setState] = useState({list: []});
  const list = state.list;

  return (
    <Container>
      <Search />
      <List />
      <Answer />
      <Ask />
    </Container>
  );
}

export default QA;
