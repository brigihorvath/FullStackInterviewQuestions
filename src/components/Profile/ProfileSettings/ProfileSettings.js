import { useState } from 'react';
import classes from './ProfileSettings.module.css';
import Button from '../../UI/Button';

const ProfileSettings = (props) => {
  console.log('userDetails:', props.userDetails);
  const [inputState, setInputState] = useState({
    username: props.userDetails.user.username
      ? props.userDetails.user.username
      : 'Ironhacker',
    email: props.userDetails.user.email,
  });
  const inputChangeHandler = ({ target }) => {
    setInputState((inputState) => {
      return { ...inputState, [target.name]: target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputState);
  };
  return (
    <div className={classes.profileSettings}>
      <h2>Account Settings</h2>
      <p>User role: User</p>
      <form
        // encType="multipart/form-data"
        className={classes.editProfileForm}
        onSubmit={onSubmitHandler}
      >
        <div className={classes.profileFormGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className={classes.editProfileInput}
            value={inputState.username}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.profileFormGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={classes.editProfileInput}
            name="email"
            value={inputState.email}
            onChange={inputChangeHandler}
          />
        </div>
        {/* <div className={classes.profileFormGroupProfileImage}>
      <img
      className='user-profile-image}
        src=''
        alt=''

      />
      <input
        type='file'
        accept="image/*"
        name='user-profile-image'
        id='imageInput'
        className='profile-image-input'
      />
      <label for='imageInput'>Choose a new image</label>
    </div> */}
        <Button type="submit" className={classes.profileFormBtn}>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default ProfileSettings;
