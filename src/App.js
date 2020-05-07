import React from 'react';
import {
  Grommet,
} from 'grommet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => (
  <Grommet theme={theme} full>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Grommet>
);

export default App;
