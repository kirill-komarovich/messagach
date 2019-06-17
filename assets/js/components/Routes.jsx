import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Root from './Root';
import AuthenticationForm from './AuthenticationForm';
import routes from '../utils/routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.root} component={Root} />
      <Route path={routes.signIn} component={AuthenticationForm} />
      {/* <Route exact path={routes.signUp} /> */}
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
