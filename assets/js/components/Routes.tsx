import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from './Root';

const Routes: React.FunctionComponent<{}> = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Root }/>
    </Switch>
  </Router>
);

export default Routes;
