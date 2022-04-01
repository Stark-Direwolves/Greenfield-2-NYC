import React from 'react';
import QAnswer from './QAnswer.jsx';

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  return (
    <div>
      {question.question_body}
      {answerId.map((answer) => (
        <QAnswer answer={answers[answer].body} />
      ))}
    </div>
  );
}

export default Question;
