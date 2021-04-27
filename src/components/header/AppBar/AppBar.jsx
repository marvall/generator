import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation';
//import Container from "../../../Container";
// import routes from "../../routes";
import Avatar from '../Avatar';

import styles from './AppBar.module.scss';

import logo from './Logo.png';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <NavLink to="/" className={styles.logoLink}>
                <img src={logo} alt="" width="50px" height="50px" />
              </NavLink>
            </div>

            <Navigation />
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
