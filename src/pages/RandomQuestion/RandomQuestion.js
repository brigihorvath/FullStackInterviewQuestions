import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getQuestions, getQuestionId, getRandomQuestion } from '../../api';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import classes from '../SingleQuestion/SingleQuestion.module.css';

import QuestionList from '../../components/Questions/QuestionList';
import { CreateAnswer } from '../../components/Answers/CreateAnswer/index.js';
import { AnswerList } from '../../components/Answers/AnswerList';
import { HeaderImage } from '../../components/UI/HeaderImage';
import Button from '../../components/UI/Button';

const RandomQuestion = () => {
  const [reload, setReload] = useState(false);
  const {
    sendRequest,
    status,
    data: loadedQuestion,
    error,
  } = useHttp(getRandomQuestion, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, reload]);

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
      <HeaderImage title={'Random Question'} />
      <div className={classes.singleQuestionContainer}>
        <Button onClick={reloadPage} cssStyle="centeredBtn">
          Hit me with another question
        </Button>
        <QuestionList questions={[loadedQuestion.data]} />
        <h2 className={classes.singleQuestionHeading}>Answers</h2>
        {answerList}
        <CreateAnswer
          questionId={loadedQuestion.data._id}
          updatePage={reloadPage}
        />
      </div>
    </div>
  );
};

export default RandomQuestion;
