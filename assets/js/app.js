import '../css/app.scss';

import 'phoenix_html';
import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
