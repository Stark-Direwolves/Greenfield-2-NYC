import React, { useState } from 'react';
import moment from 'moment';

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(true);

  return (
    <div>
      {answer.body}
      <div>
        by: {(answer.answerer_name.toLowerCase() === 'seller') ? <b>{answer.answerer_name}</b> : answer.answerer_name}
        , {moment(answer.date).format('LL')}
        Helpful?
        <span onClick={() => { isHelpful ? (setIsHelpful(!isHelpful), setAnswerHelp(answerHelp + 1)) : (setIsHelpful(!isHelpful),setAnswerHelp(answerHelp - 1))}}>Yes</span>
      ({answerHelp})
    </div>
    </div >
  );
}

// return (
//   <div>
//       {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//   </div>
//   );
// }


export default QAnswer;
