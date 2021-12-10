import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import { Container, makeStyles, Typography } from '@material-ui/core';
import CopyrightFooter from '../components/CopyrightFooter';

const oreilly = {
  title: 'O\'Reilly Auto Parts | Software Developer',
  dates: 'October 2021',
  description: 'Worked on 1, 2, 3, 4... Testing...'
};

const battle_within = {
  title: 'The Battle Within | Web Developer | Volunteer',
  dates: 'August 2021',
  description: 'Worked on 1, 2, 3, 4... Testing...'
};

const header_font = 'h6';
const text_font = 'body1';

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

const ResumePage = () => {
  document.title = 'Resume';
  let classes = useStyle();

  return (
    <>
      <Navbar current_page={'Resume'}/>
      <ProfileAvatar />

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography className={classes.root} gutterBottom={true}
                    variant={header_font}>
          {oreilly.title}</Typography>
        <Typography className={classes.root} gutterBottom={true}
                    variant={text_font}>
          {oreilly.description}</Typography>
      </Container>

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography className={classes.root} gutterBottom={true} variant={header_font}>{battle_within.title}</Typography>
        <Typography className={classes.root} gutterBottom={true} variant={text_font}>{battle_within.description}</Typography>
      </Container>

      <CopyrightFooter />
    </>
  );
};

export default ResumePage;
