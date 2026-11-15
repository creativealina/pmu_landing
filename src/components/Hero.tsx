import { artist } from '../content';
import { Media } from './Media';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.fadeUp}`}>
            {artist.title} · {artist.city}
          </p>
          <h1 className={`${styles.title} ${styles.fadeUp}`}>
            Wake up <em>beautifully</em>
            <br />
            yourself.
          </h1>
          <p className={`${styles.lead} ${styles.fadeUp}`}>
            Brows, lips and eyeliner that look natural, so subtle that people only notice you look rested.
            Designed by hand for your face and healed to last.
          </p>
          <div className={`${styles.actions} ${styles.fadeUp}`}>
            <a href="#contact" className="btn">
              Book a consultation <span className="btn-arrow">→</span>
            </a>
            <a href="#work" className="btn btn--ghost">
              View portfolio
            </a>
          </div>

          <dl className={`${styles.stats} ${styles.fadeUp}`}>
            <div>
              <dt>Years of practice</dt>
              <dd>{artist.yearsExperience}+</dd>
            </div>
            <div>
              <dt>Happy clients</dt>
              <dd>{(artist.clients / 1000).toFixed(1)}k</dd>
            </div>
            <div>
              <dt>Certifications</dt>
              <dd>{artist.certifications}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual}>
          <div className={styles.arch}>
            <Media alt={`Portrait of ${artist.name}`} art="portrait" tone={22} eager />
          </div>
          <div className={styles.thumb}>
            <Media alt="Healed powder brows, close-up" art="brows" tone={26} eager />
          </div>
          <div className={styles.badge}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
              </defs>
              <text>
                <textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">Healed results · Natural finish · </textPath>
              </text>
            </svg>
            <span>✦</span>
          </div>
          <p className={styles.caption}>
            <span>Healed · 6 weeks</span>
            Soft powder brows
          </p>
        </div>
      </div>
    </section>
  );
}
