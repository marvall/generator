import { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ReactModal from 'react-modal';

import { Icon } from '@iconify/react';
import userAvatarFilled from '@iconify/icons-carbon/user-avatar-filled';

import AuthNav from 'components/AuthNav';
import LoginPage from 'components/pages/LoginPage';
import SignUpPage from 'components/pages/SignUpPage';

import styles from './Avatar.module.scss';

ReactModal.setAppElement('#root');

const Avatar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('/home/login');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    setPath('/');
  }

  function closeModal() {
    setIsOpen(false);
    setPath('/home/login');
  }

  return (
    <div>
      <NavLink to={path} className={styles.Avatar} onClick={openModal}>
        <Icon icon={userAvatarFilled} />
        Войти
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
        <AuthNav />
        <Route path="/home/register" component={SignUpPage} />
        <Route path="/home/login" component={LoginPage} />

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

export default Avatar;
