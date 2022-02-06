import classes from './HeaderImage.module.css';

const HeaderImage = (props) => {
  return (
    <div className={classes.headerImage}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default HeaderImage;
