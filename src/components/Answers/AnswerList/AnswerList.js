/// HOOKS
import { Fragment } from 'react';
import useEditor from '../../../hooks/useEditor';
// import { Link } from 'react-router-dom';

/// COMPONENTS
// import Button from '../../UI/Button';
// import Question from './Question';
// import classes from './AnswerList.module.css';

const AnswerList = (props) => {
  const answerList = props.answers.map((el) => {
    return { question: el.answer, id: el._id, isAnswer: true };
  });

  const answerArr = useEditor(answerList);

  console.log(answerList);

  return <Fragment>{answerArr}</Fragment>;
};

export default AnswerList;
