import { makeStyles, Container, Typography, Avatar } from '@material-ui/core';

import python_icon from '../icons/python_logo.png';
import javascript_icon from '../icons/javascript_logo.png';
import java_icon from '../icons/java_logo.png';
import react_icon from '../icons/react_logo.svg';
import html_icon from '../icons/html_logo.png';
import css_icon from '../icons/css_logo.svg';
import node_js_icon from '../icons/node_js_logo.png';
import flask_icon from '../icons/flask_logo.svg';

const python_logo_alt_text = 'python programming language logo';
const java_logo_alt_text = 'java programming language logo';
const js_logo_alt_text = 'javascript programming language logo';
const react_logo_alt_text = 'react framework logo';
const html_logo_alt_text = 'html 5 logo';
const css_logo_alt_text = 'css 3 logo';
const node_js_logo_alt_text = 'node js logo';
const flask_icon_text = 'python flask library logo';

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
    height: theme.spacing(21),
    backgroundColor: 'whitesmoke'
  }
}));

const SkillAvatars = (values: any) => {
  // destructure values
  let {
    python,
    javascript,
    java,
    react,
    css,
    html,
    node,
    flask,
    description
  } = values;

  const classes = useStyles();

  // conditionally display skills logos
  return (
    <>
      {description && (
        <Container maxWidth={'md'} className={classes.root}>
          <Typography align={'center'} className={classes.root}>
            This app uses the following frameworks/technologies:
          </Typography>
        </Container>
      )}

      <Container maxWidth={'md'} className={classes.root}>
        {python && (
          <Avatar
            className={classes.large}
            src={python_icon}
            alt={python_logo_alt_text}
          />
        )}

        {javascript && (
          <Avatar
            className={classes.large}
            src={javascript_icon}
            alt={js_logo_alt_text}
          />
        )}

        {java && (
          <Avatar
            className={classes.large}
            src={java_icon}
            alt={java_logo_alt_text}
          />
        )}

        {react && (
          <Avatar
            className={classes.large}
            src={react_icon}
            alt={react_logo_alt_text}
          />
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
          <Avatar
            className={classes.large}
            src={node_js_icon}
            alt={node_js_logo_alt_text}
          />
        )}

        {flask && (
          <Avatar
            className={classes.large}
            src={flask_icon}
            alt={flask_icon_text}
          />
        )}
      </Container>
    </>
  );
};

export default SkillAvatars;
