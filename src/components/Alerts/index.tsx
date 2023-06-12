import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Alerts = () => {
  const title = `Hellman\nAlerts`;
  const description = `A notification system that monitors the key metrics of validators, operators and clusters, and demonstrates the historical data related to operator efficiency, fee modifications and cluster account balance`;
  const underline = `EXPERIENCE THE ALERTS`;
  return (
    <div className={styles['alerts']} id="Alerts">
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-06.png')}
        alt=""
      />
      <div className={styles.grants}>
        <LazyLoadImage
          className={classNames(styles.bg, 'lazy-image')}
          src={require('@/assets/images/image-02.png')}
          alt=""
        />
        <div className={styles.text}>GRANTS</div>
      </div>
      <div className={styles['alerts-content']}>
        <div className={styles.left}>
          <div className="font44 mb40">{title}</div>
          <div className="font20 mb60">{description}</div>
          <div
            className={classNames(styles.underline, 'font30')}
            onClick={() => {
              window.open('https://alert.hellman.team/alerts');
            }}
          >
            {underline}
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default observer(Alerts);
