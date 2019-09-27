import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Main from './pages/Main';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import history from './history';


const Routes = () => (
  <Router history={history}>
    <Switch>
      <AuthenticatedRoute exact path="/" component={Main} />
      <Route path="/sign-in" component={Authentication} />
    </Switch>
  </Router>
);

export default Routes;
