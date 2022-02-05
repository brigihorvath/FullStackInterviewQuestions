import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionId } from '../../api';
import useHttp from '../../hooks/use-http';

import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { CreateAnswer } from '../../components/Answers/CreateAnswer/index.js';
import { AnswerList } from '../../components/Answers/AnswerList';

const SingleQuestion = () => {
  const [reload, setReload] = useState(false);
  const { questionId } = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuestion,
    error,
  } = useHttp(getQuestionId, true);

  useEffect(() => {
    sendRequest(questionId);
  }, [sendRequest, questionId, reload]);

  console.log(status, loadedQuestion, error);
  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (!loadedQuestion) {
    return <p>No Questions found</p>;
  }
  const { answers } = loadedQuestion.data;
  const answerList = answers.length ? (
    <AnswerList answers={answers} />
  ) : (
    <p>No answers yet...</p>
  );
  console.log(loadedQuestion.data.answers);
  //   const questionArr = [].push(loadedQuestion);

  const reloadPage = () => {
    setReload((reload) => !reload);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <QuestionList questions={[loadedQuestion.data]} />
      <h2>Answers</h2>
      {answerList}
      <CreateAnswer questionId={questionId} updatePage={reloadPage} />
    </div>
  );
};

export default SingleQuestion;
