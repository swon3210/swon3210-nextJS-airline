import styles from '../styles/Navigator.module.css';

import Link from 'next/link';

const Navigator = () => {
  return (
    <nav className={styles['navigator']}>
      <ul className={styles['navigator-list']}>
        <li className={styles['navigator-list-item']}>
          <Link href="/">성인 예약</Link>
        </li>
        <li className={styles['navigator-list-item']}>
          <Link href="/kids">어린이 예약</Link>
        </li>
        <li className={styles['navigator-list-item']}>
          <Link href="/elders">노약자 예약</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
