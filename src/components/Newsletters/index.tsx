import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const Newsletters = () => {
  const title = `Hellman Newsletters & Reports`;
  const list = [
    {
      image: require('@/assets/images/image-03.png'),
      text: 'Weekly Newsletter',
      href: 'https://medium.com/@HellmanResearch/hellman-weekly-newsletter-week-16-6d06f4269a53',
    },
    {
      image: require('@/assets/images/image-04.png'),
      text: 'Web3 Ecosystem Report 2022',
      href: 'https://drive.google.com/file/d/134LOtSawe2ugGT75SMFqZaK3VtSWQA-g/view?usp=sharing',
    },
    {
      image: require('@/assets/images/image-05.png'),
      text: 'Analysis report of SSV Incentivized Testnet Round 1',
      href: 'https://medium.com/@HellmanResearch/hellman-analysis-report-of-ssv-incentivized-testnet-round-1-ab9e6745b3ff',
    },
  ];
  return (
    <div className={styles['newsletters']}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-08.png')}
        alt=""
      />
      <div className={styles['newsletters-content']}>
        <div className={classNames(styles.center, 'font44')}>{title}</div>
        <div className={classNames(styles.list)}>
          {list.map((n, index) => {
            return (
              <div
                className={styles.item}
                key={'news' + index}
                onClick={() => {
                  window.open(n.href);
                }}
              >
                <div className={styles.img}>
                  <img
                    className={classNames('lazy-image')}
                    src={n.image}
                    alt=""
                  />
                </div>
                <div className="font20">{n.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Newsletters);
