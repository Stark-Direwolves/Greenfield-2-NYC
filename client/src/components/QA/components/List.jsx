import React from 'react';
import Question from './Question.jsx';

function List({ questions }) {
  console.log("LIST", questions);
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.question_id} question={question} answers={question.answers}/>
      ))}
    </div>
  );
}

export default List;
