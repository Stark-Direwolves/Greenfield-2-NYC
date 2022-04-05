import React, { useState } from 'react';
import moment from 'moment';

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);

  return (
    <div>
      {answer.body}
      <div>
        by: {answer.answerer_name}
        ,  {moment(answer.date).format('LL')}
        Helpful?
        <span onClick={() => setAnswerHelp(answerHelp + 1)}>Yes</span>
        ({answerHelp})
      </div>
    </div>
  );
}
export default QAnswer;
