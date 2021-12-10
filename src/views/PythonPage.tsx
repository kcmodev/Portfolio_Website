import { makeStyles, Container, Typography } from '@material-ui/core';

import SkillAvatars from '../components/SkillAvatars';
import Navbar from '../components/Navbar';
import CopyrightFooter from '../components/CopyrightFooter';
import ProfileAvatar from '../components/ProfileAvatar';

import { hvac_app_source_location } from '../components/SkillCards';
import controller_w_jumper from '../images/controller_with_jumper.jpg';
import controller_wo_jumper from '../images/controller_without_jumper.jpg';
import project_box_guts from '../images/project_box_inside.jpg';

const cont_w_jumper_alt = 'L298N motor controller board';
const cont_wo_jumper_alt =
  'L298N motor controller board with jumper connection removed';
const box_guts_alt = 'Project box containing microcontroller and various wires';

const rpi_about_us_location = 'https://www.raspberrypi.org/about/';
const rpi_os_image_location =
  'https://www.raspberrypi.org/software/operating-systems/';
const rpi_gpiozero_doc_location = 'https://gpiozero.readthedocs.io/en/stable/';
const l298n_doc_location =
  'http://www.handsontec.com/dataspecs/L298N%20Motor%20Driver.pdf';

const paragraph_1 =
  'The purpose of this project was to find a way to disperse an aerosol air freshener throughout my entire home ventilation ' +
  'system. This would reduce the cost of buying either candles or cans of air freshener and would be better for ' +
  'the environment by reducing waste. ';

const paragraph_2 =
  'The project started with a Raspberry Pi and a generic off the shelf aerosol can sprayer. My thought process being that I wanted it ' +
  'to accept a readily available style of can in the scent that we preferred and be simplistic in design to make repairs easier. Also, regardless of how it was designed, at the end of the day it ' +
  'should just be a DC motor actuating a movable part to spray the can. Additionally, I wanted to be able to actuate the motor manually with my phone if, for ' +
  'instance, we have guests over.';

const paragraph_3 = 'First, I downloaded';
const paragraph_3_1 = 'from';
const paragraph_3_2 =
  'Then, for setting up the development environment, I decided to use the library';
const paragraph_3_3 = 'to program the pins for their desired function.';

const paragraph_4 =
  'From that point the project needed to be wired up to a motor controller board. I chose to go with the';
const paragraph_4_1 =
  'I then wired the controller to the pi and programmed the pi to cycle the motor. After completing that I ' +
  'signed up for a developer account with google and authorized my account for API access following their instructions.';

const paragraph_5 =
  'This image shows the jumper that will need to be removed if you are not using a stepper motor. Since I am using a ' +
  'DC motor, and only one at that, I removed this jumper to expose the pins below.';

const paragraph_6 =
  'Now, for a breakdown of the L298N board. #1 and #2 are the DC motor + and - respectively. #3 is the power supply ' +
  "for the board itself. This needs to be a minimum of 5v and separate from the pi to avoid overloading it's pinout and damaging the Pi. " +
  'I chose to use a 10v usb wall charger. #4 is the ground for the board. This needs to be connected to both the discrete power supply and ' +
  "the Pi's ground. #5 is a 5v output powered by the power supply if needed. #6 is the pin to enable the board controller for the motor. " +
  'Simply sending this pin a high signal will allow the board to control the motor. If you want to use PWM to control your motor, connect #6 to ' +
  'a PWM pinout on the Pi. #7 and #8 are IN1 and IN2 respectively. This is use to control the motors direction. IN1 set to high and IN2 set to low ' +
  'will cause the motor to turn in one direction ane vice versa will cause it to turn in the other direction.';

const paragraph_7 =
  'Below is the complete project. #1 - There are several large holes for the fan here to pull air into th case with the idea being ' +
  'to push air over the heat sinks on the pi and the controller to the exhaust holes on the side at #2. #3 are the wires used to control the motor. ' +
  'Referencing the picture above; #6 is the enable pin which I connected to GPIO12, #7 is IN1 which I connected to GPIO23 used for making the motor ' +
  'move forward, lastly #8 is IN2 which I connected to GPIO24 to make the motor move in reverse. All the wires leading out of the case were soldered to ' +
  'quick release connectors for making repairs without needing to manage cumbersome cords.';

const paragraph_8 =
  'From there it was a matter of determining the method for making the api calls and coordinate that with the ' +
  'Pi to actuate the motor. I have a Google Nest thermostat so this was accomplished with their REST API. ' +
  'I settled on making a request every 5 minutes to check the status of the thermostat. Based on the ' +
  'response received it would either cycle the motor or check again in 5 minutes. Logic was also included to not spray the air conditioner ' +
  'at night while we are sleeping to avoid unnecessary use. This also used OAuth2 to ensure secure and authorized API calls.';

const paragraph_9 =
  'The last stage of the project was to implement a method to manually spray the air freshener when desired. This ' +
  'was achieved with the Python framework Flask. It serves a simple (for now) website with a button that, when clicked, sends a ' +
  'command to the pi instructing it to cycle the motor and run the hvac system fan for 15 minutes effectively dispersing it throughout ' +
  'the home. For improved security this is only accessible locally but it will be upgraded to a full fledged progressive web app as time ' +
  'goes on.';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    padding: theme.spacing(2),
    alignSelf: 'center'
  },
  flex_center: {
    display: 'flex',
    '&@media (max-width: 40em)': {
      flexWrap: 'wrap'
    },
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2)
  },
  centerImg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  },
  padImage: {
    paddingLeft: theme.spacing(2)
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

        <Typography
          variant={'h3'}
          align={'center'}
          className={classes.root}
          gutterBottom={true}
        >
          Smart Thermostat API Integration
        </Typography>

        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_1}
        </Typography>
        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_2}
        </Typography>

        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_3}
          <a href={rpi_os_image_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            Raspberry Pi OS
          </a>{' '}
          {paragraph_3_1}
          <a href={rpi_about_us_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            Raspberry Pi Project
          </a>
          {'. '}
          {paragraph_3_2}
          <a
            href={rpi_gpiozero_doc_location}
            target={'_blank'}
            rel={'noreferrer'}
          >
            {' '}
            GPIO Zero
          </a>{' '}
          {paragraph_3_3}
        </Typography>

        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_4}
          <a href={l298n_doc_location} target={'_blank'} rel={'noreferrer'}>
            {' '}
            L298N
          </a>
          {'. '}
          {paragraph_4_1}
        </Typography>
      </Container>

      <Container maxWidth={'md'} className={classes.flex_center}>
        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_5}
        </Typography>
        <img
          className={classes.padImage}
          src={controller_w_jumper}
          alt={cont_w_jumper_alt}
        />
      </Container>

      <Container maxWidth={'md'} className={classes.flex_center}>
        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_6}
        </Typography>
        <img
          className={classes.padImage}
          src={controller_wo_jumper}
          alt={cont_wo_jumper_alt}
        />
      </Container>

      <Container maxWidth={'md'} className={classes.centerImg}>
        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_7}
        </Typography>
        <img src={project_box_guts} alt={box_guts_alt} />
      </Container>

      <Container maxWidth={'md'}>
        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_8}
        </Typography>

        <Typography align={'center'} className={classes.root} variant={'body1'}>
          {paragraph_9}
        </Typography>

        <Typography align={'center'} className={classes.root} variant={'body1'}>
          The repository containing the source code for this project can be
          found{' '}
          <a
            href={hvac_app_source_location}
            target={'_blank'}
            rel={'noreferrer'}
          >
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
