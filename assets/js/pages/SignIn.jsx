import React from 'react';
import { Grid } from '@material-ui/core';
import AuthenticationForm from '../components/AuthenticationForm/AuthenticationForm';

const SignIn = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid item xs={6}>
      <AuthenticationForm />
    </Grid>
  </Grid>
);

export default SignIn;
