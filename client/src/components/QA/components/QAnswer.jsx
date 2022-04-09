import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const updateHelpA = () => {
    !isHelpful
      ? (
        setAnswerHelp(true), setAnswerHelp(answerHelp + 1)
      )
      : null;
    axios.put(`/qa/answers/${answer.id}/helpful`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReport = () => {
    console.log(answer.id);
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
        {!isHelpful ? (<span onClick={updateHelpA}>Yes</span>) : (<span>ty</span>)}
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
