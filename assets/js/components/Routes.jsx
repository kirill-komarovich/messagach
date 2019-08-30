import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Root from './Root';
import history from '../history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Root}/>
      </Switch>
    </Router>
  );
};

export default Routes;
