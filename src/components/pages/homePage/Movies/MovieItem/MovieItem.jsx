import style from './MovieItem.module.scss';

const MovieItem = () => {
  return (
    <div className={style.movie__item}>
      <a className={style.youtube__link} href="youtubelesson.com">
        <div className={style.you__Banner}>YOUTUBE BANNER</div>
        <h3 className={style.movie__item__title}>КАКОЙ-ТО ЗАГОЛОВОК</h3>
        <p className={style.movie__item__descr}>
          Жутко важное описание данного урока, в кратце или подробно описывающее
          о чем там вообще речь и зачем его смотреть
        </p>
      </a>
    </div>
  );
};

export default MovieItem;
