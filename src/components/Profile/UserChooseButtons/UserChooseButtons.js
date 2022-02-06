import classes from './UserChooseButtons.module.css';
import { Link } from 'react-router-dom';

import Button from '../../UI/Button';

const UserChooseButtons = (props) => {
  return (
    <div className={classes.userChooseButtons}>
      <Link to="/questions/favourites">
        <Button>Your Favourite Questions</Button>
      </Link>
      <Link to="/questions/user-questions">
        <Button>The Questions you have created</Button>
      </Link>
      {/* <Button>The Questions you have answered</Button> */}
    </div>
  );
};

export default UserChooseButtons;
