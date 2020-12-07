import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Greens from '../pages/Greens';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/projects" component={Projects} isPrivate />
      <Route path="/greendata" component={Greens} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
