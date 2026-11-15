import type { CSSProperties } from 'react';
import type { WorkCategory } from '../content';
import styles from './Media.module.css';

type Art = WorkCategory | 'portrait';

interface MediaProps {
  src?: string;
  alt: string;
  /** Placeholder line-art motif when no `src` is provided. */
  art?: Art;
  /** Placeholder hue (0–360). */
  tone?: number;
  state?: 'before' | 'after';
  className?: string;
  eager?: boolean;
}

/** Stylised line drawings used until real photography is added. */
function PlaceholderArt({ art, state }: { art: Art; state: 'before' | 'after' }) {
  const before = state === 'before';
  const stroke = before ? 'var(--art-faint)' : 'var(--art-ink)';
  const common = {
    fill: 'none',
    stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (art) {
    case 'brows':
    case 'correction':
      return (
        <svg viewBox="0 0 200 120" aria-hidden="true" className={styles.art}>
          <path d="M28 84 C62 50 112 40 174 58" {...common} strokeWidth={before ? 3 : 11} strokeDasharray={before ? '2 7' : undefined} />
          {!before &&
            [40, 56, 72, 88, 104, 120, 136].map((x, i) => (
              <path key={x} d={`M${x} ${74 - i * 5.5 + i * i * 0.35} l7 -9`} {...common} strokeWidth={1.3} opacity={0.5} />
            ))}
          <path d="M60 104 C90 92 120 92 150 104" {...common} strokeWidth={1.2} opacity={0.35} />
        </svg>
      );
    case 'lips':
      return (
        <svg viewBox="0 0 200 120" aria-hidden="true" className={styles.art}>
          <path
            d="M28 62 C56 38 82 40 100 52 C118 40 144 38 172 62 C142 96 58 96 28 62 Z"
            fill={before ? 'none' : 'var(--art-fill)'}
            stroke={stroke}
            strokeWidth={before ? 2 : 2.5}
            strokeDasharray={before ? '3 6' : undefined}
          />
          <path d="M30 62 C70 66 130 66 170 62" {...common} strokeWidth={1.6} />
        </svg>
      );
    case 'eyeliner':
      return (
        <svg viewBox="0 0 200 120" aria-hidden="true" className={styles.art}>
          <path d="M30 66 C70 32 130 32 168 62 C130 92 70 92 30 66 Z" {...common} strokeWidth={1.4} opacity={0.6} />
          <circle cx="100" cy="64" r="15" {...common} strokeWidth={1.4} opacity={0.6} />
          <path d="M32 64 C72 30 130 30 170 58 L186 44" {...common} strokeWidth={before ? 2 : 6} strokeDasharray={before ? '2 6' : undefined} />
        </svg>
      );
    case 'portrait':
      return (
        <svg viewBox="0 0 200 248" aria-hidden="true" className={`${styles.art} ${styles.artPortrait}`}>
          {/* Shoulders */}
          <path d="M86 212 C70 222 46 228 20 248 M114 212 C130 222 154 228 180 248" {...common} strokeWidth={1.3} opacity={0.6} />
          {/* Long hair falling behind the face and over the shoulders */}
          <path
            d="M100 14 C52 14 30 56 34 110 C37 150 30 190 16 236 C40 244 64 238 76 222 C70 200 64 170 72 150 L128 150 C136 170 130 200 124 222 C136 238 160 244 184 236 C170 190 163 150 166 110 C170 56 148 14 100 14 Z"
            fill="var(--art-hair)"
            stroke={stroke}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          {/* Neck */}
          <path d="M86 180 C88 194 88 204 86 214 L114 214 C112 204 112 194 114 180 Z" fill="var(--art-skin)" />
          <path d="M86 180 C88 194 88 204 86 214 M114 180 C112 194 112 204 114 214" {...common} strokeWidth={1.2} />
          {/* Face */}
          <path
            d="M100 40 C66 40 54 76 56 112 C58 156 80 190 100 192 C120 190 142 156 144 112 C146 76 134 40 100 40 Z"
            fill="var(--art-skin)"
            stroke={stroke}
            strokeWidth={1.4}
          />
          {/* Side-swept fringe with a part on the right */}
          <path
            d="M54 104 C48 52 76 22 112 24 C142 26 154 58 147 100 C141 74 128 54 112 46 C96 62 74 76 54 104 Z"
            fill="var(--art-hair)"
            stroke={stroke}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          {/* Hair strands */}
          <path
            d="M112 46 C96 58 80 70 62 94 M117 34 C134 44 143 64 146 92 M44 70 C36 120 46 170 28 226 M58 120 C52 156 62 192 50 230 M156 70 C164 120 154 170 172 226 M142 124 C150 160 140 196 152 230"
            {...common}
            strokeWidth={1}
            opacity={0.55}
          />
          {/* Cheeks */}
          <circle cx="72" cy="146" r="10" fill="var(--art-blush)" />
          <circle cx="128" cy="146" r="10" fill="var(--art-blush)" />
          {/* Brows */}
          <path d="M68 106 C78 98 90 98 96 102 M104 102 C110 98 122 98 132 106" {...common} strokeWidth={4} />
          {/* Closed eyes with lashes */}
          <path d="M72 121 C80 127 90 127 94 121 M106 121 C110 127 120 127 128 121" {...common} strokeWidth={1.4} />
          <path
            d="M76 124 l-2.5 4 M82 125.8 l-1 4.5 M88 125.4 l0.5 4.5 M112 125.4 l-0.5 4.5 M118 125.8 l1 4.5 M124 124 l2.5 4"
            {...common}
            strokeWidth={1.1}
          />
          {/* Nose */}
          <path d="M100 128 C98 140 95 146 102 150" {...common} strokeWidth={1.2} />
          {/* Lips */}
          <path d="M84 166 C90 160 96 160 100 163 C104 160 110 160 116 166 C108 175 92 175 84 166 Z" fill="var(--art-fill)" stroke={stroke} strokeWidth={1.4} />
          <path d="M84 166 C94 167.5 106 167.5 116 166" {...common} strokeWidth={1.1} />
        </svg>
      );
  }
}

/** Prefixes root-relative paths (e.g. "/works/a.jpg") with the deploy base, such as "/repo-name/". */
function withBase(path: string) {
  return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
}

export function Media({ src, alt, art = 'brows', tone = 24, state = 'after', className = '', eager = false }: MediaProps) {
  if (src) {
    return (
      <img
        src={withBase(src)}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`${styles.img} ${className}`}
      />
    );
  }

  const style: CSSProperties & Record<'--tone', number> = { '--tone': tone };
  return (
    <div role="img" aria-label={alt} style={style} className={`${styles.placeholder} ${styles[state]} ${className}`}>
      <PlaceholderArt art={art} state={state} />
    </div>
  );
}
