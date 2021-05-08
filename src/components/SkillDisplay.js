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

const programming_language_image_container_class =
  'programming_language_img_container padding_10';
const programming_language_icon_class = 'programming_language_icon';

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
        <p id="section_text">
          This app uses the following frameworks/technologies:
        </p>
      )}
      <div className="content_container" id="skill_icon_group">
        {python && (
          <div className={programming_language_image_container_class}>
            <Link to={python_projects_route}>
              <img
                className={programming_language_icon_class}
                src={python_icon}
                alt={python_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {javascript && (
          <div className={programming_language_image_container_class}>
            <Link to={password_generator_route}>
              <img
                className={programming_language_icon_class}
                src={javascript_icon}
                alt={js_logo_alt_text}
              />
            </Link>
          </div>
        )}
        {java && (
          <div className={programming_language_image_container_class}>
            {/*<Link to={java_projects_route}>*/}
            <img
              className={programming_language_icon_class}
              src={java_icon}
              alt={java_logo_alt_text}
            />
            {/*</Link>*/}
          </div>
        )}
        {react && (
          <div className={programming_language_image_container_class}>
            {/*<Link to={react_projects_route}>*/}
            <img
              className={programming_language_icon_class}
              src={react_icon}
              alt={react_logo_alt_text}
            />
            {/*</Link>*/}
          </div>
        )}
        {html && (
          <div className={programming_language_image_container_class}>
            <img
              className={programming_language_icon_class}
              src={html_icon}
              alt={html_logo_alt_text}
            />
          </div>
        )}
        {css && (
          <div className={programming_language_image_container_class}>
            <img
              className={programming_language_icon_class}
              src={css_icon}
              alt={css_logo_alt_text}
            />
          </div>
        )}
        {node && (
          <div className={programming_language_image_container_class}>
            <img
              className={programming_language_icon_class}
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
