import React from 'react';
import QAnswer from './QAnswer.jsx';

function Question({ question, answers }) {
  const answerId = Object.keys(answers);
  // console.log('question', question);
  // console.log('answers', answers);
  return (
    <div>
      Q: {question.question_body}
      {answerId.map((id) => (
        <QAnswer key={id} answer={answers[id]} />
      ))}
    </div>
  );
}

export default Question;
