import Style from './Movies.module.scss';
import MoviesItem from './MoviesItem';

function Movies() {
  return (
    <section className={Style.materialsSection}>
      <p className={`${Style.text} ${Style.item}`}>
        По выбранному кейсу можно ознакомиться с такими материалами:
      </p>
      <MoviesItem className={Style.item} />
      <MoviesItem className={Style.item} />
    </section>
  );
}

export default Movies;
