import React, { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';

const ListContainer = styled.div`
width: 90vw;
height: 60%;
overflow: hidden;
overflow-y: scroll;
`;

function List({ questions, productName, display, setDisplay }) {
  const firstFour = questions.slice(0, display);

  return (
      <ListContainer>
        <div>
          {firstFour.map((question) => (
            <Question
              key={question.question_id}
              question={question}
              productName={productName}
            />
          ))}
        </div>
      </ListContainer>
  );Î
}

export default List;
