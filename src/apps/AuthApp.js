import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Customers, Profile } from "../pages";
import { AuthPage } from "../ui";

const AuthApp = ({ user, logout, updateUser }) => {
  return (
    <Router>
      <AuthPage user={user} logout={logout}>
        <Switch>
          <Route path="/" exact>
            <Customers></Customers>
          </Route>
          <Route path="/profile" exact>
            <Profile user={user} updateUser={updateUser}></Profile>
          </Route>

          <Redirect to="/"></Redirect>
        </Switch>
      </AuthPage>
    </Router>
  );
};

export default AuthApp;
