// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import '../css/app.scss';

import 'typeface-roboto';
import 'phoenix_html';
import React from 'react';
import ReactDOM from 'react-dom';

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
