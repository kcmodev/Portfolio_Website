import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import javascript_logo from '../icons/javascript_logo.png';
import python_logo from '../icons/python_logo.png';
import { Container } from '@material-ui/core';

import {
  password_generator_route,
  python_projects_route
} from '../routes/route_names';

export const pass_gen_source_location =
  'https://github.com/kcmodev/Portfolio_Website/blob/main/src/components/PasswordGenerator.js';
export const hvac_app_source_location =
  'https://github.com/kcmodev/pi_hvac_controller';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    backgroundColor: 'whitesmoke',
    background:
      'linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) )',
    margin: theme.spacing(2)
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  large: {
    width: theme.spacing(21),
    height: theme.spacing(21)
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(4)
  }
}));

export default function SkillCards() {
  const classes = useStyles();

  return (
    <Container maxWidth={'sm'} className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.medium}
          component="img"
          alt="secure password generator application"
          height="140"
          image={javascript_logo}
          title="JavaScript Program"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Secure Password Generator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Locally generates a secure password with ample customization options
            to ensure password manager compatibility
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={password_generator_route}>
            <Button size="small" color="primary">
              Application
            </Button>
          </Link>
          <Button size="small" color="primary">
            <a
              href={pass_gen_source_location}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Source
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardMedia
          className={classes.medium}
          component="img"
          alt="hvac air freshener application"
          height="140"
          image={python_logo}
          title="Python Program"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Smart Thermostat API Integration
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Uses a Raspberry Pi to control a DC motor that sprays air freshener into my home HVAC system. It uses
            Google's Nest API to determine if the HVAC system is currently operating and uses that information to determine
            when to actuate the motor to disperse air freshener throughout my entire house.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={python_projects_route}>
            <Button size="small" color="primary">
              Details
            </Button>
          </Link>
          <Button size="small" color="primary">
            <a
              href={hvac_app_source_location}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Source
            </a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
