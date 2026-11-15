import { useId, useState, type CSSProperties } from 'react';
import type { Work } from '../content';
import { Media } from './Media';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
  work: Work;
  initial?: number;
}

/** Drag/keyboard-accessible comparison slider built on a native range input. */
export function BeforeAfter({ work, initial = 50 }: BeforeAfterProps) {
  const [position, setPosition] = useState(initial);
  const id = useId();
  const style: CSSProperties & Record<'--pos', string> = { '--pos': `${position}%` };

  return (
    <div className={styles.root} style={style}>
      <Media src={work.after} alt={`${work.title}, after`} art={work.category} tone={work.tone} state="after" eager />
      <div className={styles.before} aria-hidden="true">
        <Media src={work.before} alt="" art={work.category} tone={work.tone} state="before" eager />
      </div>

      <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
      <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>

      <div className={styles.handle} aria-hidden="true">
        <span className={styles.knob}>
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="visually-hidden">
        Drag to compare before and after
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className={styles.range}
      />
    </div>
  );
}
