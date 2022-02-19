import { useAuth } from '../../../context/AuthContext/AuthContext';
import classes from './ProfileHeader.module.css';

const ProfileHeader = () => {
  const { userDetails } = useAuth();
  console.log(userDetails);
  return (
    <div className={classes.profileHeader}>
      <h1>
        Hello{' '}
        {userDetails?.user?.username
          ? userDetails?.user?.username
          : 'Ironhacker'}
      </h1>
    </div>
  );
};

export default ProfileHeader;
