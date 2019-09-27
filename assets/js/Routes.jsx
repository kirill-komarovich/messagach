import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const Routes = () => (
  <Router>
    <Switch>
      <AuthenticatedRoute exact path="/" component={Main} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  </Router>
);

export default Routes;
