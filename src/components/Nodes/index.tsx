import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const Nodes = () => {
  const title = `Hellman\nNodes`;
  const description = `As the top 5 primary choice for more than 600 validators, Hellman verified operator achieved a performance score of over 95%`;
  const nodes = `EXPLORE OUR NODES`;
  return (
    <div className={styles['nodes']} id="Nodes">
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-04.png')}
        alt=""
      />
      <div className={styles['nodes-content']}>
        <div className={styles.left}>
          <div className="font44 mb60">{title}</div>
          <div className={classNames(styles.mb50, 'font20')}>{description}</div>
          <div
            className={classNames(styles.center, 'font30')}
            onClick={() => {
              window.open('https://explorer.ssv.network/operators/101');
            }}
          >
            {nodes}
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default observer(Nodes);
