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

// import HomeIcon from '@mui/icons-material/Home';
import { landing_page_route, about_me_route } from '../routes/route_names';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    flexGrow: 1,
    background: 'none',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  text: {
    color: 'whitesmoke'
  }
}));

const Navbar = (values = false) => {
  let on_landing_page = values.props;
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <AppBar position={'static'} className={classes.root}>
        <Toolbar disableGutters>
          <IconButton className={classes.menuButton}>
            {!on_landing_page && (
              <Link to={landing_page_route}>
                {/*<HomeIcon style={{ color: 'whitesmoke' }} fontSize={'sm'} />*/}
                <Typography className={classes.text} variant={'h6'}>
                  Home
                </Typography>
              </Link>
            )}
            {on_landing_page && (
              <Link to={about_me_route}>
                {/*<InfoIcon style={{ color: 'whitesmoke' }} />*/}
                <Typography className={classes.text} variant={'h6'}>
                  About
                </Typography>
              </Link>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
