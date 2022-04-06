import React, { useState } from 'react';
import Question from './Question.jsx';

function List({ questions }) {
  const [display, setDisplay] = useState(4);

  const firstFour = questions.slice(0, display);

  return (
    <div>
      <div>
        {firstFour.map((question) => (
          <Question key={question.question_id} question={question} answers={question.answers} />
        ))}
      </div>
      <div>
        {(questions.length > display) ? (<button onClick={() => setDisplay((prevCount) => prevCount + 2)}> More Answered Questions </button>) : null}
      </div>
    </div>

  );
}

export default List;
