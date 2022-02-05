import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

import profileImg from '../../../assets/images/Brigi.jpeg';

const Header = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <p className={classes.headerLogo}>JS Interview</p>
      </Link>
      {/* <form className={classes.headerForm}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className={classes.headerInput}
        />
      </form> */}
      <div className={classes.userLinks}>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <img
          src={profileImg}
          className={classes.headerAvatar}
          alt="BrigiHorvath"
        />
      </div>
    </div>
  );
};

export default Header;
