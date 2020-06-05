import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

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

  return isLoggedIn ? (
    <p>Has iniciado sesión</p>
  ) : (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login login={login}></Login>
        </Route>
        <Route path="/register">
          <Register login={login}></Register>
        </Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
