import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import { Container, makeStyles, Typography } from '@material-ui/core';
import CopyrightFooter from '../components/CopyrightFooter';

const oreilly = {
  title: "O'Reilly Auto Parts // Software Developer",
  dates: 'October 2021',
  description: {
    1: 'Java Developer working on the inventory system for store team members to quickly and accurately retrieve information about items.',
    2: 'Participate in code reviews and bug fixes.',
  },
};

const battle_within = {
  title: 'The Battle Within // Web Developer // Volunteer',
  dates: 'August 2021',
  description: {
    1: 'Manage online presence with Wix CMS enabling community members to access information about upcoming events and the organization.',
    2: 'Used custom scripting and process creation to manage creation of new pages with styles automatically configured.',
    3: 'Eliminated duplicate work and bugs to create a more seamless end-user experience.',
  },
};

const header_font = 'h6';
const text_font = 'body1';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: 'whitesmoke',
    justifyContent: 'flex-start',
  },
  padTop: {
    paddingTop: theme.spacing(4),
  },
  padBottom: {
    paddingBottom: theme.spacing(4),
  },
}));

const ResumePage = () => {
  document.title = 'Resume';
  let classes = useStyle();

  return (
    <>
      <Navbar current_page={'Resume'} />
      <ProfileAvatar />

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={header_font}
        >
          {oreilly.title}
        </Typography>

        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={header_font}
        >
          {oreilly.dates}
        </Typography>

        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={text_font}
        >
          <ul>
            <li>{oreilly.description['1']}</li>
            <li>{oreilly.description['2']}</li>
          </ul>
        </Typography>
      </Container>

      <Container className={classes.padBottom} maxWidth={'md'}>
        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={header_font}
        >
          {battle_within.title}
        </Typography>

        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={header_font}
        >
          {battle_within.dates}
        </Typography>

        <Typography
          className={classes.root}
          gutterBottom={true}
          variant={text_font}
        >
          <ul>
            <li>{battle_within.description['1']}</li>
            <li>{battle_within.description['2']}</li>
            <li>{battle_within.description['3']}</li>
          </ul>
        </Typography>
      </Container>

      <CopyrightFooter />
    </>
  );
};

export default ResumePage;
