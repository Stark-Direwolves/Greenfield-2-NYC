import React, { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';

const ListContainer = styled.div`
width: 100%;
overflow: hidden;
overflow-y: scroll;
margin: auto;
background: linear-gradient(0deg, rgba(184, 144, 122, 0.299) 0%, rgba(0,0,0,0) 20%);
border-bottom: 1px solid black;
`;

function List({ questions, productName, display, setDisplay, GetQues }) {
  const firstFour = questions.slice(0, display);

  return (
    <ListContainer>
      <div>
        {firstFour.map((question) => (
          <Question
            key={question.question_id}
            question={question}
            productName={productName}
            GetQues={GetQues}
          />
        ))}
      </div>
    </ListContainer>
  );
}

export default List;
