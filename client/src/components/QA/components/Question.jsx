import React, { useState } from 'react';
import QAnswer from './QAnswer.jsx';
import axios from 'axios';

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [displayAn, setDisplayAn] = useState(2);
  const [isHelpfulQ, setIsHelpfulQ] = useState(false);

  // useEffect(() => {
  //   axios.put(`/qa/questions`,)
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [qHelpful]);

  const updateHelpQ = () => {
    !isHelpfulQ ? (setIsHelpfulQ(true), setQHelpful(qHelpful + 1))
      : null; //block from incrementing
  };

  const firstTwo = answerId.slice(0, displayAn);

  if (answerId.length > displayAn) {
    return (
      <div>
        <b>Q: {question.question_body} </b>
        Helpful?
        <span onClick={updateHelpQ}>Yes</span>
        ({qHelpful})
        <span>Add Answer</span>
        <br />
        <b>A: </b>
        <div>
          {firstTwo.map((id) => (
            <QAnswer key={id} answer={answers[id]} />
          ))}
        </div>
        <div>
          <div onClick={() => setDisplayAn((prevCount) => prevCount + 2)}> LOAD MORE ANSWERS </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <b>Q: {question.question_body} </b>
      Helpful?
      <span onClick={() => { updateHelpQ }}>Yes</span>
      ({qHelpful})
      <br />
      {}
      <b>A: </b>
      <div>
        {firstTwo.map((id) => (
          <QAnswer key={id} answer={answers[id]} />
        ))}
      </div>
    </div>
  );
}

export default Question;
