import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import styles from './style.module.scss';
import { observer } from 'mobx-react';

const Layout = (props: any) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout-header']}>
        <Header></Header>
      </div>
      <div className={styles['layout-content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default observer(Layout);
