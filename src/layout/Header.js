import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import headCss from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './../logo.png';
import Lists from '../components/UI/Lists';

const Header = () => {
  return (
    <Fragment>
      <header className={`${headCss.header} ${headCss.wrapper}`}>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            border
            swapOpacity
            className={headCss.hambuger__icon}
          />
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <Lists>
          <NavLink to="/business">
            <li>Business</li>
          </NavLink>
          <NavLink to="/resources">
            <li>Resources</li>
          </NavLink>
          <NavLink to="/supports">
            <li>Support</li>
          </NavLink>
        </Lists>
        <div>
          <Link to="/login"> Login</Link>
          <Link to="/register"> Register</Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
