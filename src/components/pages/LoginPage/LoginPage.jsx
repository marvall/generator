import { useEffect, useState, useRef } from 'react';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), []);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const user = { email, password };

    reset();
  };

  const handleLogInWithGoogle = () => {};

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form
        className={styles.SignUpForm}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <label className={styles.formLabel}>
          <span className={styles.formText}>E-mail:</span>
          <input
            type="email"
            className={styles.formInput}
            placeholder="Введите e-mail"
            name="email"
            value={email}
            onChange={handleChange}
            ref={inputRef}
            required
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formText}>Пароль:</span>
          <input
            type="password"
            className={styles.formInput}
            placeholder="Введите пароль"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button className={styles.formBtn} type="submit">
          Войти
        </button>
        <button
          className={styles.btnGoogle}
          type="button"
          onClick={handleLogInWithGoogle}
        >
          Войти с помощью Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
