import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Rewards = () => {
  const title = `Hellman\nRewards`;
  const description = `A tool that that computes and condenses the incentives received by validators during each testnet cycle`;
  const rewards = `CHECK YOUR REWARDS`;
  return (
    <div className={styles['rewards']} id="Rewards">
      <img
        width={'100%'}
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-05.png')}
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
      <div className={styles['rewards-content']}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className="font44 mb60">{title}</div>
          <div className="font20 mb60">{description}</div>
          <div
            className={classNames(styles.underline, 'font30')}
            onClick={() => {
              window.open('https://rewards-ssv.hellman.team/reward');
            }}
          >
            {rewards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Rewards);
