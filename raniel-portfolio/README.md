# Raniel Christian M. Capon — Portfolio

Personal portfolio built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide**.
It builds to a static site (`/out`) and deploys on Vercel with no extra configuration.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → /out
```

Requires Node.js 18.18 or newer (20+ recommended).

## Editing content

**All text, links and image paths live in `src/data/content.ts`.** You shouldn't need to touch the components.

Placeholders to fill in (search for `TODO`):

| What | Where in `content.ts` |
|---|---|
| Email, phone, location, Facebook & LinkedIn links | `contact` |
| Final site URL (used for SEO / link previews) | `site.url` |
| Photos for Collaboratech 2026, Peso Smart, Blockchain Fundamentals, Daluyon, National Career Fest, Ideathon | `projects[].image` |

### Adding a project photo

1. Put the image in `public/images/projects/` (WebP or JPG, around 1000 px wide is plenty).
2. In `content.ts`, add an `image` to that project:

```ts
image: { src: "/images/projects/collaboratech.webp", width: 1000, height: 1250, alt: "Collaboratech 2026 opening" },
```

`width`/`height` only need the right **ratio**: the tile shows the whole image without cropping.
Projects without an `image` show a "Photo coming soon" placeholder.

### Adding gallery items

Add an entry to the `gallery` array, with the file in `public/images/gallery/`.

## Project structure

```
src/
  app/            layout (SEO metadata, fonts), page, global styles, favicon
  components/     Navbar, PillTitle, EntryList, Portrait, Reveal, Watermark, Icons
    sections/     Hero, InfoPanel (About / Leadership / Experience), Projects,
                  Gallery (with lightbox), Achievements, Skills, Contact
  data/content.ts ← all content
public/
  images/         portrait + optimized WebP pubmats
  og.jpg          link-preview image
```

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/<your-username>/raniel-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to **vercel.com → Add New… → Project**, then import the repository.
3. Vercel detects **Next.js** automatically. Keep the defaults (Build: `next build`, no environment variables needed), then click **Deploy**.
4. When it's live, copy the URL (e.g. `https://raniel-portfolio.vercel.app`) into `site.url` in `content.ts`, then commit and push. Vercel redeploys on every push to `main`.
5. Optional custom domain: **Project → Settings → Domains**.

CLI alternative: `npm i -g vercel && vercel --prod`.
