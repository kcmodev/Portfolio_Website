import React from 'react';

import PasswordGenerator from '../components/PasswordGenerator';
import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

const javascript_projects_description_text =
  'The following application is a secure password generator. I have a passion for Cybersecurity and am always on ' +
  'the lookout for useful tools. Other password generation tools do exist. However, I was not satisfied with their ' +
  'implementation so I made my own. As you can see this implementation provides a lot of granularity for selecting elements such ' +
  'as which special characters you specifically allow to include as well as the length of the password returned. These ' +
  'options allow you to avoid the pitfalls of generating passwords with characters not accepted by the program it was ' +
  'created to be used with.';

const JavascriptPage = () => {
  document.title = 'JavaScript';
  return (
    <>
      <Navbar />

      <section className={'container text-center'}>
        <div className={'container container--narrow'}>
          <h2>Secure Password Generator</h2>
        </div>
        <p>{javascript_projects_description_text}</p>
      </section>

      <section className={'container text-center'}>
        <h2>Select acceptable special characters:</h2>
      </section>

      <PasswordGenerator />

      <SkillAvatars
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

export default JavascriptPage;
