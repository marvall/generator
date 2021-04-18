import Carousel from "react-multi-carousel";
import MovieItem from "./MovieItem";
import "react-multi-carousel/lib/styles.css";
import Style from "./Movies.module.scss";

const Movies = () => {
  return (
    <section className={Style.movies}>
      <div className={Style.container}>
        {/*<Carousel>
          <MovieItem />
        </Carousel>*/}
      </div>
    </section>
  );
};

export default Movies;
