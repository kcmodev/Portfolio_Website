import { Link } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';

import {
  landing_page_route,
  about_me_route,
  resume_route
} from '../routes/route_names';

import { github_url, linkedin_url } from '../views/LandingPage';

const navbar_text_typography_size = 'subtitle1';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    background: 'none',
    boxShadow: 'none',
    marginBottom: '2rem'
  },
  text: {
    color: 'whitesmoke'
  }
}));

const Navbar = (props: any) => {
  const classes = useStyles();
  const current_page = props.current_page;

  return (
    <>
      <AppBar position={'static'} className={classes.root}>
        <Toolbar disableGutters>
          {!(current_page === 'Landing') && (
            <IconButton>
              <Link to={landing_page_route}>
                <Typography
                  className={classes.text}
                  variant={navbar_text_typography_size}
                >
                  Home
                </Typography>
              </Link>
            </IconButton>
          )}

          {!(current_page === 'About') && (
            <IconButton>
              <Link to={about_me_route}>
                <Typography
                  className={classes.text}
                  variant={navbar_text_typography_size}
                >
                  About
                </Typography>
              </Link>
            </IconButton>
          )}

          {!(current_page === 'Resume') && (
            <IconButton>
              <Link to={resume_route}>
                <Typography
                  className={classes.text}
                  variant={navbar_text_typography_size}
                >
                  Resume
                </Typography>
              </Link>
            </IconButton>
          )}

          <IconButton>
            <a href={github_url} target={'_blank'} rel={'noreferrer'}>
              <Typography
                className={classes.text}
                variant={navbar_text_typography_size}
              >
                Github
              </Typography>
            </a>
          </IconButton>

          <IconButton>
            <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
              <Typography
                className={classes.text}
                variant={navbar_text_typography_size}
              >
                LinkedIn
              </Typography>
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
