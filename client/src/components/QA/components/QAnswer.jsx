import React from 'react';

function QAnswer({ answer }) {
  // console.log('body ', body);
  // console.log('answer:', answer);
  return (
    <div>
      A: {answer.body}
      <div>
        name: {answer.answerer_name}
        date: {answer.date}
        helpfulness: {answer.helpfulness}
      </div>
    </div>
  );
}
export default QAnswer;
