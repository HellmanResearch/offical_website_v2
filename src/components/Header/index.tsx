import { Anchor } from 'antd';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img
          className={styles.logo}
          src={require('@/assets/images/logo.png')}
          alt=""
        />
      </div>
      <div className={styles.right}>
        <div className={styles.menu}>
          <Anchor
            direction="horizontal"
            items={[
              {
                key: 'Nodes',
                href: '#Nodes',
                title: 'Nodes',
              },
              {
                key: 'Rewards',
                href: '#Rewards',
                title: 'Rewards',
              },
              {
                key: 'Alerts',
                href: '#Alerts',
                title: 'Alerts',
              },
              {
                key: 'Staking',
                href: '#Staking',
                title: 'Staking',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
