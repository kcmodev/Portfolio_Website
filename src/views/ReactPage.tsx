import { makeStyles, Container, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';

const useStyle = makeStyles(() => ({
  root: {
    color: 'whitesmoke'
  }
}));

const ReactPage = () => {
  document.title = 'React';
  const classes = useStyle();

  return (
    <>
      <Container maxWidth={'md'}>
        <Navbar />

        <Typography variant={'h3'} align={'center'} className={classes.root}>
          React Projects
        </Typography>
      </Container>

      <SkillAvatars
        props={{
          javascript: true,
          react: true,
          html: true,
          css: true,
          description: true
        }}
      />

      <CopyrightFooter />
    </>
  );
};

export default ReactPage;
