import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { artist, categoryLabels, works, type WorkCategory } from '../content';
import { BeforeAfter } from './BeforeAfter';
import { Media } from './Media';
import { Reveal } from './Reveal';
import styles from './Portfolio.module.css';

type Filter = WorkCategory | 'all';

const filters: Filter[] = ['all', ...(Object.keys(categoryLabels) as WorkCategory[])];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = useMemo(() => (filter === 'all' ? works : works.filter((w) => w.category === filter)), [filter]);
  const active = activeIndex === null ? null : visible[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  const step = useCallback(
    (delta: number) =>
      setActiveIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  const onDialogKey = (e: KeyboardEvent<HTMLDialogElement>) => {
    // Arrow keys on the slider adjust it; elsewhere they page through works.
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title">
              Healed <em>results</em>,<br /> not filters.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Every photo is unretouched. Most are shown fully healed, because that is the result you live with.
              Tap any work to compare before and after.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className={styles.filters} role="group" aria-label="Filter works by category">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                className={styles.chip}
                onClick={() => {
                  setFilter(f);
                  setActiveIndex(null);
                }}
              >
                {f === 'all' ? 'All work' : categoryLabels[f]}
                <span className={styles.count}>
                  {f === 'all' ? works.length : works.filter((w) => w.category === f).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <ul className={styles.grid} key={filter}>
          {visible.map((work, i) => (
            <li key={work.id} className={`${styles.item} ${styles[work.shape]}`} style={{ animationDelay: `${i * 60}ms` }}>
              <button type="button" className={styles.card} onClick={() => setActiveIndex(i)}>
                <Media src={work.after} alt={work.title} art={work.category} tone={work.tone} />
                <span className={styles.overlay}>
                  <span className={styles.meta}>
                    {categoryLabels[work.category]} · {work.technique}
                  </span>
                  <span className={styles.name}>{work.title}</span>
                  <span className={styles.view}>Compare before / after →</span>
                </span>
                {work.healed && <span className={styles.healed}>Healed</span>}
              </button>
            </li>
          ))}
        </ul>

        <Reveal className={styles.more}>
          <a href={artist.contact.instagram} target="_blank" rel="noreferrer" className="btn btn--ghost">
            More work on Instagram {artist.contact.instagramHandle}
          </a>
        </Reveal>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="work-dialog-title"
        onClose={() => setActiveIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setActiveIndex(null)}
        onKeyDown={onDialogKey}
      >
        {active && (
          <div className={styles.dialogInner}>
            <div className={styles.compare}>
              <BeforeAfter key={active.id} work={active} />
            </div>
            <div className={styles.details}>
              <p className="eyebrow">{categoryLabels[active.category]}</p>
              <h3 id="work-dialog-title">{active.title}</h3>
              <dl>
                <div>
                  <dt>Technique</dt>
                  <dd>{active.technique}</dd>
                </div>
                <div>
                  <dt>Stage</dt>
                  <dd>{active.healed ? 'Fully healed' : 'Fresh, right after the procedure'}</dd>
                </div>
              </dl>
              <a href="#contact" className="btn" onClick={() => setActiveIndex(null)}>
                I want this look
              </a>
              <div className={styles.pager}>
                <button type="button" onClick={() => step(-1)} aria-label="Previous work">
                  ←
                </button>
                <span>
                  {(activeIndex ?? 0) + 1} / {visible.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next work">
                  →
                </button>
              </div>
            </div>
            <button type="button" className={styles.close} onClick={() => setActiveIndex(null)} aria-label="Close">
              ×
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
