import { ProfileHeader } from '../../components/Profile/ProfileHeader';
import { ProfileContainer } from '../../components/Profile/ProfileContainer';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';

import classes from './UserProfile.module.css';

const UserProfile = () => {
  // const { userDetails } = useAuth();
  const { getLoggedInUserData, userDetails } = useAuth();
  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);

  return (
    <div className={classes.profilePage}>
      <ProfileHeader userDetails={userDetails} />
      <ProfileContainer userDetails={userDetails} />
    </div>
  );
};

export default UserProfile;
