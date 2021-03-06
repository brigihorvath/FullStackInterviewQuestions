import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionId } from '../../api';
import useHttp from '../../hooks/use-http';
import classes from './SingleQuestion.module.css';

import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { CreateAnswer } from '../../components/Answers/CreateAnswer/index.js';
import { AnswerList } from '../../components/Answers/AnswerList';
import { HeaderImage } from '../../components/UI/HeaderImage';

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
  console.log(answers);
  const answerList = answers.length ? (
    <AnswerList answers={answers} />
  ) : (
    <p>No answers yet...</p>
  );
  //   const questionArr = [].push(loadedQuestion);

  const reloadPage = () => {
    setReload((reload) => !reload);
  };

  return (
    <div>
      <HeaderImage title={'Question'} />
      <div className={classes.singleQuestionContainer}>
        <QuestionList questions={[loadedQuestion.data]} />
        <h2 className={classes.singleQuestionHeading}>Answers</h2>
        {answerList}
        <CreateAnswer questionId={questionId} updatePage={reloadPage} />
      </div>
    </div>
  );
};

export default SingleQuestion;
