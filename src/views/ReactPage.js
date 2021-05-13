import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke'
  }
}));

const ReactPage = () => {
  document.title = 'React';
  const classes = useStyle();

  return (
    <>
      <Container maxWidth={'sm'}>
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
