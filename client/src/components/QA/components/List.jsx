import React, { useState } from 'react';
import Question from './Question';

function List({ questions, productName }) {
  const [display, setDisplay] = useState(4);

  const firstFour = questions.slice(0, display);

  return (
    <div>
      <div>
        {firstFour.map((question) => (
          <Question
            key={question.question_id}
            question={question}
            answers={question.answers}
            productName={productName}
          />
        ))}
      </div>
      <div>
        {(questions.length > display)
          ? (
            <button
              type="submit"
              onClick={() => setDisplay((prevCount) => prevCount + 1000)}
            >
              More Answered Questions
            </button>
          )
          : null}
      </div>
    </div>

  );
}

export default List;
