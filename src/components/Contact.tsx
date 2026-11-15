import { artist } from '../content';
import { Reveal } from './Reveal';
import styles from './Contact.module.css';

export function Contact() {
  const { contact } = artist;

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <span className={`eyebrow ${styles.eyebrow}`}>Bookings open</span>
          <h2 className={styles.title}>
            Let's design <em>your</em> look.
          </h2>
          <p className={styles.lead}>
            Start with a free 20-minute consultation, in the studio or by video. Send a photo of your current
            brows or lips and I will suggest the technique that suits you best.
          </p>
          <div className={styles.actions}>
            <a href={contact.bookingUrl} className="btn btn--light">
              Text to book <span className="btn-arrow">→</span>
            </a>
            <a href={`mailto:${contact.email}`} className={`btn ${styles.outline}`}>
              {contact.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <dl className={styles.info}>
            <div>
              <dt>Studio</dt>
              <dd>{contact.address}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{contact.hours}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  {contact.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
