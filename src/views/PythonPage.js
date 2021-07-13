import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';
import ProfileAvatar from '../components/ProfileAvatar';

import { hvac_app_source_location } from '../components/SkillCards';

// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';


const rpi_about_us_location = 'https://www.raspberrypi.org/about/';
const rpi_os_image_location = 'https://www.raspberrypi.org/software/operating-systems/';
const rpi_gpiozero_doc_location = 'https://gpiozero.readthedocs.io/en/stable/';
const l298n_doc_location = 'http://www.handsontec.com/dataspecs/L298N%20Motor%20Driver.pdf';

const paragraph_1 =
  'The purpose of this project was to find a way to disperse an aerosol air freshener throughout my entire home ventilation ' +
  'system. This would reduce the cost of buying either candles or cans of air freshener and would be better for ' +
  'the environment by reducing waste. ';

const paragraph_2 =
  'The project started with a Raspberry Pi and a generic off the shelf aerosol can sprayer. My thought process being that I wanted it ' +
  'to accept a readily available style of can in the scent that we preferred and be simplistic in design to make repairs easier. Also, regardless of how it was designed, at the end of the day it ' +
  'should just be a DC motor actuating a movable part to spray the can. Additionally, I wanted to be able to actuate the motor manually with my phone if, for ' +
  'instance, we have guests over.';

const paragraph_3 = 'First, I navigated to the';
const paragraph_3_1 = 'and downloaded the latest version of';
const paragraph_3_2 = 'Then, for setting up the development environment, I decided to use the library';
const paragraph_3_3 = 'to program the pins for their desired function.';

const paragraph_4 = 'From that point the project needed to be wired up to a motor controller board. I chose to go with the';
const paragraph_4_1 = 'I then wired the controller to the pi and programmed the pi to cycle the motor. After completing that I ' +
  'signed up for a developer account with google and authorized my account for API access following their instructions.';

const paragraph_5 = 'Then it was a matter of programming to algorithm to make the api calls and coordinate that with the ' +
  'pi to actuate the motor. I settled on making a request every 5 minutes to check the status of the thermostat. Based on that ' +
  'response it would either cycle the motor or check again in 5 minutes. Logic was also included to not spray the air conditioner ' +
  'at night while we are sleeping to avoid unnecessary use.';

const paragraph_6 = 'The last stage of the project was to implement a method to manually spray the air freshener when desired. This ' +
  'was achieved with the Python framework Flask. It serves a simple (for now) website with a button that, when clicked, sends a ' +
  'command to the pi instructing it to cycle the motor and run the hvac system fan for 15 minutes effectively dispersing it throughout ' +
  'the home.';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    paddingBottom: theme.spacing(2)
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
      <Container maxWidth={'md'}>
        <ProfileAvatar />

        <Typography variant={'h3'} align={'center'} className={classes.root}>
          Smart Thermostat API Integration
        </Typography>

        <Typography variant={'h4'} align={'center'} className={classes.root}>
          (Pictures coming soon!)
        </Typography>

        <Typography align={'center'} className={classes.root}>
          {paragraph_1}
        </Typography>
        <Typography align={'center'} className={classes.root}>
          {paragraph_2}
        </Typography>

        <Typography align={'center'} className={classes.root}>
          {paragraph_3}
          <a href={rpi_about_us_location} target={'_blank'} rel={'noreferrer'}>
            {' '}Raspberry Pi Project
          </a>
          {' '}
          {paragraph_3_1}
          <a href={rpi_os_image_location} target={'_blank'} rel={'noreferrer'}>
            {' '}Raspberry Pi OS
          </a>
          {'. '}
          {paragraph_3_2}
          <a href={rpi_gpiozero_doc_location} target={'_blank'} rel={'noreferrer'}>
            {' '}GPIO Zero
          </a>
          {' '}
          {paragraph_3_3}
        </Typography>

        <Typography align={'center'} className={classes.root}>
          {paragraph_4}
          <a href={l298n_doc_location} target={'_blank'} rel={'noreferrer'}>
            {' '}L298N
          </a>
          {'. '}
          {paragraph_4_1}
        </Typography>

        <Typography align={'center'} className={classes.root}>
          {paragraph_5}
        </Typography>

        <Typography align={'center'} className={classes.root}>
          {paragraph_6}
        </Typography>

        <Typography align={'center'} className={classes.root}>
          The repository containing the source code for this project can be
          found{' '}
          <a href={hvac_app_source_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            here
          </a>
          .
        </Typography>
      </Container>

      <SkillAvatars
        props={{
          python: true,
          flask: true,
          description: true
        }}
      />

      <CopyrightFooter />
    </>
  );
};

export default PythonPage;
