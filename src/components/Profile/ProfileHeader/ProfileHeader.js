// import { useEffect, useState } from 'react';
import classes from './ProfileHeader.module.css';

const ProfileHeader = (props) => {
  console.log(props.userDetails);
  // const [title, setTitle] = useState('Ironhacker');
  // useEffect(() => {
  //   setTitle(props.userDetails?.user?.username);
  // }, [props.userDetails?.user?.username]);
  return (
    <div className={classes.profileHeader}>
      {/* <h1>
        Hello{' '}
        {props.userDetails?.user?.username
          ? props.userDetails.user.username
          : 'Ironhacker'}
      </h1> */}
      <h1>Hello Ironhacker</h1>
    </div>
  );
};

export default ProfileHeader;
