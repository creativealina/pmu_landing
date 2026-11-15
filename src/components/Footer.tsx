import { artist, navLinks } from '../content';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>{artist.name}</p>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copy}>
          © {year} {artist.name} PMU Studio · {artist.city}
        </p>
      </div>
    </footer>
  );
}
