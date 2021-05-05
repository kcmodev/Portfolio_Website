import React from 'react';
import { Link } from 'react-router-dom';

import {
  java_projects_route,
  javascript_projects_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';
import python_icon from '../icons/python_logo.png';

import {
  java_logo_alt_text,
  js_logo_alt_text,
  python_logo_alt_text,
  react_logo_alt_text,
  html_logo_alt_text,
  css_logo_alt_text
} from '../views/text_variables';

import javascript_icon from '../icons/javascript_logo.png';
import java_icon from '../icons/java_logo.png';
import react_icon from '../icons/react_logo.svg';
import html_icon from '../icons/html_logo.png';
import css_icon from '../icons/css_logo.svg';

const programming_image = 'programming_language_img_container';
const programming_language_icon = 'programming_language_icon';

const SkillDisplay = (values = false) => {
  let {
    python,
    javascript,
    java,
    react,
    description,
    css,
    html
  } = values.props;

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
          <div className={programming_image}>
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
          <div className={programming_image}>
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
          <div className={programming_image}>
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
          <div className={programming_image}>
            <Link to={react_projects_route}>
              <img
                className={programming_language_icon}
                src={react_icon}
                alt={react_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {html && (
          <div className={programming_image}>
            <img
              className={programming_language_icon}
              src={html_icon}
              alt={html_logo_alt_text}
            />
          </div>
        )}
        {css && (
          <div className={programming_image}>
            <img
              className={programming_language_icon}
              src={css_icon}
              alt={css_logo_alt_text}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SkillDisplay;
