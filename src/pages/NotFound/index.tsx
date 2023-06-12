import { observer } from 'mobx-react';
import styles from './style.module.scss';
const NotFound = (props: any) => {
  return <div className={styles.notFound}>NotFound</div>;
};

export default observer(NotFound);
