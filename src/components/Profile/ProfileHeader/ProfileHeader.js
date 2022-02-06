import classes from './ProfileHeader.module.css';

const ProfileHeader = (props) => {
  return (
    <div className={classes.profileHeader}>
      <h1>Hello {props.username ? props.username : 'Ironhacker'}</h1>
    </div>
  );
};

export default ProfileHeader;
