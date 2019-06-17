import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Root from './Root';
import routes from '../utils/routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.root} component={Root} />
    </Switch>
  </BrowserRouter>
);

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('phoenixAuthToken') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default Routes;
