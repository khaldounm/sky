import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import Results from './pages/Results';
import Details from './pages/Details';
import NoMatch from './pages/NoMatch';

const theme = createMuiTheme({
  palette: {
    type: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
    primary: {
      light: '#2D7AF1',
      main: '#FF9E00',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

const routing = (
  <Router>
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/results" component={Results} />
          <Route path="/details" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </MuiThemeProvider>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));