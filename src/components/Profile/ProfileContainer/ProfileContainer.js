import classes from './ProfileContainer.module.css';
import { ProfileSettings } from '../ProfileSettings';
// import { UserFavourites } from '../UserFavourites';
import { UserChooseButtons } from '../UserChooseButtons';
import { useAuth } from '../../../context/AuthContext/AuthContext';
import { useEffect } from 'react';

const ProfileContainer = (props) => {
  const { getLoggedInUserData, userDetails } = useAuth();
  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);
  console.log(userDetails);

  return (
    <div className={classes.profileContainer}>
      <ProfileSettings userDetails={userDetails} />
      <UserChooseButtons />
    </div>
  );
};

export default ProfileContainer;
