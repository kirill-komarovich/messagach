import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';

const Fields = ({ email, password }) => {
  const onEmailChange = React.useCallback(({ target: { value } }) => {
    email.onChange(value)
  }, [email]);
  const onPasswordChange = React.useCallback(({ target: { value } }) => {
    password.onChange(value)
  }, [password]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={8}>
        <TextField
          required
          fullWidth
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email.value}
          onChange={onEmailChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          value={password.value}
          onChange={onPasswordChange}
        />
      </Grid>
    </Grid>
  );
};

const fieldShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
});

Fields.propTypes = {
  email: fieldShape.isRequired,
  password: fieldShape.isRequired,
}

export default Fields;
