// import { useState } from 'react';

import TextEditor from './TextEditor';
import classes from './CreateQuestion.module.css';

const CreateQuestion = () => {
  // const [question, setQuestion] = useState({ question: '', answer: '' });

  // const questionChangeHandler = ({ target }) => {
  //   setQuestion((question) => {
  //     return { ...question, [target.name]: target.value };
  //   });
  // };

  return (
    <div className={classes.container}>
      {/* <form className={classes.questionForm}>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          name="question"
          placeholder="Type your question here!"
          value={question.question}
          onChange={questionChangeHandler}
        />
        <label htmlFor="answer">Answer</label>
        <textarea
          name="answer"
          placeholder="Type an answer here"
          value={question.answer}
          onChange={questionChangeHandler}
        />
        <button type="submit">Submit Question</button>
      </form> */}
      <TextEditor question={true} />
    </div>
  );
};

export default CreateQuestion;
