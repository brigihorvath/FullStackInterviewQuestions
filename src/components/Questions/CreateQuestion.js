import TextEditor from './TextEditor';
import classes from './CreateQuestion.module.css';

const CreateQuestion = () => {
  return (
    <div className={classes.container}>
      <TextEditor question={true} />
    </div>
  );
};

export default CreateQuestion;
