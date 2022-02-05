import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${classes.btn} ${classes[props.cssStyle]}`}>
      {props.children}
    </button>
  );
};

export default Button;
