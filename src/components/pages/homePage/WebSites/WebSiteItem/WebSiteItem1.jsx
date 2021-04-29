import style from './WebSiteItem.module.scss';

const WebSiteItem1 = () => {
  return (
    <div className={style.website__item}>
      <a className={style.site__link1} href="somesite.com">
        <div className={style.site__Banner1}>BANNER SITE</div>
        <div className={style.name__and__description}>
          <h3 className={style.site__title}>КАКОЙ-ТО ЗАГОЛОВОК САЙТА</h3>
          <p className={style.site__descr}>
            Произвольный набор какого-то текста с описанием сайта и вообще зачем
            оно нужно посетителю сайта. Типа что на нем есть, что там можно
            узнать. И в целом я пишу просто слова чтобы как lorem заполнить
            пространство блока. Но в сути инфа должна что-то в себе нести.
          </p>
        </div>
      </a>
    </div>
  );
};

export default WebSiteItem1;
