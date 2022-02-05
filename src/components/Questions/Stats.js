import classes from './Stats.module.css';

const Stats = (props) => {
  return (
    <div className={classes.statsContainer}>
      <p>{props.amount}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Stats;
