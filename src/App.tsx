import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { Fragment } from 'react';

import LandingPage from './views/LandingPage';
import Routes from './routes/Routes';
import { landing_page_route } from './routes/route_names';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path={landing_page_route} component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
