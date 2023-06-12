import classNames from 'classnames';
import { observer } from 'mobx-react';
import styles from './style.module.scss';

const ContactUs = () => {
  const title = `CONTACT US`;
  const icons = [
    {
      icon: require('@/assets/images/image-icon-09.png'),
      href: 'https://twitter.com/HellmanResearch',
    },
    {
      icon: require('@/assets/images/image-icon-10.png'),
      href: 'https://medium.com/@HellmanResearch',
    },
    {
      icon: require('@/assets/images/image-icon-11.png'),
      href: 'https://github.com/HellmanResearch',
    },
    {
      icon: require('@/assets/images/image-icon-12.png'),
      href: 'https://xs0zvv8asis.typeform.com/to/dbSe7Wf',
    },
  ];
  return (
    <div className={styles['contact-us']}>
      <img
        className={classNames(styles.bg, 'lazy-image')}
        src={require('@/assets/images/image-bg-11.png')}
        alt=""
      />
      <div className={styles['contact-us-content']}>
        <div className={styles.title}>{title}</div>
        <div className={styles.email}>
          <div className="font30">Email:</div>
          <div className="font20">hellmanresearch@outlook.com</div>
        </div>
        <div className={styles.icons}>
          {icons.map((n, index) => {
            return (
              <div
                className={styles.icon}
                key={'icon' + index}
                onClick={() => {
                  window.open(n.href);
                }}
              >
                <img className={classNames('lazy-image')} src={n.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(ContactUs);
