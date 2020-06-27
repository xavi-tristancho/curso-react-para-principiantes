import React, { useState } from "react";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const initState = () => {
  try {
    return JSON.parse(localStorage.getItem("isLoggedIn"));
  } catch (e) {
    return false;
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(initState());

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return isLoggedIn ? <AuthApp /> : <UnAuthApp login={login}></UnAuthApp>;
};

export default App;
