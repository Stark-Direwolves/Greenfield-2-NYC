import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QAnswer from './QAnswer';
import Answer from './Answer';

const QuestionContainer = styled.div`
margin: 10px 0px;
border-bottom: 2px solid black;
`;

const QuestionHeader = styled.div`
display: flex;
justify-content: space-between;
`;

const QuestionTitle = styled.div`
font-weight: bold;
`;

const QHRAContainer = styled.div`
display: flex;
width: 25%;
justify-content: space-evenly;
font-size: 12px;
font-weight: 700;
margin: 12px 0px;
text-transform: uppercase;
`;

const HelpfulQContainer = styled.span`
order: 1;
border-right: 1px solid black;
padding-right: 5px;
`;

const ReportQContainer = styled.span`
order: 2;
border-right: 1px solid black;
padding-right: 5px;
`;

const AddAContainer = styled.span`
order: 3;
`;

const AnswerContainer = styled.div`
display: flex;
`;

const AnswerHeader = styled.div`
flex: 2%;
`;

const AnswerBody = styled.div`
flex: 98%;
`;

const LoadMore = styled.div`
margin-bottom: 10px;
font-size: 12px;
font-weight: 700;
margin: 12px 0px;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
`;

function Question({ question, productName }) {
  const [answers, setAnswers] = useState([]);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [displayAn, setDisplayAn] = useState(2);
  const [isHelpfulQ, setIsHelpfulQ] = useState(false);
  const [reported, setReported] = useState(false);

  // /qa/questions/:question_id/answers
  useEffect(() => {
    if (Object.keys(question.answers).length > 0) {
      axios.get(`/qa/questions/${question.question_id}/answers`, { params: { product_id: question.productId } })
        .then((result) => {
          setAnswers(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const updateHelpQ = () => {
    !isHelpfulQ
      ? (
        setIsHelpfulQ(true), setQHelpful(qHelpful + 1)
      )
      : null;
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReport = () => {
    !reported ? (setReported(true))
      : null;
    axios.put(`/qa/questions/${question.question_id}/report`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firstTwo = answers.slice(0, displayAn);

  return (
    <QuestionContainer>
      <QuestionHeader>
        <QuestionTitle>Q: {question.question_body}</QuestionTitle>
        <QHRAContainer>
          <HelpfulQContainer>Helpful?&nbsp;
            {!isHelpfulQ ? (<span onClick={updateHelpQ}>Yes</span>) : (<span>ty</span>)}
            <span>({qHelpful})</span>
          </HelpfulQContainer>
          <ReportQContainer>
            {!reported
              ? (
                <span onClick={updateReport}>Report</span>
              ) : (
                <span>Reported!</span>
              )}
          </ReportQContainer>
          <AddAContainer>
            <Answer
              questionId={question.question_id}
              productName={productName}
              questionBody={question.question_body}
            />
          </AddAContainer>
        </QHRAContainer>
      </QuestionHeader>
      <br />
      <AnswerContainer>
        <AnswerHeader>
          {Object.keys(question.answers).length > 0 ? <b>A: </b> : null}
        </AnswerHeader>
        <AnswerBody>
          {firstTwo.map((answer) => (
            <QAnswer key={answer.answer_id} answer={answer} />))}
          <div>
            {(answers.length > displayAn)
              ? (
                <LoadMore
                  onClick={() => setDisplayAn((prevCount) => prevCount + 1000)}
                >
                  LOAD MORE ANSWERS
                </LoadMore>
              )
              : (null)}
          </div>
        </AnswerBody>
      </AnswerContainer>
    </QuestionContainer>
  );
}

export default Question;
