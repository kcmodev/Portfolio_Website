import React, { Fragment } from 'react';
import javascript_icon from '../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import PasswordGenerator from '../components/PasswordGenerator';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';

const JSProjects = () => {
  return (
    <Fragment>
      <div className="project_title_section">
        <img
          className={programming_language_icon}
          src={javascript_icon}
          alt={js_logo_alt_text}
        />
        <p id="section_text">{javascript_projects_title_text}</p>
      </div>

      <div className="user_selections">
        <h1 id="section_title">Select acceptable special characters:</h1>
      </div>
      <PasswordGenerator />
    </Fragment>
  );
};

export default JSProjects;
