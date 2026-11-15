import { process } from '../content';
import { Reveal } from './Reveal';
import styles from './Process.module.css';

export function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">The experience</span>
            <h2 className="section-title">
              From first sketch <br />
              to <em>healed</em> perfection
            </h2>
          </Reveal>
        </div>

        <ol className={styles.steps}>
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className={styles.step}>
              <span className={styles.number}>{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
