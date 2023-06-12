import { observer } from 'mobx-react';
import styles from './style.module.scss';
import Research from '@/components/Research';
import WhatIsHellman from '@/components/WhatIsHellman';
import OurValue from '@/components/OurValue';
import Nodes from '@/components/Nodes';
import Rewards from '@/components/Rewards';
import Alerts from '@/components/Alerts';
import Staking from '@/components/Staking';
import Newsletters from '@/components/Newsletters';
import Achievements from '@/components/Achievements';
import Partner from '@/components/Partner';
import ContactUs from '@/components/ContactUs';
const Home = (props: any) => {
  return (
    <div className={styles.home}>
      <Research></Research>
      <WhatIsHellman></WhatIsHellman>
      <OurValue></OurValue>
      <Nodes></Nodes>
      <Rewards></Rewards>
      <Alerts></Alerts>
      <Staking></Staking>
      <Newsletters></Newsletters>
      <Achievements></Achievements>
      <Partner></Partner>
      <ContactUs></ContactUs>
    </div>
  );
};

export default observer(Home);
