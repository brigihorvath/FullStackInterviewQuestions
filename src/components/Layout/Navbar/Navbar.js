import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

import { useAuth } from '../../../context/AuthContext/AuthContext';

// import profileImg from '../../../assets/images/Brigi.jpeg';

const Header = () => {
  const { user, handleLogout } = useAuth();

  const userNavigation = user ? (
    <div className={classes.userLinks}>
      <Link style={{ margin: '0 15px' }} to="/profile">
        My Account
      </Link>
      <Button onClick={handleLogout}>logout</Button>
      {/* <img
        src={profileImg}
        className={classes.headerAvatar}
        alt="BrigiHorvath"
      /> */}
    </div>
  ) : (
    <div className={classes.userLinks}>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

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
      {userNavigation}
    </div>
  );
};

export default Header;
