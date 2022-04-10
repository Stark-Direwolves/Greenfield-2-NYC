import React, { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';

const Button = styled.button`
  width: 50%;
  background-color: ${props => props.theme.colors[6]};
  color: white;
  margin: 20px 0 20px 0;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors[7]};
  }
`;

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
            productName={productName}
          />
        ))}
      </div>
      <div>
        {(questions.length > display)
          ? (
            <Button
              type="submit"
              onClick={() => setDisplay((prevCount) => prevCount + 1000)}
            >
              More Answered Questions
            </Button>
          )
          : null}
      </div>
    </div>

  );
}

export default List;
