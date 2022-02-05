import { CategoryCard } from '../CategoryCard';
import classes from './CategoryList.module.css';

const categoryList = [
  'Basics',
  'OOP',
  'Closures',
  'DOM',
  'Arrays',
  'Strings',
  'Promises',
];

const categoryArr = categoryList.map((category) => (
  <CategoryCard categoryName={category} key={category} />
));
const CategoryList = () => {
  return <div className={classes.categoryList}>{categoryArr}</div>;
};

export default CategoryList;
