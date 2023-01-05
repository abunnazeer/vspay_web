import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import headCss from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../logo.png";
import Lists from "../componets/UI/Lists";

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
          <img src={logo} alt="logo" />
        </div>

        <Lists>
          <Link>
            <li>Business</li>
          </Link>
          <Link to="#">
            <li>Resources</li>
          </Link>
          <Link to="#">
            <li>Support</li>
          </Link>
        </Lists>
        <div>
          <Link to="https://vspay.com.ng/"> Login</Link>
          <Link to="https://vspay.com.ng/"> Register</Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
