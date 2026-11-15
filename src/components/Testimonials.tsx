import { testimonials } from '../content';
import { Reveal } from './Reveal';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Kind words</span>
            <h2 id="testimonials-title" className="section-title">
              Loved by <em>clients</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={styles.rating}>
              <span aria-hidden="true">★★★★★</span> 4.9 average from 380+ reviews
            </p>
          </Reveal>
        </div>
      </div>

      <ul className={styles.track}>
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 90} className={styles.card}>
            <blockquote>
              <p>“{t.quote}”</p>
            </blockquote>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.service}</span>
            </footer>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
