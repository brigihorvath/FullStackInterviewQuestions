import { Link } from 'react-router-dom';
import classes from './CategoryCard.module.css';

const CategoryCard = (props) => {
  return (
    <Link
      to={`/questions/categories/${props.categoryName}`}
      className={classes.container}
    >
      <div
        className={`${classes.categoryCard} 
          ${classes[props.categoryName.toLowerCase()]}`}
      >
        <h2 className={classes.categoryCardHeading}>{props.categoryName}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
