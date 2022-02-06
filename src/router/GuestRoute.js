import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthContext";

function GuestRoute({ children, ...restProps }) {
  const { user } = useAuth();

  if (user) {
    return <Redirect to="/" />;
  }

  return <Route {...restProps}>{children}</Route>;
}

export default GuestRoute;
