import React from 'react';
import PasswordGenerator from '../components/PasswordGenerator';
import SkillDisplay from '../components/SkillDisplay';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

const javascript_projects_description_text =
  'The following application is a secure password generator. I have a passion for Cybersecurity and am always on ' +
  'the lookout for useful tools. Other password generation tools do exist. However, I was not satisfied with their ' +
  'implementation so I made my own. As you can see this implementation provides a lot of granularity for selecting elements such ' +
  'as which special characters you specifically allow to include as well as the length of the password returned. These ' +
  'options allow you to avoid the pitfalls of generating passwords with characters not accepted by the program it was ' +
  'created to be used with.';

const JSProjects = () => {
  document.title = 'JavaScript';
  return (
    <>
      <Navbar />
      <div className="content_container mobile_flex_wrap">
        <h1 id="page_title_text">Secure Password Generator</h1>
      </div>
      <div className="content_container">
        <p id="section_text">{javascript_projects_description_text}</p>
      </div>

      <div className="content_container mobile_flex_wrap mt-50">
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
      <Copyright />
    </>
  );
};

export default JSProjects;
