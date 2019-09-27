import React from 'react';
import PropTypes from 'prop-types';
import AuthenticationApi from '../api/authentication';
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      const response = await AuthenticationApi.info();

      if (response.httpStatus == 200) {
        setAuthenticated(true);
      }
    };
    checkAuth();
  }, [])

  const render = React.useCallback(({ location, ...restProps }) => (
    authenticated ? (
      <Component {...restProps} location={location} />
    ) : (
      <Redirect
        to={{
          pathname: "/sign-in",
          state: { from: location }
        }}
      />
    )), [authenticated]);

  return (
    <Route {...rest} render={render} />
  );
};


AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default AuthenticatedRoute;
