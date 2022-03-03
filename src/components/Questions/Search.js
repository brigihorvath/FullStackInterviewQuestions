import { useState } from 'react';
// import { Fragment } from 'react/cjs/react.development';
import classes from './Search.module.css';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchChangeHandler = ({ target }) => {
    console.log('target.value:', target.value);
    props.searchQuestion(target.value);
    setSearchTerm(target.value);
  };
  console.log(searchTerm);
  return (
    <div className={classes.searchContainer}>
      <form>
        <input
          type="text"
          name="search"
          value={searchTerm}
          placeholder="Search"
          onChange={searchChangeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
