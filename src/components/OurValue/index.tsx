import { observer } from 'mobx-react';
import styles from './style.module.scss';
import classNames from 'classnames';

const OurValue = () => {
  const title = `OUR VALUE`;
  const list = [
    {
      title: `Safety`,
      values: [
        `MPC-based private key management signatures`,
        `Operator stability of\n95% uptime`,
      ],
    },
    {
      title: `Quality`,
      values: [
        `24/7 operation and maintenance services`,
        `Intelligent management and rapid reaction`,
      ],
    },
    {
      title: `Reputation`,
      values: [
        `Extensive knowledge in  Filecoin,Solana, Dfinity,  Swarm, Conflux, SSV and Obol`,
        `Excellent reputation in  operation and maintenance`,
      ],
    },
  ];
  return (
    <div className={styles['our-value']}>
      <img
        width={'100%'}
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-03.png')}
        alt=""
      />

      <div className={styles['our-value-content']}>
        <div className={classNames(styles['value-title'], 'font44')}>
          {title}
        </div>
        <div className={styles.values}>
          {list.map((n, index) => {
            return (
              <div className={styles['value-item']} key={'value' + index}>
                <div className={classNames(styles['item-title'], 'font30')}>
                  {n.title}
                </div>
                <div className={styles.des}>
                  {n.values.map((m, idx) => {
                    return (
                      <div
                        className={classNames(styles.text, 'font20')}
                        key={'value-text' + index + idx}
                      >
                        {m}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(OurValue);
