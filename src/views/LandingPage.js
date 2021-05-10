import { useEffect } from 'react';
import SkillDisplay from '../components/SkillDisplay';
import ProfilePicture from '../components/ProfilePicture';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

const intro_paragraph_text =
  'Hello! My name is Steve and I am a Full Stack Software Developer. ' +
  'I graduated from Western Governors University with a Bachelor of Science in Computer Science. ' +
  'I am open to part-time, full-time, or contract work. ' +
  'Please check below for links to a few of my personal projects and github repositories. Thank you for visiting ' +
  'and please feel free to contact me with any inquiries on ';

const ml_app_url = 'https://cvd-detection-wgu.herokuapp.com/';
const linkedin_url = 'https://www.linkedin.com/in/stevenc21/';

const LandingPage = () => {
  const request = new Request(ml_app_url, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  });

  // Send GET request to Heroku to wake app
  useEffect(() => {
    fetch(request).then(() => console.log('Request sent'));
  });

  return (
    <>
      <Navbar props={{ on_landing_page: true }} />

      <section className={'container flex center-flex'}>
        <ProfilePicture />
      </section>

      <section className={'container text-center'}>
        <p>
          {intro_paragraph_text}
          <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
            LinkedIn
          </a>
          {'.'}
        </p>
      </section>

      <section>
        <SkillDisplay
          props={{
            python: true,
            javascript: true,
            react: true
          }}
        />
      </section>

      <Copyright />
    </>
  );
};

export default LandingPage;
