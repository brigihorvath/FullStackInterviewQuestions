import classes from './Question.module.css';
// import Stats from './Stats';
// import Tag from '../UI/Tag';

const Question = (props) => {
  return (
    <div className={classes.questionContainer}>
      <div className={classes.statistics}>
        {/* <Stats amount={3}>Votes</Stats>
        <Stats amount={3}>Answers</Stats>
        <Stats amount={3}>Views</Stats> */}
      </div>
      <div className={classes.question}>{props.children}</div>
      {/* <Tag>JavaScript</Tag> */}
    </div>
  );
};

export default Question;
