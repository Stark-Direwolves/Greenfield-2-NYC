import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';

const AContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

const APhotoContainer = styled.div`
display: flex;
width: 50%;
margin: 10px 0;
`;

const APhoto = styled.img`
margin-right: 10px;
`;

const AFooterContainer = styled.div`
display: flex;
font-size: 12px;
font-weight: 700;
margin: 12px 0px;
text-transform: uppercase;
`;

const AuthorContainer = styled.div`
order: 1;
margin-right: 10px;
padding-right: 5px;
border-right: 1px black solid;
`;

const AHelpContainer = styled.div`
order: 2;
margin-right: 10px;
padding-right: 5px;
border-right: 1px black solid;
`;

const AReportContainer = styled.div`
order: 3;
`;

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const updateHelpA = () => {
    (!isHelpful)
      ? (
        setAnswerHelp(true), setAnswerHelp(answerHelp + 1)
      )
      : null;
    axios.put(`/qa/answers/${answer.answer_id}/helpful`)
      .then((result) => {
        setIsHelpful(!isHelpful);
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
    axios.put(`/qa/answers/${answer.answer_id}/report`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AContainer>
      <div>{answer.body}</div>
      <APhotoContainer>
        {(answer.photos.length > 0)
          ? (
            answer.photos.map((photo, key) => <APhoto src={`${photo.url}`} alt="" style={{ height: '80px', width: '80px' }} key={photo.id} />)
          )
          : null}
      </APhotoContainer>
      <AFooterContainer>
        <AuthorContainer>by: {(answer.answerer_name.toLowerCase() === 'seller') ? <b>{answer.answerer_name}</b> : answer.answerer_name}
          , {moment(answer.date).format('LL')}
        </AuthorContainer>
        <AHelpContainer>
          Helpful?&nbsp;
          {!isHelpful ? (<span onClick={updateHelpA}>Yes</span>) : (<span>ty</span>)}
          ({answerHelp})
        </AHelpContainer>
        <AReportContainer>
          {!reported
            ? (
              <span onClick={updateReport}>Report</span>
            ) : (
              <span>Reported!</span>
            )}
        </AReportContainer>
      </AFooterContainer>
    </AContainer>
  );
}

export default QAnswer;
