import React, { useState } from "react";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const initState = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return defaultValue;
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(initState("isLoggedIn", false));
  const [user, setUser] = useState(initState("user", {}));

  const login = ({ token, user: nextUser }) => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(nextUser));

    setUser(nextUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser({});
    setIsLoggedIn(false);
  };

  const updateUser = (nextUser) => {
    localStorage.setItem("user", JSON.stringify({ ...user, ...nextUser }));
    setUser({ ...user, ...nextUser });
  };

  return isLoggedIn ? (
    <AuthApp user={user} logout={logout} updateUser={updateUser} />
  ) : (
    <UnAuthApp login={login}></UnAuthApp>
  );
};

export default App;
