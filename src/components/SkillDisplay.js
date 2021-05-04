import React from 'react';
import { Link } from 'react-router-dom';
import {
  java_projects_route,
  javascript_projects_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';
import { programming_language_icon } from '../styles/styling_variables';
import python_icon from '../icons/python_logo.png';
import {
  java_logo_alt_text,
  js_logo_alt_text,
  python_logo_alt_text,
  react_logo_alt_text
} from '../views/text_variables';
import javascript_icon from '../icons/javascript_logo.png';
import java_icon from '../icons/java_logo.png';
import react_icon from '../icons/react_logo.svg';

const SkillDisplay = (values = false) => {
  let { python, javascript, java, react, description } = values.props;

  // conditionally display skills logos
  return (
    <>
      {description && (
        <p id="section_text">
          This app uses the following frameworks/technologies:
        </p>
      )}
      <div className="skills_container">
        {python && (
          <div className="python_container">
            <Link to={python_projects_route}>
              <img
                className={programming_language_icon}
                src={python_icon}
                alt={python_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {javascript && (
          <div className="javascript_container">
            <Link to={javascript_projects_route}>
              <img
                className={programming_language_icon}
                src={javascript_icon}
                alt={js_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {java && (
          <div className="java_container">
            <Link to={java_projects_route}>
              <img
                className={programming_language_icon}
                src={java_icon}
                alt={java_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {react && (
          <div className="react_container">
            <Link to={react_projects_route}>
              <img
                className={programming_language_icon}
                src={react_icon}
                alt={react_logo_alt_text}
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SkillDisplay;
