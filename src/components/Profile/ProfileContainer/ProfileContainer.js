import classes from './ProfileContainer.module.css';
import { ProfileSettings } from '../ProfileSettings';
// import { UserFavourites } from '../UserFavourites';
import { UserChooseButtons } from '../UserChooseButtons';
// import { useAuth } from '../../../context/AuthContext/AuthContext';
// import { useEffect, useState } from 'react';

const ProfileContainer = (props) => {
  // const [user, setUser] = useState(null);
  // const { getLoggedInUserData, userDetails } = useAuth();
  // const { userDetails } = useAuth();
  // useEffect(() => {
  //   getLoggedInUserData();
  //   setUser(userDetails);
  // }, [getLoggedInUserData, userDetails]);
  // console.log(userDetails);

  return (
    <div className={classes.profileContainer}>
      <ProfileSettings userDetails={props.userDetails} />
      <UserChooseButtons />
    </div>
  );
};

export default ProfileContainer;
