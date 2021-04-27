import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <div className={styles.AuthNav}>
    <NavLink
      to="/home/register"
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Регистрация
    </NavLink>

    <NavLink
      to="/home/login"
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Вход
    </NavLink>
  </div>
);

export default AuthNav;
