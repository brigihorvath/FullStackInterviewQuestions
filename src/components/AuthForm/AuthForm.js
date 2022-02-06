import React from "react";

function AuthForm({ onSubmit, submitMessage }) {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">{submitMessage}</button>
    </form>
  );
}

export default AuthForm;
