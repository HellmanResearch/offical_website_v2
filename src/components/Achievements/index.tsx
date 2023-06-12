import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const Achievements = () => {
  const title = `Achievements`;
  const description = `Aside from running complete nodes, we function as a productive developer and an engaged community collaborator. We were granted two awards by SSV, which include a Testnet Key-generation Tool and a notification system that was recently released. Furthermore, we took part in the Obol Athena & Bia Testnet and were honored with POAPs`;
  const list = [
    {
      label: 'Testnet\nkey-\ngeneration\ntool',
      href: 'https://forum.ssv.network/t/ssv-x-hellman-micro-grant-approval-testnet-explorer-tools/670',
    },
    {
      label: 'noitification\nsystem',
      href: 'https://forum.ssv.network/t/ssv-x-hellman-grant-proposal-notifications-monitoring/736',
    },
    {
      label: 'obol poaps',
      href: 'https://galxe.com/galxeid/0xd936ea00d817301cff2b90695022d52da1df317c',
    },
  ];
  return (
    <div className={styles['achievements']}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-09.png')}
        alt=""
      />
      <div className={styles['achievements-content']}>
        <div className="font44">{title}</div>
        <div className="font20">{description}</div>
        <div className={styles.list}>
          {list.map((n, index) => {
            return (
              <div
                className={styles.item}
                key={'achievements' + index}
                onClick={() => {
                  window.open(n.href);
                }}
              >
                {n.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Achievements);
