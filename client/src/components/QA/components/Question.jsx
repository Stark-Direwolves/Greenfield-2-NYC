import React, { useState, useEffect } from 'react';
import QAnswer from './QAnswer.jsx';
import Answer from './Answer.jsx';
import axios from 'axios';

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [displayAn, setDisplayAn] = useState(2);
  const [isHelpfulQ, setIsHelpfulQ] = useState(false);

  const updateHelpQ = () => {
    !isHelpfulQ ? (setIsHelpfulQ(true), setQHelpful(qHelpful + 1))
      : null;
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firstTwo = answerId.slice(0, displayAn);

  return (
    <div>
      <b>Q: {question.question_body} </b>
      Helpful?
      {!isHelpfulQ ? (<span onClick={updateHelpQ}>Yes</span>) : (<span>ty</span>)}
      ({qHelpful})
      <Answer questionId={question.question_id}/>
      <br />
      <b>A: </b>
      <div>
        {firstTwo.map((id) => (
          <QAnswer key={id} answer={answers[id]} />
        ))}
      </div>
      <div>
        {(answerId.length > displayAn)
          ? (<div onClick={() => setDisplayAn((prevCount) => prevCount + 2)}> LOAD MORE ANSWERS </div>)
          : (null)}
      </div>
    </div>
  );
}

export default Question;
