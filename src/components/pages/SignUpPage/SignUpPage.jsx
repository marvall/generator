import { useState, useEffect, useRef } from 'react';

import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), []);

  const handleChange = event => {
    const { name, value, checked } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'agreed':
        setAgreed(checked);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const user = { name, email, password };

    reset();
  };

  const handleSignUpWithGoogle = () => {};

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setAgreed(false);
  };

  return (
    <div>
      <form
        className={styles.SignUpForm}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <label className={styles.formLabel}>
          <span className={styles.formText}>Имя:</span>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Введите ваше имя"
            name="name"
            value={name}
            onChange={handleChange}
            ref={inputRef}
            required
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formText}>E-mail:</span>
          <input
            type="email"
            className={styles.formInput}
            placeholder="Введите e-mail"
            name="email"
            value={email}
            onChange={handleChange}
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
            pattern="^[a-z0-9_-]{7,18}$"
            title="Password length cannot be shorter than 7 characters, can contain letters, numbers, hyphens and underscores"
            required
          />
        </label>

        <label className={styles.labelCheckbox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
            title="Check the box to register"
            required
          />
          <span>Я принимаю условия Пользовательского соглашения</span>
        </label>

        <button className={styles.formBtn} type="submit">
          Сохранить
        </button>
        <button
          className={styles.btnGoogle}
          type="button"
          onClick={handleSignUpWithGoogle}
        >
          Зарегистрировать с помощью Google
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
