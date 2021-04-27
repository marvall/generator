import style from './MoviesItem.module.scss';

const MoviesItem = () => {
  return (
    <div className={style.movie__item}>
      <a className={style.youtube__link} href="youtubelesson.com">
        <div className={style.movie__wrapper}>
          <div className={style.you__Banner}>YOUTUBE BANNER</div>
          <h3 className={style.movie__item__title}>КАКОЙ-ТО ЗАГОЛОВОК</h3>
        </div>
        <p className={style.movie__item__descr}>
          Некоторое описание данного видео
        </p>
      </a>
    </div>
  );
};

export default MoviesItem;
