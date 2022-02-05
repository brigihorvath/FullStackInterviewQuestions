// import TextEditor from '../../components/Questions/TextEditor';
import { Fragment } from 'react';
import CreateQuestion from '../../components/Questions/CreateQuestion';
import TitleHeader from '../../components/UI/TitleHeader/TitleHeader';
import classes from './NewQuestion.module.css';

const NewQuestion = () => {
  return (
    <Fragment>
      <TitleHeader title={`Submit a new question`} />
      <div className={classes.newQuestionContainer}>
        <CreateQuestion />
      </div>
    </Fragment>
  );
};

export default NewQuestion;
