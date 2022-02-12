import React from 'react';
import classes from './AuthForm.module.css';

function AuthForm({ onSubmit, submitMessage }) {
  const [state, setState] = React.useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(state);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <label htmlFor="email">Email</label>
      <input
        required
        className={classes.loginInput}
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        className={classes.loginInput}
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit" className={classes.loginBtn}>
        {submitMessage}
      </button>
    </form>
  );
}

export default AuthForm;
