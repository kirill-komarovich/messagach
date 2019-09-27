import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';
import I18n from "i18next";
import { I18N_FORMAT_TYPES } from '../../constants';

const Fields = (props) => {
  const { email: { value: email }, password: { value: password } }= props;

  const onChange = React.useCallback(({ target: { value, name } }) => {
    props[name].onChange(value)
  }, [props]);

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
          label={ I18n.format(I18n.t('attributes.email'), I18N_FORMAT_TYPES.capitalize) }
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          required
          fullWidth
          label={ I18n.format(I18n.t('attributes.password'), I18N_FORMAT_TYPES.capitalize) }
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={onChange}
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
