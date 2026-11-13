# Kanaga Rethnam — Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Editing content

All text lives in `src/data/portfolio.ts` (profile, skills, experience, education, projects, awards).
To show a "to be added" box in a case study, add a section with `placeholder: true`
(e.g. a Key Findings section for the research project once results can be shared).

## Assets

- Resume: `public/resume/Kanaga_Rethnam_Resume.pdf` (replace the file to update downloads)
- Portrait source: `scripts/portrait-source.png` → run `npm run images` to regenerate
  `public/images/*` (hero, about crop, Open Graph card) and `public/apple-touch-icon.png`.

## Case-study links

Each project opens in a modal with a shareable URL, e.g. `/#project/cybersecurity-banking-research`.

## Deploy

- **Vercel:** import the folder/repo → framework preset "Vite" → deploy (build `npm run build`, output `dist`).
- **Netlify:** `netlify.toml` is included; import the repo or drag the `dist/` folder into Netlify Drop.

After deploying, set absolute URLs for `og:image` / `twitter:image` in `index.html`
(e.g. `https://your-domain/images/og-image.jpg`) so LinkedIn and other platforms show the preview card.
