import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from './components/styles/Container.style.jsx';
import { Header } from './components/styles/Header.style.jsx';
import Answer from './components/Answer.jsx';
import Ask from './components/Ask.jsx';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
// import Questions from '../../seedData/qaSeed.js';

function QA() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: '65631' } })
      .then((result) => {
        setQuestions(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var array = [];
  if (search.length > 2) {
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].question_body.toLowerCase().includes(search.toLowerCase())) {
        array.push(questions[i]);
      }
    }
    // setQuestions(array);
    console.log(array);
    // setQuestions(array);
  }

  return (
    <Container>
      <Header> Questions & Answers</Header>
      <Search search={search} setSearch={setSearch} />
      <List questions={questions} />
      <Answer />
      <Ask />
    </Container>
  );
}

export default QA;
