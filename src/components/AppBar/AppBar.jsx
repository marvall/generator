import React from "react";
import { NavLink } from "react-router-dom";

import Navigation from "../Navigation";

import routes from "../../routes";

import styles from "./AppBar.module.scss";

import defAva from "./defaultAvatar.png";
import logo from "./Logo.png";

const AppBar = () => {
  return (
    <header className={styles.bar}>
      <div className={styles.logo}>
        <NavLink to={routes.home} className={styles.logoLink}>
          <img src={logo} alt="" width="50px" height="50px" />
        </NavLink>
      </div>

      <Navigation />
      <img
        src={defAva}
        alt=""
        width="50px"
        height="50px"
        className={styles.ava}
      />
    </header>
  );
};

export default AppBar;
