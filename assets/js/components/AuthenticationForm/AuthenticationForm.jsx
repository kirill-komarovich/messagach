import React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';
import Fields from './Fields';
import Actions from './Actions';

const AuthenticationForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = React.useCallback((event) => {
    event.preventDefault();

    console.log('Submited')
  }, [])

  const emailField = React.useMemo(() => ({
    value: email,
    onChange: setEmail,
  }), [email])

  const passwordField = React.useMemo(() => ({
    value: password,
    onChange: setPassword,
  }), [password])

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardContent>
          <Fields
            email={emailField}
            password={passwordField}
          />
        </CardContent>
        <CardActions>
          <Actions onSubmit={onSubmit} />
        </CardActions>
      </Card>
    </form>
  );
};

export default AuthenticationForm;
