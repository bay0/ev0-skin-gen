import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.sass';
import { ThemeProvider } from '@material-ui/core/styles';
import  { CssBaseline } from '@material-ui/core';
import { theme } from './Components/Theme';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
