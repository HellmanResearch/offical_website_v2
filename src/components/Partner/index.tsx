import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Partner = () => {
  const title = `Partner with`;
  const list1 = [
    {
      image: require('@/assets/images/image-icon-01.png'),
      width: '15.1rem',
    },
    {
      image: require('@/assets/images/image-icon-02.png'),
      width: '18.2rem',
    },
    {
      image: require('@/assets/images/image-icon-03.png'),
      width: '20.6rem',
    },
    {
      image: require('@/assets/images/image-icon-05.png'),
      width: '13.3rem',
    },
  ];
  const list2 = [
    {
      image: require('@/assets/images/image-icon-06.png'),
      width: '17.4rem',
    },
    {
      image: require('@/assets/images/image-icon-07.png'),
      width: '15.8rem',
    },
    {
      image: require('@/assets/images/image-icon-08.png'),
      width: '28.3rem',
    },
    {
      image: require('@/assets/images/image-icon-04.png'),
      width: '13.2rem',
    },
  ];
  return (
    <div className={styles['partner']}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-10.png')}
        alt=""
      />

      <div className={styles['partner-content']}>
        <div className="font44">{title}</div>
        <div className={styles.list}>
          {list1.map((n, index) => {
            return (
              <div className={styles.img} key={'partner' + index}>
                <LazyLoadImage
                  className={classNames('lazy-image')}
                  src={n.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className={styles.list}>
          {list2.map((n, index) => {
            return (
              <div className={styles.img} key={'partner' + index}>
                <LazyLoadImage
                  className={classNames('lazy-image')}
                  src={n.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Partner);
