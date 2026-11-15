import { artist } from '../content';
import { Media } from './Media';
import { Reveal } from './Reveal';
import styles from './About.module.css';

const values = [
  { title: 'Certified & insured', text: 'Internationally trained, licensed studio, full liability cover.' },
  { title: 'Vegan pigments', text: 'Certified, vegan pigments that heal true to tone. No gray, no red.' },
  { title: 'Sterile & single-use', text: 'Medical-grade hygiene with fresh needles and cartridges for every client.' },
];

export function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.visual}>
          <div className={styles.frame}>
            <Media alt={`${artist.name} at work in the studio`} art="portrait" tone={18} />
          </div>
          <p className={styles.signature}>{artist.name}</p>
        </Reveal>

        <div className={styles.copy}>
          <Reveal>
            <span className={`eyebrow ${styles.eyebrow}`}>The artist</span>
            <h2 className="section-title">
              Precision of a <em>painter</em>, care of a friend.
            </h2>
          </Reveal>
          {artist.bio.map((paragraph, i) => (
            <Reveal key={i} delay={100 + i * 80}>
              <p className={styles.bio}>{paragraph}</p>
            </Reveal>
          ))}

          <ul className={styles.values}>
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 90}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
