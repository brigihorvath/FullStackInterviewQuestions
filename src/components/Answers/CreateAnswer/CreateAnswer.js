import TextEditor from '../../Questions/TextEditor';

const createAnswer = (props) => {
  return (
    <div>
      <h2>Create an answer</h2>
      <TextEditor
        question={false}
        questionId={props.questionId}
        reloadPage={props.updatePage}
      />
    </div>
  );
};

export default createAnswer;
