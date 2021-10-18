import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

import PasswordGenerator from '../components/PasswordGenerator';
import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';

import { pass_gen_source_location } from '../components/SkillCards';

const javascript_projects_description_text =
  'The following application is a secure password generator. I have a passion for Cybersecurity and am always on ' +
  'the lookout for useful tools. Other password generation tools do exist. However, I was not satisfied with their ' +
  'implementation so I made my own. As you can see this implementation provides a lot of granularity for selecting elements such ' +
  'as which special characters you specifically allow to include as well as the length of the password returned. These ' +
  'options allow you to avoid the pitfalls of generating passwords with characters not accepted by the program it was ' +
  'created to be used with.';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    paddingBottom: theme.spacing(2)
  }
}));

const JavascriptPage = () => {
  document.title = 'JavaScript';
  const classes = useStyles();

  return (
    <>
      <Navbar />

      <Container maxWidth={'md'}>
        <Typography
          variant={'h3'}
          align={'center'}
          gutterBottom={true}
          className={classes.root}
        >
          Secure Password Generator
        </Typography>

        <Typography
          align={'center'}
          gutterBottom={true}
          className={classes.root}
          variant={'body1'}
        >
          {javascript_projects_description_text}
        </Typography>

        <Typography
          align={'center'}
          gutterBottom={true}
          className={classes.root}
          variant={'body1'}
        >
          The repository containing the source code for this project can be
          found
          <a
            href={pass_gen_source_location}
            target={'_blank'}
            rel={'noreferrer'}
          >
            {' '}
            here
          </a>
          {'.'}
        </Typography>
      </Container>

      <Container maxWidth={'md'}>
        <Typography
          variant={'h4'}
          align={'center'}
          className={classes.root}
          gutterBottom={true}
        >
          {'Select acceptable special characters:'}
        </Typography>
      </Container>

      <PasswordGenerator />

      <SkillAvatars
        props={{
          javascript: true,
          react: true,
          description: true
        }}
      />

      <CopyrightFooter />
    </>
  );
};

export default JavascriptPage;
