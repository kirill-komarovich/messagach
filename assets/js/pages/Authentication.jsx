import React from 'react';
import { Grid } from '@material-ui/core';
import AuthenticationForm from '../components/AuthenticationForm/AuthenticationForm';

const Authentication = () => (
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

export default Authentication;
