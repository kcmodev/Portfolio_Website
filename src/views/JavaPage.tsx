import { makeStyles, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';

// const java_project_description_1 =
//   'This program is an appointment management application to be used by a sales team to manage the location and ' +
//   'time of upcoming appointments. The primary language used in development is Java with Scenebuilder used for ' +
//   'designing the front end. It is a standalone desktop application that also uses MySQL in the backend for data persistence.';

const useStyle = makeStyles(() => ({
  root: {
    color: 'whitesmoke'
  }
}));

const JavaPage = () => {
  document.title = 'Java';
  const classes = useStyle();

  return (
    <>
      <>
        <Navbar />

        <Typography variant={'h3'} align={'center'} className={classes.root}>
          Appointment Management Application
        </Typography>
      </>

      <SkillAvatars props={{ java: true, description: true }} />
    </>
  );
};

export default JavaPage;
