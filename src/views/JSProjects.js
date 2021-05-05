import React from 'react';
import { javascript_projects_title_text } from './text_variables';
import PasswordGenerator from '../components/PasswordGenerator';
import SkillDisplay from '../components/SkillDisplay';
import '../styles/projects.css';

const JSProjects = () => {
  document.title = 'JavaScript';
  return (
    <>
      <div className="content_container">
        <h1 id="page_title_text">Secure Password Generator</h1>
      </div>
      <div className="project_title_section">
        <p id="section_text">{javascript_projects_title_text}</p>
      </div>

      <div className="user_selections">
        <h1 id="section_title_text">Select acceptable special characters:</h1>
      </div>
      <PasswordGenerator />
      <SkillDisplay
        props={{
          javascript: true,
          react: true,
          html: true,
          css: true,
          description: true
        }}
      />
    </>
  );
};

export default JSProjects;
