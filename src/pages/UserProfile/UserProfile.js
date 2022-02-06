import { ProfileHeader } from '../../components/Profile/ProfileHeader';
import { ProfileContainer } from '../../components/Profile/ProfileContainer';

import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={classes.profilePage}>
      <ProfileHeader />
      <ProfileContainer />
    </div>
  );
};

export default UserProfile;
