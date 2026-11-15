# PMU Artist Portfolio

**Live preview:** https://creativealina.github.io/pmu_landing/

A one-page portfolio and booking site for a permanent makeup artist, built with React 19, TypeScript (strict) and Vite. The styling uses CSS Modules only, with no UI framework.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run lint
```

## Sections

Hero → services marquee → **Portfolio** (filters, before/after lightbox) → Services & prices → About the artist → Process → Testimonials → FAQ → Booking/contact.

## Making it yours

All content lives in **`src/content.ts`**: the artist's name, bio, contact links, services and prices, portfolio items, testimonials and FAQ. You don't need to edit any components.

### Adding real portfolio photos

1. Put images in `public/works/`, e.g. `public/works/brows-01-before.jpg` and `brows-01-after.jpg`.
2. Reference them in `works`:

   ```ts
   { id: 'w1', title: 'Soft powder brows', category: 'brows', technique: 'Ombré',
     healed: true, before: '/works/brows-01-before.jpg', after: '/works/brows-01-after.jpg',
     tone: 24, shape: 'portrait' }
   ```

   - `shape` controls the grid tile: `portrait` (tall), `square`, or `landscape` (wide).
   - Before and after photos should have the same framing and crop so the slider lines up.
   - Any item without `after`/`before` shows a line-art placeholder.

The hero and About images use `<Media … />` in `Hero.tsx` and `About.tsx`. Add a `src="/your-photo.jpg"` prop to replace the placeholders.

### Theme

Colours, fonts and spacing are CSS custom properties at the top of `src/index.css`.

## Viewing on other devices (phone, other computers)

Run the production build in Docker. It's served on port 8080 on every network interface:

```bash
docker compose up -d --build     # rebuild after changes
docker compose down              # stop
```

Then open `http://<this-PC's-IP>:8080` on any device on the same network (`ipconfig` shows the IP).

`npm run dev -- --host` also works, but only if Windows Firewall allows Node.js on the current network.

## Deploying (GitHub Pages)

Every push to `main` builds and deploys the site through `.github/workflows/deploy.yml`. You can follow progress in the repository's **Actions** tab. The workflow sets the base path (`/pmu_landing/`) automatically.

Reference photos from code as root-relative paths (`/works/a.jpg`). The `Media` component adds the base path for you.
