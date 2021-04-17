import { NavLink } from "react-router-dom";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero__wrapper}>
        <h1 className={styles.Hero__title}>
          Конструктор тестов по <br /> английскому языку
        </h1>
        <p className={styles.Hero__text}>Создай свой тест быстро и просто!</p>
      </div>

      <NavLink to="/constructor" exact className={styles.Button}>
        Начать
      </NavLink>
    </section>
  );
};

export default Hero;
