import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const Research = () => {
  const title = `Hellman\nResearch`;
  const description = `a Web 3 research institute \nExplore, Experiment, Engage`;
  return (
    <div className={styles.research}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-01.png')}
        alt=""
      />
      <div className={styles['research-content']}>
        <div className={styles['content-left']}>
          <div className={classNames(styles.mb80, 'font78')}>{title}</div>
          <div className={classNames(styles.des, 'font20')}>{description}</div>
        </div>
        <div className={styles['content-right']}>
          <img
            className={classNames(styles.img, 'lazy-image')}
            src={require('@/assets/images/image-01.png')}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default observer(Research);
