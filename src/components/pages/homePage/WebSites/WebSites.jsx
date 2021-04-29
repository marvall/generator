import Carousel from 'react-multi-carousel';
import WebSiteItem from './WebSiteItem/WebSiteItem';
import WebSiteItem1 from './WebSiteItem/WebSiteItem1';

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
          arrows={true}
          // showDots={true}
          // swipeable={true}
          // draggable={true}
          keyBoardControl={true}
          responsive={responsive}
        >
          <WebSiteItem />
          <WebSiteItem />
          <WebSiteItem />
          <WebSiteItem />
        </Carousel>

        <Carousel
          arrows={true}
          showDots={false}
          responsive={responsive}
          keyBoardControl={true}
        >
          <WebSiteItem1 />
          <WebSiteItem1 />
          <WebSiteItem1 />
          <WebSiteItem1 />
        </Carousel>
      </div>
    </section>
  );
};

export default WebSite;
