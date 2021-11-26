import * as React from 'react';
import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import { Container, makeStyles, Typography } from '@material-ui/core';
import CopyrightFooter from '../components/CopyrightFooter';

const first_employer_name_and_title: string = "O'Reilly Auto Parts | Software Developer 1";
const first_employer_description: string = "Worked on 1, 2, 3, 4... Testing..."

const second_employer_name_and_title: string = "The Battle Within | Web Developer | Volunteer"
const second_employer_description: string = "Worked on 1, 2, 3, 4... Testing..."

const header_font = "h6";
const text_font = "body1";

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: 'whitesmoke',
    justifyContent: 'center'
  },
  padTop: {
    paddingTop: theme.spacing(4)
  },
  padBottom: {
    paddingBottom: theme.spacing(4)
  }
}));

const MyComponent = () => {
  let classes = useStyle();

  return (
    <>
      <Navbar />
      <ProfileAvatar />

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography className={classes.root} gutterBottom={true}
                    variant={header_font}>
          {first_employer_name_and_title}</Typography>
        <Typography className={classes.root} gutterBottom={true}
                    variant={text_font}>
          {first_employer_description}</Typography>
      </Container>

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography className={classes.root} gutterBottom={true} variant={header_font}>{second_employer_name_and_title}</Typography>
        <Typography className={classes.root} gutterBottom={true} variant={text_font}>{second_employer_description}</Typography>
      </Container>

      <CopyrightFooter />
    </>
  );
};

export default MyComponent;
