import { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';

import { Icon } from '@iconify/react';
import userAvatarFilled from '@iconify/icons-carbon/user-avatar-filled';

import AuthNav from 'components/AuthNav';
import LoginPage from 'components/pages/LoginPage';
import SignUpPage from 'components/pages/SignUpPage';

import styles from './Avatar.module.scss';

ReactModal.setAppElement('#root');

const Avatar = props => {
  const { pathname } = props.location;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');

  function openModal() {
    pathname === '/' ? setPath('/home') : setPath(pathname);
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <NavLink
        to={`${pathname === '/' ? '/home' : pathname}/login`}
        className={styles.Avatar}
        onClick={openModal}
      >
        <Icon icon={userAvatarFilled} />
      </NavLink>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="Log In Modal"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <AuthNav path={path} />
        <Route path={`${path}/register`} component={SignUpPage} />
        <Route path={`${path}/login`} component={LoginPage} />

        <NavLink
          to={path}
          className={styles.NavLink}
          // activeClassName={styles.NavLinkActive}
          onClick={closeModal}
        >
          Выйти
        </NavLink>
      </ReactModal>
    </div>
  );
};

export default withRouter(Avatar);
