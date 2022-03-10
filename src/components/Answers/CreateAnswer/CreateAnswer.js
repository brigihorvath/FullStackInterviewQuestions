import TextEditor from '../../Questions/TextEditor';
import { useAuth } from '../../../context/AuthContext/AuthContext';
import classes from './CreateAnswer.module.css'; //

const CreateAnswer = (props) => {
  const { user } = useAuth();
  return (
    <div className={classes.createAnswerContainer}>
      <h2>{user ? 'Create an answer' : 'Log in to create an answer'}</h2>
      {user && (
        <TextEditor
          question={false}
          questionId={props.questionId}
          reloadPage={props.updatePage}
        />
      )}
    </div>
  );
};

export default CreateAnswer;
