import Generator from './generator';
import SiteBar from './SiteBar/SiteBar';
import Movies from './Movies/Movies';

import styles from './ConstructorPage.module.scss';

function ConstructorPage() {
  return (
    <div className={`${styles.page}`}>
      <SiteBar />

      <div className={styles.content}>
        <Movies />
        <section className={styles.constructorSection}>
          {/* компонент с телом конструктора*/}
          <Generator />
        </section>
      </div>
    </div>
  );
}

export default ConstructorPage;
