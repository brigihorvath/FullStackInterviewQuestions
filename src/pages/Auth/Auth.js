import React from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { AuthForm } from '../../components/AuthForm';

function Auth({ isLogin }) {
  const { handleLogin, handleSignup, error } = useAuth();
  const onSubmit = isLogin ? handleLogin : handleSignup;
  const submitMessage = isLogin ? 'Login' : 'Signup';

  const errorMessage = error ? <div>{error.message}</div> : '';

  return (
    <div style={{ paddingTop: '100px' }}>
      <AuthForm submitMessage={submitMessage} onSubmit={onSubmit} />
      {errorMessage}
    </div>
  );
}

export default Auth;
