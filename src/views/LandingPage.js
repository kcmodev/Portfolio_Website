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
  'and please feel free to contact me with any inquiries.';

const ml_app_url = 'https://cvd-detection-wgu.herokuapp.com/';

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
      <ProfilePicture />
      <div className="content_container">
        <p id="section_text">{intro_paragraph_text}</p>
      </div>
      <SkillDisplay
        props={{
          python: true,
          javascript: true,
          react: true
        }}
      />
      <Copyright />
    </>
  );
};

export default LandingPage;
