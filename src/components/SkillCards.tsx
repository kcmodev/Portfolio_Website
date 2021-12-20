import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import password_generator_image from '../images/keypad_image.jpg';
import api_project_image from '../images/thermostat_image.jpg';
import { Container, Typography } from '@material-ui/core';

import {
  password_generator_route,
  python_projects_route,
} from '../routes/route_names';

import {
  text_color_white,
  typography_center,
  title_variant_type,
  subtitle_variant_type,
} from './TextVariables';

export const pass_gen_source_location =
  'https://github.com/kcmodev/Portfolio_Website/blob/main/src/components/PasswordGenerator.tsx';
export const hvac_app_source_location =
  'https://github.com/kcmodev/pi_hvac_controller';

const password_gen_title = 'Password Generator';
const password_gen_description = 'JavaScript, React, HTML, CSS';
const password_generator_alt_text = 'Blue electronics cryptography image';
const api_alt_text = 'Green electronics';
const api_title = 'Nest Thermostat API Integration';
const api_description = 'Python, Flask, JavaScript, HTML, CSS';

const useStyles = makeStyles((theme) => ({
  text: {
    color: `${text_color_white}`,
  },
  large: {
    width: theme.spacing(60),
    height: theme.spacing(45),
    margin: theme.spacing(2),
  },
  picture: {
    maxHeight: '100%',
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    margin: theme.spacing(2),
    // [theme.breakpoints.down('sm')]: {
    //   width: theme.spacing(30),
    //   height: theme.spacing(22),
    //   margin: theme.spacing(2),
    // },
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(60),
    //   height: theme.spacing(45),
    //   margin: theme.spacing(2),
    // },
    transition: '0.5s',
    '&:hover': {
      opacity: 0.5,
    },
  },
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
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
        <Typography
          className={classes.text}
          variant={title_variant_type}
          align={typography_center}
        >
          {password_gen_title}
        </Typography>
        <Typography
          className={classes.text}
          variant={subtitle_variant_type}
          align={typography_center}
        >
          {password_gen_description}
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
        <Typography
          className={classes.text}
          variant={title_variant_type}
          align={typography_center}
        >
          {api_title}
        </Typography>
        <Typography
          className={classes.text}
          variant={subtitle_variant_type}
          align={typography_center}
        >
          {api_description}
        </Typography>
      </Container>
    </Container>
  );
}
