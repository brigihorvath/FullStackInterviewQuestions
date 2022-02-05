import classes from './Tag.module.css';

const Tag = (props) => {
  return <div className={classes.tag}>{props.children}</div>;
};

export default Tag;
