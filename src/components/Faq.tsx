import { faqs } from '../content';
import { Reveal } from './Reveal';
import styles from './Faq.module.css';

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">
            Good <em>questions</em>
          </h2>
          <p className={styles.note}>
            Can't find your answer? <a href="#contact">Message me</a>. I reply to every question personally.
          </p>
        </Reveal>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <details className={styles.item} name="faq">
                <summary>
                  {faq.question}
                  <span className={styles.icon} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
