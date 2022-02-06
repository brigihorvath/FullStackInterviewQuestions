/// HOOKS
import { Fragment } from 'react';
import useEditor from '../../hooks/useEditor';
// import { Link } from 'react-router-dom';

/// COMPONENTS
// import Button from '../UI/Button';
// import Question from './Question';
import classes from './QuestionList.module.css';

const QuestionList = (props) => {
  const questionList = props.questions.map((el) => {
    return { question: el.question, id: el._id };
  });

  const questionArr = useEditor(questionList);

  // console.log(questionList);

  return (
    <Fragment>
      <div className={classes.questionsContainer}>
        <h2 className={classes.questionHeader}>
          {questionArr.length > 1 ? 'Questions' : 'Question'}
        </h2>
        {/* <Link to="/create-question">
          <Button cssStyle="blueButton" className={classes.questionButton}>
            Submit a Question
          </Button>
        </Link> */}
      </div>
      {/* <Question />
      <Question />
      <Question /> */}
      {questionArr}
    </Fragment>
  );
};

export default QuestionList;
