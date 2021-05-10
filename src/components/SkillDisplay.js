import React from 'react';
import { Link } from 'react-router-dom';

import {
  java_projects_route,
  password_generator_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';

import python_icon from '../icons/python_logo.png';
import javascript_icon from '../icons/javascript_logo.png';
import java_icon from '../icons/java_logo.png';
import react_icon from '../icons/react_logo.svg';
import html_icon from '../icons/html_logo.png';
import css_icon from '../icons/css_logo.svg';
import node_js_icon from '../icons/node_js_logo.png';

const python_logo_alt_text = 'python programming language logo';
const java_logo_alt_text = 'java programming language logo';
const js_logo_alt_text = 'javascript programming language logo';
const react_logo_alt_text = 'react framework logo';
const html_logo_alt_text = 'html 5 logo';
const css_logo_alt_text = 'css 3 logo';
const node_js_logo_alt_text = 'node js logo';

const SkillDisplay = (values = false) => {
  // destructure values
  let {
    python,
    javascript,
    java,
    react,
    description,
    css,
    html,
    node
  } = values.props;

  // conditionally display skills logos
  return (
    <>
      {description && (
        <div className={'container text-center'}>
          <p>This app uses the following frameworks/technologies:</p>
        </div>
      )}
      <div className={'container flex center-flex'}>
        {python && (
          <div>
            <Link to={python_projects_route}>
              <img
                className={'small-margin opaque'}
                src={python_icon}
                alt={python_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {javascript && (
          <div>
            <Link to={password_generator_route}>
              <img
                className={'small-margin opaque'}
                src={javascript_icon}
                alt={js_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {java && (
          <div>
            <Link to={java_projects_route}>
              <img
                className={'small-margin opaque'}
                src={java_icon}
                alt={java_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {react && (
          <div>
            <Link to={react_projects_route}>
              <img
                className={'small-margin opaque'}
                src={react_icon}
                alt={react_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {html && (
          <div>
            <img
              className={'small-margin'}
              src={html_icon}
              alt={html_logo_alt_text}
            />
          </div>
        )}
        {css && (
          <div>
            <img
              className={'small-margin'}
              src={css_icon}
              alt={css_logo_alt_text}
            />
          </div>
        )}
        {node && (
          <div>
            <img
              className={'small-margin'}
              src={node_js_icon}
              alt={node_js_logo_alt_text}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SkillDisplay;
