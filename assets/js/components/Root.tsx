import I18n from 'i18next';
import React from 'react';

const Root: React.FunctionComponent<{}> = () => (
  <h1>{ I18n.t('welcome') }</h1>
);

export default Root;
