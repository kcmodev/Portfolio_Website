import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import Routes from './components/routes/Routes';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
