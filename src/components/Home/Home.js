import React from 'react';
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import User from '../User/User';

const Home = ({ email }) => {
  return (
    <Switch>
      <Route path="/home">
        <div>Welcome { email }</div>
        <p>Please click <Link to="/user">here</Link> to navigate user page</p>
      </Route>
      <Route path="/user">
        <User email={ email } />
      </Route>
    </Switch>
  );
};

export default Home;
