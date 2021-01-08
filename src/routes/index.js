import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Project from '../pages/Project';
import Profile from '../pages/Profile';
import Welcome from '../pages/Welcome';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/app" exact component={SignIn} />
      <Route path="/app/register" exact component={SignUp} />
      <Route path="/app/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/app/project/:id" exact component={Project} isPrivate />
      <Route path="/app/profile" exact component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
