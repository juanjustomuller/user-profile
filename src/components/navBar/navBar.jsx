import styles from './navBar.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#">
            <p className={styles.navLink}>Home</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#">
            <p className={styles.navLink}>Sobre mi</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#">
            <p className={styles.navLink}>Intereses</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#">
            <p className={styles.navLink}>Contacto</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



