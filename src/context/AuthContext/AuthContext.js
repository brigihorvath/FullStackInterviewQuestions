import React, { useCallback } from 'react';
import { logout, login, signup, getUserData } from '../../api';

function getSessionUser() {
  const rawUser = sessionStorage.getItem('user');
  if (rawUser) {
    return JSON.parse(rawUser);
  }
  return null;
}

function removeUser() {
  sessionStorage.removeItem('user');
}

function saveSessionUser(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}

function getSessionUserDetails() {
  const rawUser = sessionStorage.getItem('userDetails');
  if (rawUser) {
    return JSON.parse(rawUser);
  }
  return null;
}

function removeUserDetails() {
  sessionStorage.removeItem('userDetails');
}

function saveSessionUserDetails(userDetails) {
  sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
}

// create an auth context object
export const AuthCtx = React.createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState({ user: getSessionUser() });
  const [error, setError] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState({
    user: getSessionUserDetails(),
  });
  // wrap the children inside the context provider

  const handleLogin = async (credentials) => {
    try {
      const { data } = await login(credentials);
      saveSessionUser(data);
      setAuth({ user: data });
      const response = await getUserData(data._id);
      setUserDetails({ user: response.data });
      saveSessionUserDetails(response.data);
    } catch (err) {
      setError(err.response.data);
      setAuth({ user: null });
    }
  };

  const handleSignup = async (credentials) => {
    try {
      const { data } = await signup(credentials);
      saveSessionUser(data);
      setAuth({ user: data });
      const response = await getUserData(data._id);
      setUserDetails({ user: response.data });
      saveSessionUserDetails(response.data);
    } catch (err) {
      setError(err.response.data);
      setAuth({ user: null });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      removeUser();
      removeUserDetails();
    } catch (err) {
      setError(err.response.data);
    } finally {
      setAuth({ user: null });
      setUserDetails({ user: null });
    }
  };

  const getLoggedInUserData = useCallback(async () => {
    try {
      if (auth?.user?._id) {
        const userId = auth.user._id;
        const { data } = await getUserData(userId);
        setUserDetails({ user: data });
        saveSessionUserDetails(data);
      }
    } catch (err) {
      setError(err?.response?.data);
    }
  }, [auth?.user?._id]);

  const userDetailsHandler = (user) => {
    setUserDetails(user);
    saveSessionUserDetails({ ...user, password: null });
  };

  // const handleIsLoggedIn = async () => {
  //   try {
  //     if (!auth.user) {
  //       const { data } = await isLoggedIn();
  //       setAuth({ user: data });
  //       saveSessionUser(data);
  //     }
  //   } catch (err) {
  //     setAuth({ user: null });
  //   }
  // };

  // React.useEffect(() => {
  //   handleIsLoggedIn();
  // }, []);

  return (
    <AuthCtx.Provider
      value={{
        ...auth,
        handleLogin,
        handleLogout,
        handleSignup,
        error,
        getLoggedInUserData,
        userDetails,
        userDetailsHandler,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

// to consume context, you call React.useContext and pass the context object as an argument
export function useAuth() {
  return React.useContext(AuthCtx);
}

export default AuthProvider;
