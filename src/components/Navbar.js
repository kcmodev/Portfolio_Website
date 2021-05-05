import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/all';

import { landing_page_route, about_me_route } from '../routes/route_names';

const Navbar = (values = false) => {
  let on_landing_page = values.props;

  return (
    <>
      <nav className="navbar">
        <h1>
          {!on_landing_page && (
            <Link to={landing_page_route}>
              <p>
                <AiOutlineHome className="navbar_icon" />
              </p>
            </Link>
          )}
          {on_landing_page && (
            <Link to={about_me_route}>
              <p id="link_text">About</p>
            </Link>
          )}
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
