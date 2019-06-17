import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Container from '@material-ui/core/Container';
import Routes from './Routes';
import theme from '../utils/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Routes />
    </Container>
  </ThemeProvider>
);

export default App;
