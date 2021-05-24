import { makeStyles, Container, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import login_screen from '../images/ml_app_login_screen.png';
import vitals_screen from '../images/ml_app_vitals_screen.png';
import results_screen from '../images/ml_app_results_screen.png';
import React from 'react';

const ml_app_location = 'https://cvd-detection-wgu.herokuapp.com';
const ml_app_source_location =
  'https://github.com/kcmodev/cvd_detection_ml_app_206';

const intro_paragraph_1 =
  'This is a machine learning program developed as part of my computer science ' +
  'curriculum. It uses Python and Sci-Kit to train and use a Random Forest Classifier machine learning model ' +
  "to predict the user's risk of developing cardiovascular disease.";

const intro_paragraph_2 =
  'Flask is used for the backend to handle routing and user authentication. The front end uses ' +
  'HTML and CSS for styling and layout. Additionally, Postgres is used to handle storing user credentials for login ' +
  'with every password being hashed to reduce the likelihood of being intercepted during authentication. This process ' +
  'also prevents users from accessing unauthorized areas of the program.';

const login_screen_paragraph =
  'Upon navigating to the landing page you are met with a login screen. This page uses the flask_login library and ' +
  'Postgres to verify the correct credentials were entered for the user to gain access to the remaining portions of ' +
  'the application. ';

const vitals_screen_paragraph =
  'Next the user is met with a screen to enter their latest set of lab values as well as a ' +
  'brief questionnaire to asses their risk based on lifestyle choices.';

const results_screen_paragraph =
  'Upon completion of those steps the user is redirected to a results screen where they ' +
  'can view their risk approximation determined the the machine learning algorithm.';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    paddingBottom: theme.spacing(2)
  },
  login_image: {
    // transform: 'scale(1)'
    // height: 200,
    // width: 275
  },
  vitals_image: {
    // transform: 'scale(0.8)'
    // height: 620,
    // width: 300
  },
  results_image: {
    // transform: 'scale(0.8)'
  },
  flex_center: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2)
  },
  cardRoot: {
    maxWidth: 375,
    backgroundColor: 'whitesmoke',
    background:
      'linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) )',
    margin: theme.spacing(2)
  }
}));

const PythonPage = () => {
  document.title = 'Python';
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container maxWidth={'sm'}>
        <Typography variant={'h3'} align={'center'} className={classes.root}>
          Machine Learning Application
        </Typography>
        <Typography align={'center'} className={classes.root}>
          {intro_paragraph_1}
        </Typography>
        <Typography align={'center'} className={classes.root}>
          {intro_paragraph_2}
        </Typography>
        <Typography align={'center'} className={classes.root}>
          The repository containing the source code for this project can be
          found{' '}
          <a href={ml_app_source_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            here
          </a>
          .
        </Typography>
      </Container>

      <Container maxWidth={'sm'} className={classes.flex_center}>
        <Card className={classes.cardRoot}>
          <Container>
            <CardMedia
              component="img"
              alt="login screen image"
              image={login_screen}
              title="Python Program"
            />
          </Container>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login Screen
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {login_screen_paragraph}
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth={'sm'} className={classes.flex_center}>
        <Card className={classes.cardRoot}>
          <Container>
            <CardMedia
              component="img"
              alt="vitals screen image"
              image={vitals_screen}
              title="Python Program"
            />
          </Container>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Vitals Screen
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {vitals_screen_paragraph}
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth={'sm'} className={classes.flex_center}>
        <Card className={classes.cardRoot}>
          <Container>
            <CardMedia
              component="img"
              alt="results screen image"
              image={results_screen}
              title="Python Program"
            />
          </Container>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Results Screen
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {results_screen_paragraph}
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth={'sm'}>
        <Typography align={'center'} className={classes.root}>
          You can interact with the live production app on
          <a href={ml_app_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            Heroku
          </a>
          . You will need the default credentials of username "admin" and
          password "admin" to log in and access all areas of the application.
        </Typography>
      </Container>

      <SkillAvatars
        props={{
          python: true,
          html: true,
          css: true,
          description: true
        }}
      />

      <CopyrightFooter />
    </>
  );
};

export default PythonPage;
