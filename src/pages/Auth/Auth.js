import React from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { AuthForm } from '../../components/AuthForm';
import Button from '../../components/UI/Button';

import classes from './Auth.module.css';

function Auth({ isLogin }) {
  const { handleLogin, handleSignup, error } = useAuth();
  const onSubmit = isLogin ? handleLogin : handleSignup;
  const submitMessage = isLogin ? 'Login' : 'Signup';

  const errorMessage = error ? (
    <Button className={classes.loginError}>{error.message}</Button>
  ) : (
    ''
  );

  return (
    <div style={{ paddingTop: '100px' }} className={classes.loginPage}>
      <div className={classes.loginContainer}>
        <AuthForm submitMessage={submitMessage} onSubmit={onSubmit} />
        {errorMessage}
      </div>
    </div>
  );
}

export default Auth;
