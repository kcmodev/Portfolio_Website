import { useEffect } from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import ProfileAvatar from '../components/ProfileAvatar';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';

const intro_paragraph_text =
  'Hello! My name is Steve and I am a Full Stack Software Developer. ' +
  'I graduated from Western Governors University with a Bachelor of Science in Computer Science. ' +
  'I am open to part-time, full-time, or contract work. ' +
  'Please check below for links to a few of my personal projects and github repositories. Thank you for visiting ' +
  'and please feel free to contact me with any inquiries on ';

const ml_app_url = 'https://cvd-detection-wgu.herokuapp.com/';
const linkedin_url = 'https://www.linkedin.com/in/stevenc21/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: 'auto'
  },
  section_text: {
    textAlign: 'center',
    color: 'whitesmoke'
  }
}));

const LandingPage = () => {
  const classes = useStyles();

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

      <ProfileAvatar />

      <Container maxWidth={'md'}>
        <Typography gutterBottom={true} className={classes.section_text}>
          {intro_paragraph_text}
          <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
            LinkedIn
          </a>
          {'.'}
        </Typography>
      </Container>

      <SkillAvatars
        props={{
          python: true,
          javascript: true,
          react: true
        }}
      />

      <CopyrightFooter />
    </>
  );
};

export default LandingPage;
