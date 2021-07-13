import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

import ProfileAvatar from '../components/ProfileAvatar';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';
import SkillCards from '../components/SkillCards';

const intro_paragraph_text =
  'Hello! My name is Steve and I am a Full Stack Software Developer. ' +
  'I graduated from Western Governors University with a Bachelor of Science in Computer Science. ' +
  'I am open to part-time, full-time, or contract work. ' +
  'Please check below for links to my personal projects and github repositories. Thank you for visiting ' +
  'and please feel free to contact me with any inquiries on ';

export const linkedin_url = 'https://www.linkedin.com/in/stevenc21/';

const useStyles = makeStyles(() => ({
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

  return (
    <>
      <Navbar props={{ on_landing_page: true }} />

      <ProfileAvatar />

      <Container maxWidth={'sm'}>
        <Typography gutterBottom={true} className={classes.section_text}>
          {intro_paragraph_text}
          <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
            LinkedIn
          </a>
          {'.'}
        </Typography>
      </Container>

      <SkillCards />

      <CopyrightFooter />
    </>
  );
};

export default LandingPage;
