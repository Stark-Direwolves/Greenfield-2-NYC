import React, { useState } from 'react';
import QAnswer from './QAnswer.jsx';

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness)
  console.log('question', question);
  // console.log('answers', answers);
  return (
    <div>
      Q: {question.question_body}
      Helpful?
      <span onClick={() => setQHelpful(qHelpful + 1)}>Yes</span>
      ({qHelpful})
      <br />
      A: {answerId.map((id) => (
        <QAnswer key={id} answer={answers[id]} />
      ))}
    </div>
  );
}

export default Question;
