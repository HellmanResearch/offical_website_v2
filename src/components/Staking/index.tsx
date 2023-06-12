import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const WhatIsHellman = () => {
  const title = `Hellman\nStaking`;
  const description = `Collaborating with P2P.org, DSRV, RocketX and several other renowned validators in the Lido testnet as Hellman Staking (under development) seeks to establish a strong presence in the network`;
  return (
    <div className={styles['staking']} id="Staking">
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-07.png')}
        alt=""
      />
      <div className={styles['staking-content']}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={classNames(styles.mb50, 'font44')}>{title}</div>
          <div className="font20">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(WhatIsHellman);
