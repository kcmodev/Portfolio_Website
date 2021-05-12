import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, withStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { AiOutlineHome } from 'react-icons/all';
import { landing_page_route, about_me_route } from '../routes/route_names';

const StyledNavbar = withStyles({
  root: {
    background: 'transparent',
    position: 'static',
    color: 'white',
    height: 48,
    paddingBottom: '2rem'
  }
})(AppBar);

const Navbar = (values = false) => {
  let on_landing_page = values.props;

  return (
    <>
      <StyledNavbar>
        <Toolbar className={'flex right-flex'}>
          <IconButton edge={'end'}>
            {!on_landing_page && (
              <Link to={landing_page_route}>
                <p>
                  <AiOutlineHome />
                </p>
              </Link>
            )}
            {on_landing_page && (
              <Link to={about_me_route}>
                <InfoIcon className={'color-primary-white'} />
              </Link>
            )}
          </IconButton>
        </Toolbar>
      </StyledNavbar>

      {/*<nav className={'text-right'}>*/}
      {/*  {!on_landing_page && (*/}
      {/*    <Link to={landing_page_route}>*/}
      {/*      <p>*/}
      {/*        <AiOutlineHome className={'navbar_home_icon'} />*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*  )}*/}
      {/*  {on_landing_page && (*/}
      {/*    <Link to={about_me_route}>*/}
      {/*      <p>About</p>*/}
      {/*    </Link>*/}
      {/*  )}*/}
      {/*</nav>*/}
    </>
  );
};

export default Navbar;
