import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';

const Actions = ({ onSubmit }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Button type="submit" size="medium" color="primary" variant="contained" onClick={onSubmit}>
          Sign in
        </Button>
      </Grid>
    </Grid>
  );
};

Actions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Actions;
