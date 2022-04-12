import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Container } from './components/styles/Container.style';
import { Header } from './components/styles/Header.style';
import Ask from './components/Ask';
import List from './components/List';
import Search from './components/Search';
// import Questions from '../../seedData/qaSeed.js';

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors[6]};
  color: white;
  margin: 20px 0 20px 0;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors[7]};
  }
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
top: -1px;
padding-bottom: 20px;
`;

const MoreContainer = styled.div`
order: 1;
margin-right: 20px ;
`;

const AddQContainer = styled.div`
order: 2;
`;

function QA({ productId, productName }) {
  const [questions, setQuestions] = useState([]);
  const [ogQues, setOgQues] = useState([]);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(4);

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
    if (search.length >= 3) {
      questions.forEach((question) => {
        if (question.question_body.toLowerCase().includes(search.toLowerCase())) {
          array.push(question);
        }
      });
      setQuestions(array);
    }
    if (search.length < 2) {
      setQuestions(ogQues);
    }
  }, [search]);

  return (
    <Container styles={(questions.length > 0) ? 'height: 60vh;' : 'height: 100%;'}>
      <Header> Questions & Answers</Header>
      {questions.length > 0 ? <Search search={search} setSearch={setSearch} /> : null}
      <List questions={questions} productName={productName} display={display} setDisplay={setDisplay} />
      <ButtonContainer>
        <MoreContainer>
          {(questions.length > display)
            ? (
              <Button
                type="submit"
                onClick={() => setDisplay((prevCount) => prevCount + 1000)}
              >
                MORE ANSWERED QUESTIONS
              </Button>
            )
            : null}
        </MoreContainer>
        <AddQContainer>
          <Ask productId={productId} productName={productName} />
        </AddQContainer>
      </ButtonContainer>
    </Container>
  );
}

export default QA;
