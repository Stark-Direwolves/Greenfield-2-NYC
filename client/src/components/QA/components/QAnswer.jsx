import React, { useState } from 'react';
import moment from 'moment';

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);

  return (
    <div>
      {answer.body}
      <div>
        by: {(answer.answerer_name.toLowerCase() === 'seller') ? <b>{answer.answerer_name}</b> : answer.answerer_name}
        , {moment(answer.date).format('LL')}
        Helpful?
        <span onClick={() => { !isHelpful ? (setIsHelpful(true), setAnswerHelp(answerHelp + 1)) : null }}>Yes</span>
        ({answerHelp})
      </div>
    </div>
  );
}

export default QAnswer;
