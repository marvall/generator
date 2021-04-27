import Carousel from 'react-multi-carousel';
import MovieItem from './MovieItem';
import 'react-multi-carousel/lib/styles.css';
import style from './Movies.module.scss';
import logoPanorama from './delimiter.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1278, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const Movies = () => {
  return (
    <section className={style.movies}>
      <div className={style.container}>
        <h2 className={style.section__title}>
          ТВОИ ЗНАНИЯ АНГЛИЙСКОГО НЕ ДОСТАТОЧНО ХОРОШИ? <br /> ПОСМОТРИ ЭТИ
          ВИДЕО!
        </h2>
        <Carousel
          responsive={responsive}
          // removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </Carousel>
        <img
          src={logoPanorama}
          alt="London Panorama"
          className={style.logoPanorama}
        />
      </div>
    </section>
  );
};

export default Movies;
