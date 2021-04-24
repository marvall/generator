import Carousel from 'react-multi-carousel';
import WebSiteItem from './WebSiteItem/WebSiteItem';

import 'react-multi-carousel/lib/styles.css';
import Style from './WebSites.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const WebSite = () => {
  return (
    <section className={Style.site__section}>
      <div className={Style.container}>
        <h2 className={Style.site__section__title}>
          РЕКОМЕНДУЕМЫЕ РЕСУРСЫ <br /> ДЛЯ УЛУЧШЕНИЯ УРОВНЯ АНГЛИЙСКОГО ЯЗЫКА
        </h2>
        <Carousel
          arrows={false}
          showDots={true}
          responsive={responsive}
          keyBoardControl={true}
        >
          <div>
            <WebSiteItem />
            <WebSiteItem />
          </div>
          <div>
            <WebSiteItem />
            <WebSiteItem />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WebSite;
