import Generator from "./generator";

import styles from "./ConstructorPage.module.scss";

function ConstructorPage() {
  

  return (
    <div className={`${styles.page} ${styles.container}`}>
      <section className={styles.siteBarSection}>
        <h2 className={styles.sectionSubtitle}>Список кейсов</h2>

        {/* SiteBar*/}
       
      </section>

      <div className={styles.content}>
        <section className={styles.materialsSection}>
          <p className={styles.text}>
            По выбранному кейсу можно ознакомиться с такими материалами:
          </p>
          {/* дальше компонент с видео*/}
         
        </section>

        <section className={styles.constructorSection}>
          {/* компонент с телом конструктора*/}
          <Generator/>
          
        </section>
      </div>
    </div>
  );
}

export default ConstructorPage;
