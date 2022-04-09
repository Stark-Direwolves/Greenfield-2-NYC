import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QAnswer from './QAnswer';
import Answer from './Answer';

const QuestionContainer = styled.div`
outline: solid;
`;

function Question({ question, productName }) {
  const [answers, setAnswers] = useState([]);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [displayAn, setDisplayAn] = useState(2);
  const [isHelpfulQ, setIsHelpfulQ] = useState(false);
  const [reported, setReported] = useState(false);

  // /qa/questions/:question_id/answers
  useEffect(() => {
    if (Object.keys(question.answers).length > 0) {
      axios.get(`/qa/questions/${question.question_id}/answers`, { params: { product_id: question.productId } })
        .then((result) => {
          setAnswers(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const updateHelpQ = () => {
    !isHelpfulQ
      ? (
        setIsHelpfulQ(true), setQHelpful(qHelpful + 1)
      )
      : null;
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReport = () => {
    !reported ? (setReported(true))
      : null;
    axios.put(`/qa/questions/${question.question_id}/report`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firstTwo = answers.slice(0, displayAn);

  return (
    <QuestionContainer>
      <b>Q: {question.question_body} </b>
      Helpful?
      {!isHelpfulQ ? (<span onClick={updateHelpQ}>Yes</span>) : (<span>ty</span>)}
      ({qHelpful}
      )
      {!reported
        ? (
          <span onClick={updateReport}>Report</span>
        ) : (
          <span>Reported!</span>
        )}
      <Answer
        questionId={question.question_id}
        productName={productName}
        questionBody={question.question_body}
      />
      <br />
      <b>A: </b>
      <div>
        {firstTwo.map((answer) => (
          <QAnswer key={answer.answer_id} answer={answer} />))}

      </div>
      <div>
        {(answers.length > displayAn)
          ? (
            <div
              onClick={() => setDisplayAn((prevCount) => prevCount + 1000)}
            >
              LOAD MORE ANSWERS
            </div>
          )
          : (null)}
      </div>
    </QuestionContainer>
  );
}

export default Question;
