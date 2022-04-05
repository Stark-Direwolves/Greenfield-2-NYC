import React, { useState } from 'react';
import Question from './Question.jsx';

function List({ questions }) {
  const [display, setDisplay] = useState(4);

  const firstFour = questions.slice(0, display);
  if (questions.length >= display) {
    return (
      <div>
        <div>
          {firstFour.map((question) => (
            <Question key={question.question_id} question={question} answers={question.answers} />
          ))}
        </div>
        <div>
          <button onClick={() => setDisplay((prevCount) => prevCount + 2)}> More Answered Questions </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {firstFour.map((question) => (
        <Question key={question.question_id} question={question} answers={question.answers} />
      ))}
    </div>
  )
}

export default List;
