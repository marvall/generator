import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
      <NavLink exact to={routes.constructor}>
        Constructor
      </NavLink>
      <NavLink exact to={routes.about}>
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
