import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import Style from "./WebSites.module.scss";

const WebSite = () => {
  return (
    <section className={Style.site}>
      <div className={Style.container}>
        {/*<Carousel></Carousel>
        <Carousel></Carousel>*/}
      </div>
    </section>
  );
};

export default WebSite;
