import styles from './Marquee.module.css';

const items = ['Microblading', 'Powder Brows', 'Lip Blush', 'Lash Line', 'Color Correction', 'Vegan Pigments'];

export function Marquee() {
  // Rendered twice so the CSS loop is seamless.
  const track = [...items, ...items];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
