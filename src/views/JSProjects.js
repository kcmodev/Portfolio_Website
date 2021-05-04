import React, { Fragment } from 'react';
import javascript_icon from '../icons/javascript_logo.png';
import {
  javascript_projects_title_text,
  js_logo_alt_text
} from './text_variables';
import PasswordGenerator from '../components/PasswordGenerator';
import SkillDisplay from '../components/SkillDisplay';
import { programming_language_icon } from '../styles/styling_variables';
import '../styles/projects.css';

const JSProjects = () => {
  return (
    <>
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

      <p id="section_text">This app uses the following technologies:</p>
      <SkillDisplay props={{ javascript: true, react: true }} />
    </>
  );
};

export default JSProjects;
