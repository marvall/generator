import Container from '../../Container';
import styles from './ConstructorPage.module.scss';

function ConstructorPage() {
  return (
  <Container>
    <div className={styles.constructorPageContent}>
        <section className={styles.siteBarSection}>
        <h2 className={styles.sectionSubtitle}>Список кейсов</h2>
        
          {/* дальше кусок  SiteBar*/}
        <form >
          <label>
            <input
            type="checkbox"
            checked
            // onChange={this.handleChange}
            />
            Кейс 1
        </label>
        <label>
          <input
            type="checkbox"
            // onChange={this.handleChange}
          />
          Кейс 2
        </label>
        </form>
          <button type="button" > + </button>
          {/*  SiteBar* закончился */}

      </section>

    
      <div>
        <section className={styles.materialsSection}>
          <p className={styles.constructorPageText}>
              По выбранному кейсу можно ознакомиться с такими материалами:
          </p>
            {/* дальше компонент с видео*/}
            <p>Компонент с ознакомительными материалами</p>
            {/* закончился компонент с видео*/}
        </section>
          
          <section className={styles.constructorSection}>
            {/* дальше компонент с телом конструктора*/}
            <p>Компонент с телом конструктора</p>
          <form autoComplete="off">
            <input
              type="text"
              placeholder="Поле для текста"
              // value={text}
              // onChange={handleTextChange}
              required
            />     
            <button type="submit"> Генерировать </button>
            </form>
            {/* закончился компонент с телом конструктора*/}
        </section> 
      </div>
    </div>
  </Container>
  );
}

export default ConstructorPage;