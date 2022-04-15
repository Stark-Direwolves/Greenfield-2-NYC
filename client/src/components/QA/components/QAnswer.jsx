import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import Photo from './Photo';
import useModal from './useModal';

const AContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
width: 70%;
`;

const APhotoContainer = styled.div`
display: flex;
width: 50%;
margin: 10px 0;
`;

const APhoto = styled.img`
margin-right: 10px;
cursor: pointer;
`;

const AFooterContainer = styled.div`
display: flex;
font-size: 12px;
font-weight: 600;
margin: 12px 0px;
text-transform: uppercase;
`;

const AuthorContainer = styled.div`
order: 1;
padding: 0 10px;
border-right: 1px black solid;
`;

const AHelpContainer = styled.div`
order: 2;
padding: 0 10px;
border-right: 1px black solid;
`;

const AReportContainer = styled.div`
order: 3;
padding: 0 10px;
`;

function QAnswer({ answer }) {
  const [answerHelp, setAnswerHelp] = useState(answer.helpfulness);
  const [isHelpful, setIsHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const { isPhotoA, togglePhotoA } = useModal();

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
            answer.photos.map((photo) => (
              <>
                <APhoto
                  src={`${photo.url}`}
                  alt=""
                  style={{ height: '80px', width: '80px' }}
                  key={photo.id}
                  onClick={togglePhotoA}
                />
                <Photo
                  isPhotoA={isPhotoA}
                  hidePhotoA={togglePhotoA}
                  photo={photo.url}
                />
              </>
            ))
          )
          : null}
      </APhotoContainer>
      <AFooterContainer>
        <AuthorContainer>
          by:
          {' '}
          {(answer.answerer_name.toLowerCase() === 'seller') ? <span style={{ fontWeight: '900', fontSize: '14px' }}>{answer.answerer_name}</span> : answer.answerer_name}
          &nbsp;– {moment(answer.date).format('LL')}
        </AuthorContainer>
        <AHelpContainer>
          Helpful?&nbsp;
          {!isHelpful ? (<span onClick={updateHelpA} style={{ textDecorationLine: 'underline', cursor: 'pointer' }}>Yes&nbsp;</span>) : (<span>ty</span>)}
          (
          {answerHelp}
          )
        </AHelpContainer>
        <AReportContainer>
          {!reported
            ? (
              <span onClick={updateReport} style={{ textDecorationLine: 'underline', cursor: 'pointer' }}>Report</span>
            ) : (
              <span style={{ textDecorationLine: 'underline', cursor: 'pointer' }}>Reported!</span>
            )}
        </AReportContainer>
      </AFooterContainer>
    </AContainer>
  );
}

export default QAnswer;
