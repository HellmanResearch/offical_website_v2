import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const WhatIsHellman = () => {
  const title = `What is Hellman`;
  const subTitle = `A prominent Web3 research institute`;
  const description1 = `Specializes in a wide range of areas, including Ethereum network, Layer 2 solutions, DVT technology and LSD `;
  const description2 = `Actively engaged in the development of infrastructure for POS projects, showcasing their dedication to advancing the field`;
  return (
    <div className={styles['what-is-hellman']}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        alt=""
        height={'auto'}
        src={require('@/assets/images/image-bg-02.png')}
        width={'100%'}
      />

      <div className={styles['what-content']}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className="font44 mb30">{title}</div>
          <div className="font30 mb30">{subTitle}</div>
          <div className="font20 mb30">{description1}</div>
          <div className="font20 mb30">{description2}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(WhatIsHellman);
