import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import {
  java_projects_route,
  password_generator_route,
  python_projects_route,
  react_projects_route
} from '../routes/route_names';

import python_icon from '../icons/python_logo.png';
import javascript_icon from '../icons/javascript_logo.png';
import java_icon from '../icons/java_logo.png';
import react_icon from '../icons/react_logo.svg';
import html_icon from '../icons/html_logo.png';
import css_icon from '../icons/css_logo.svg';
import node_js_icon from '../icons/node_js_logo.png';

const python_logo_alt_text = 'python programming language logo';
const java_logo_alt_text = 'java programming language logo';
const js_logo_alt_text = 'javascript programming language logo';
const react_logo_alt_text = 'react framework logo';
const html_logo_alt_text = 'html 5 logo';
const css_logo_alt_text = 'css 3 logo';
const node_js_logo_alt_text = 'node js logo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'whitesmoke',
    paddingTop: theme.spacing(4)
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
  }
}));

const SkillAvatars = (values = false) => {
  // destructure values
  let {
    python,
    javascript,
    java,
    react,
    description,
    css,
    html,
    node
  } = values.props;

  const classes = useStyles();

  // conditionally display skills logos
  return (
    <>
      {description && (
        <Container maxWidth={'sm'}>
          <Typography align={'center'} className={classes.root}>
            This app uses the following frameworks/technologies:
          </Typography>
        </Container>
      )}
      <Container maxWidth={'sm'} className={classes.root}>
        {python && (
          <Link to={python_projects_route}>
            <Avatar
              className={classes.large}
              src={python_icon}
              alt={python_logo_alt_text}
            />
          </Link>
        )}
        {javascript && (
          <Link to={password_generator_route}>
            <Avatar
              className={classes.large}
              src={javascript_icon}
              alt={js_logo_alt_text}
            />
          </Link>
        )}
        {java && (
          <Link to={java_projects_route}>
            <Avatar
              className={classes.large}
              src={java_icon}
              alt={java_logo_alt_text}
            />
          </Link>
        )}
        {react && (
          <Link to={react_projects_route}>
            <Avatar
              className={classes.large}
              src={react_icon}
              alt={react_logo_alt_text}
            />
          </Link>
        )}
        {html && (
          <Avatar
            className={classes.large}
            src={html_icon}
            alt={html_logo_alt_text}
          />
        )}
        {css && (
          <Avatar
            className={classes.large}
            src={css_icon}
            alt={css_logo_alt_text}
          />
        )}
        {node && (
          <img
            className={classes.large}
            src={node_js_icon}
            alt={node_js_logo_alt_text}
          />
        )}
      </Container>
    </>
  );
};

export default SkillAvatars;
