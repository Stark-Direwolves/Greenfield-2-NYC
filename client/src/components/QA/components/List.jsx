import React, { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';

const ListContainer = styled.div`
width: 98%;
overflow: hidden;
overflow-y: scroll;
margin: 10px 15px;
background: linear-gradient(0deg, rgba(255,255,255,.6) 0%, rgba(0,0,0,0) 20%);
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
  );
}

export default List;
