import React, { useState } from 'react';
import { Container } from './components/styles/Container.style.jsx';
import Answer from './components/Answer.jsx';
import Ask from './components/Ask.jsx';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Questions from '../../seedData/qaSeed.js';

function QA() {
  const questions = Questions.list.results;
  // const [list, setList] = useList(Questions);
  // const [searched, setSearched] = useSearched('');
  console.log(questions);
  return (
    <Container>
      <Search />
      <List questions={questions} />
      <Answer />
      <Ask />
    </Container>
  );
}

export default QA;
