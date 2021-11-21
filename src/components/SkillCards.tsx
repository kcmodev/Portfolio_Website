import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import password_generator_image from '../images/cryptography_image.jpeg';
import api_project_image from '../images/api_project_image.jpeg';
import { Container, Typography } from '@material-ui/core';

import {
  password_generator_route,
  python_projects_route
} from '../routes/route_names';

export const pass_gen_source_location =
  'https://github.com/kcmodev/Portfolio_Website/blob/main/src/components/PasswordGenerator.js';
export const hvac_app_source_location =
  'https://github.com/kcmodev/pi_hvac_controller';

const password_gen_desc_text = 'Password Generator';
const password_gen_desc_text_2 = 'JavaScript, React, HTML, CSS';
const password_generator_alt_text = 'Blue electronics cryptography image';
const api_alt_text = 'Green electronics';
const api_desc_text = 'Nest Thermostat API Integration';
const api_desc_text_2 = 'Python, Flask, JavaScript, HTML, CSS';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    justifySelf: 'center'
  },
  text: {
    display: 'flex',
    color: 'whitesmoke',
    justifyContent: 'center'
  },
  large: {
    width: theme.spacing(60),
    height: theme.spacing(45),
    margin: theme.spacing(2),
    transition: '0.5s',
    '&:hover': {
      opacity: 0.5
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export default function SkillCards() {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'} className={classes.container}>
      <Container maxWidth={'sm'}>
        <Link to={password_generator_route}>
          <img
            className={classes.large}
            src={password_generator_image}
            alt={password_generator_alt_text}
          />
        </Link>
        <Typography className={classes.text} variant={'h5'}>
          {password_gen_desc_text}
        </Typography>
        <Typography className={classes.text} variant={'body1'}>
          {password_gen_desc_text_2}
        </Typography>
      </Container>

      <Container maxWidth={'sm'}>
        <Link to={python_projects_route}>
          <img
            className={classes.large}
            src={api_project_image}
            alt={api_alt_text}
          />
        </Link>
        <Typography className={classes.text} variant={'h5'}>
          {api_desc_text}
        </Typography>
        <Typography className={classes.text} variant={'body1'}>
          {api_desc_text_2}
        </Typography>
      </Container>

      {/*<Card className={classes.root}>*/}
      {/*  <CardMedia*/}
      {/*    className={classes.medium}*/}
      {/*    component="img"*/}
      {/*    alt="secure password generator application"*/}
      {/*    image={javascript_logo}*/}
      {/*    title="JavaScript Program"*/}
      {/*  />*/}
      {/*  <CardContent>*/}
      {/*    <Typography gutterBottom variant="h5" component="h2">*/}
      {/*      Secure Password Generator*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" color="textSecondary" component="p">*/}
      {/*      Locally generates a secure password with ample customization options*/}
      {/*      such as selecting specific special characters and specifying password length*/}
      {/*      to ensure password manager compatibility.*/}
      {/*    </Typography>*/}
      {/*  </CardContent>*/}
      {/*  <CardActions>*/}
      {/*    <Link to={password_generator_route}>*/}
      {/*      <Button size="small" color="primary">*/}
      {/*        Application*/}
      {/*      </Button>*/}
      {/*    </Link>*/}
      {/*    <Button size="small" color="primary">*/}
      {/*      <a*/}
      {/*        href={pass_gen_source_location}*/}
      {/*        target={'_blank'}*/}
      {/*        rel={'noreferrer'}*/}
      {/*      >*/}
      {/*        Source*/}
      {/*      </a>*/}
      {/*    </Button>*/}
      {/*  </CardActions>*/}
      {/*</Card>*/}

      {/*<Card className={classes.root}>*/}
      {/*  <CardMedia*/}
      {/*    className={classes.medium}*/}
      {/*    component="img"*/}
      {/*    alt="hvac air freshener application"*/}
      {/*    height="140"*/}
      {/*    image={python_logo}*/}
      {/*    title="Python Program"*/}
      {/*  />*/}
      {/*  <CardContent>*/}
      {/*    <Typography gutterBottom variant="h5" component="h2">*/}
      {/*      Smart Thermostat API Integration*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" color="textSecondary" component="p">*/}
      {/*      Uses a Raspberry Pi to control a DC motor that sprays air freshener into my home HVAC system. It uses*/}
      {/*      Google's Nest API to determine if the HVAC system is currently operating and uses that information to determine*/}
      {/*      when to actuate the motor to disperse air freshener throughout my entire house.*/}
      {/*    </Typography>*/}
      {/*  </CardContent>*/}
      {/*  <CardActions>*/}
      {/*    <Link to={python_projects_route}>*/}
      {/*      <Button size="small" color="primary">*/}
      {/*        Details*/}
      {/*      </Button>*/}
      {/*    </Link>*/}
      {/*    <Button size="small" color="primary">*/}
      {/*      <a*/}
      {/*        href={hvac_app_source_location}*/}
      {/*        target={'_blank'}*/}
      {/*        rel={'noreferrer'}*/}
      {/*      >*/}
      {/*        Source*/}
      {/*      </a>*/}
      {/*    </Button>*/}
      {/*  </CardActions>*/}
      {/*</Card>*/}
    </Container>
  );
}
