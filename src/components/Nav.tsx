import { useEffect, useState } from 'react';
import { artist, navLinks } from '../content';
import { useScrolled } from '../hooks/useScrolled';
import styles from './Nav.module.css';

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <a href="#top" className={styles.logo} onClick={close}>
          {artist.name}
          <span>PMU Studio</span>
        </a>

        <ul id="site-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a href="#contact" className="btn" onClick={close}>
              Book a consultation
            </a>
          </li>
        </ul>

        <a href="#contact" className={`btn ${styles.cta}`}>
          Book now
        </a>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
