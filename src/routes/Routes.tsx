import { Route, Switch } from 'react-router-dom';
import {
  java_projects_route,
  password_generator_route,
  python_projects_route,
  react_projects_route,
  about_me_route,
  resume_route
} from './route_names';
import Password_Generator_Page from '../views/JavascriptPage';
import Java_Projects_Page from '../views/JavaPage';
import Python_Projects_Page from '../views/PythonPage';
import React_Projects_Page from '../views/ReactPage';
import AboutPage from '../views/AboutPage';
import ResumePage from '../views/ResumePage';

const Routes = () => {
  return (
    <Route>
      <Switch>
        <Route
          exact
          path={password_generator_route}
          component={Password_Generator_Page}
        />
        <Route
          exact
          path={java_projects_route}
          component={Java_Projects_Page}
        />
        <Route
          exact
          path={python_projects_route}
          component={Python_Projects_Page}
        />
        <Route
          exact
          path={react_projects_route}
          component={React_Projects_Page}
        />
        <Route exact path={about_me_route} component={AboutPage} />
        <Route exact path={resume_route} component={ResumePage} />
      </Switch>
    </Route>
  );
};

export default Routes;
