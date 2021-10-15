import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Container,
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

const useStyles = makeStyles((theme) => ({
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

const Navbar = (props) => {
  const classes = useStyles();
  const current_page = props.current_page;

  return (
    <>
      <AppBar position={'static'} className={classes.root}>
        <Toolbar disableGutters>
          {!(current_page === 'Landing') && (
            <IconButton>
              <Link to={landing_page_route}>
                <Typography className={classes.text} variant={'h6'}>
                  Home
                </Typography>
              </Link>
            </IconButton>
          )}

          {!(current_page === 'About') && (
            <IconButton>
              <Link to={about_me_route}>
                <Typography className={classes.text} variant={'h6'}>
                  About
                </Typography>
              </Link>
            </IconButton>
          )}

          {!(current_page === 'Resume') && (
            <IconButton>
              <Link to={resume_route}>
                <Typography className={classes.text} variant={'h6'}>
                  Resume
                </Typography>
              </Link>
            </IconButton>
          )}

          <IconButton>
            <a href={github_url} target={'_blank'} rel={'noreferrer'}>
              <Typography className={classes.text} variant={'h6'}>
                Github
              </Typography>
            </a>
          </IconButton>

          <IconButton>
            <a href={linkedin_url} target={'_blank'} rel={'noreferrer'}>
              <Typography className={classes.text} variant={'h6'}>
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
