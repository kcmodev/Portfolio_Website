import { Route, Switch } from 'react-router-dom';
import {
  java_projects_route,
  javascript_projects_route,
  python_projects_route,
  react_projects_route,
  about_me_route
} from './route_names';
import JS_Projects_Page from '../views/JSProjects';
import Java_Projects_Page from '../views/JavaProjects';
import Python_Projects_Page from '../views/PythonProjects';
import React_Projects_Page from '../views/ReactProjects';
import AboutPage from '../views/AboutPage';

const Routes = () => {
  return (
    <Route>
      <Switch>
        <Route
          exact
          path={javascript_projects_route}
          component={JS_Projects_Page}
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
      </Switch>
    </Route>
  );
};

export default Routes;
