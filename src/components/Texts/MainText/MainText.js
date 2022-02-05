import classes from './MainText.module.css';

const MainText = (props) => {
  return (
    <div className={classes.mainText}>
      <h2 className={classes.mainTextHeading}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default MainText;
