import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation';
//import Container from "../../../Container";
// import routes from "../../routes";

import styles from './AppBar.module.scss';

import defAva from './defaultAvatar.png';
import logo from './Logo.png';
import menu from './menu.svg';
import menuClose from './menuClose.svg';

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
          <img
            src={defAva}
            alt=""
            width="50px"
            height="50px"
            className={styles.ava}
          />
          <button type="button" className={styles.menuButton}>
            <img src={menu} alt="" width="28px" height="24px" />
            <img
              src={menuClose}
              alt=""
              width="33.33px"
              height="33.33px"
              className={styles.close}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
