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

  const login = (nextUser) => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", JSON.stringify(nextUser));

    setUser(nextUser);
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <AuthApp user={user} />
  ) : (
    <UnAuthApp login={login}></UnAuthApp>
  );
};

export default App;
