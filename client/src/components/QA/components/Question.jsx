import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QAnswer from './QAnswer';
import Answer from './Answer';

const QuestionContainer = styled.div`
outline: solid;
`

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [displayAn, setDisplayAn] = useState(2);
  const [isHelpfulQ, setIsHelpfulQ] = useState(false);
  const [reported, setReported] = useState(false);

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
    !isHelpfulQ ? (setReported(true))
      : null;
    axios.put(`/qa/questions/${question.question_id}/report`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const firstTwo = answerId.slice(0, displayAn);

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
      <Answer questionId={question.question_id} />
      <br />
      <b>A: </b>
      <div>
        {firstTwo.map((id) => (
          <QAnswer key={id} answer={answers[id]} />
        ))}
      </div>
      <div>
        {(answerId.length > displayAn)
          ? (
            <div
              onClick={() => setDisplayAn((prevCount) => prevCount + 100)}
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
