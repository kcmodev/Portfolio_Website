import { makeStyles, Container, Typography } from '@material-ui/core';

import ProfileAvatar from '../components/ProfileAvatar';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';
import SkillCards from '../components/SkillCards';

const intro_paragraph_text =
  'Hello! My name is Steve and I am a Full Stack Software Developer. ' +
  'I graduated from Western Governors University with a Bachelor of Science in Computer Science. ' +
  'Please check below for links to my personal projects and github repositories. ';

const intro_paragraph_text_2 =
  'Thank you for visiting and please feel free to contact me with any inquiries on ';

export const linkedin_url = 'https://www.linkedin.com/in/stevenc21/';
export const github_url = 'https://github.com/kcmodev';

const useStyles = makeStyles(() => ({
  root: {
    flexBasis: 'auto',
  },
  section_text: {
    display: 'flex',
    alignContent: 'center',
    textAlign: 'center',
    color: 'whitesmoke',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar current_page={'Landing'} />

      <ProfileAvatar />

      <Container maxWidth={'md'}>
        <Typography
          gutterBottom={true}
          className={classes.section_text}
          variant={'h6'}
        >
          {intro_paragraph_text}
        </Typography>

        <Typography
          gutterBottom={true}
          className={classes.section_text}
          variant={'h6'}
        >
          {intro_paragraph_text_2}
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
