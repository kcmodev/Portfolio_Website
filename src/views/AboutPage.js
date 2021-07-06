import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { linkedin_url } from './LandingPage';

import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import CopyrightFooter from '../components/CopyrightFooter';
import SkillAvatars from '../components/SkillAvatars';

const about_me_text_1 =
  'Hello! My name is Steve. I have been obsessed with computers, and technology in general, for ' +
  'as long as I can remember. I have done a little bit of everything from programming ' +
  'microcontrollers to standing up my own media server with dedicated network attached ' +
  'storage running on Linux. I have always enjoyed taking electronics apart, working on them, ' +
  'fixing whatever I did up to that point, and then putting it back together into something ' +
  'better than how I found it.';

const about_me_text_2 =
  'I enjoy full stack development and cybersecurity. I am especially interested in opportunities where the two intersect. ' +
  'I have always enjoyed working on the stuff under the hood (network routing, automation etc) ' +
  'so I really enjoy working with things like Node.js and MongoDB as well. I am also passionate about cybersecurity spend a ' +
  'considerable amount of time ensuring my applications are secure. If ' +
  "you have any questions, inquiries for a bid on development work, or a potential job opportunity please don't hesitate " +
  'to reach out on ';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke'
  },
  padTop: {
    paddingTop: theme.spacing(2)
  }
}));

const AboutPage = () => {
  document.title = 'AboutPage';
  const classes = useStyle();

  return (
    <Container maxWidth={'sm'}>
      <Navbar />

      <ProfileAvatar />

      <Container>
        <Typography
          align={'center'}
          className={classes.root}
          gutterBottom={true}
          paragraph={true}
        >
          {about_me_text_1}
        </Typography>
      </Container>

      <Container className={classes.padTop}>
        <Typography align={'center'} className={classes.root}>
          {about_me_text_2}
          <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
            LinkedIn
          </a>
          {'.'}
        </Typography>
      </Container>

      <SkillAvatars
        props={{ python: true, java: true, javascript: true, node: true }}
      />
      <SkillAvatars props={{ react: true, html: true, css: true }} />

      <CopyrightFooter />
    </Container>
  );
};

export default AboutPage;
