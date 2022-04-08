import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from './components/styles/Container.style';
import { Header } from './components/styles/Header.style';
import Ask from './components/Ask';
import List from './components/List';
import Search from './components/Search';
// import Questions from '../../seedData/qaSeed.js';

function QA({ productId, productName }) {
  const [questions, setQuestions] = useState([]);
  const [ogQues, setOgQues] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: productId } })
      .then((result) => {
        setQuestions(result.data.results);
        setOgQues(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const array = [];
    if (search.length > 2) {
      for (let i = 0; i < questions.length; i + 1) {
        if (questions[i].question_body.toLowerCase().includes(search.toLowerCase())) {
          array.push(questions[i]);
          setQuestions(array);
        }
      }
    }
    if (search.length < 3) {
      setQuestions(ogQues);
    }
  }, [search]);

  return (
    <Container>
      <Header> Questions & Answers</Header>
      <Search search={search} setSearch={setSearch} />
      <List questions={questions} productName={productName} />
      <Ask productId={productId} productName={productName} />
    </Container>
  );
}

export default QA;
