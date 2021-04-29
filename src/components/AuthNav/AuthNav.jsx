import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.scss';

const AuthNav = ({ path }) => {
  return (
    <div className={styles.AuthNav}>
      <NavLink
        to={`${path}/register`}
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Регистрация
      </NavLink>

      <NavLink
        to={`${path}/login`}
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Вход
      </NavLink>
    </div>
  );
};

export default AuthNav;
