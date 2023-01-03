import React, { Fragment } from "react";
import mHheadCss from "./mobileHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../logo.png";

const MobileHeader = () => {
  return (
    <Fragment>
      <header className={`${mHheadCss.header} ${mHheadCss.wrapper}`}>
        <div>
          <FontAwesomeIcon icon={faBars} size="2x" border swapOpacity />
          <img src={logo} alt="logo" />
        </div>

        <div>
          <a href="https://vspay.com.ng/"> Login</a>
          <a href="https://vspay.com.ng/"> Register</a>
        </div>
      </header>
    </Fragment>
  );
};

export default MobileHeader;
