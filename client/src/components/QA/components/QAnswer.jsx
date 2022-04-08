import React, { useState } from 'react';
import moment from 'moment';

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const updateReport = () => {
    !reported ? (setReported(true))
      : null;
    axios.put(`/qa/answers/${answer.id}/report`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {answer.body}
      <div>
        <div>by: </div>
        <div>{(answer.answerer_name.toLowerCase() === 'seller') ? <b>{answer.answerer_name}</b> : answer.answerer_name}
          , {moment(answer.date).format('LL')}
        </div>
        <div>Helpful?</div>
        <span onClick={() => { !isHelpful ? (setIsHelpful(true), setAnswerHelp(answerHelp + 1)) : null }}>Yes</span>
        ({answerHelp})
        {!reported
          ? (
            <span onClick={updateReport}>Report</span>
          ) : (
            <span>Reported!</span>
          )}
      </div>
    </div>
  );
}

export default QAnswer;
