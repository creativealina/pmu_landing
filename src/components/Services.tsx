import { currency, services } from '../content';
import { Reveal } from './Reveal';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h2 className="section-title">
              Signature <em>treatments</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Every treatment includes a consultation, custom shape mapping, numbing, an aftercare kit and a
              perfecting touch-up.
            </p>
          </Reveal>
        </div>

        <ol className={styles.list}>
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 70} className={styles.row}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.main}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <dl className={styles.facts}>
                <div>
                  <dt>Duration</dt>
                  <dd>{service.duration}</dd>
                </div>
                <div>
                  <dt>Includes</dt>
                  <dd>{service.touchUp}</dd>
                </div>
              </dl>
              <div className={styles.price}>
                <span>from</span>
                {currency.format(service.priceFrom)}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
