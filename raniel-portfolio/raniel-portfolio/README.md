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

Still to fill in (search for `TODO` / empty values):

| What | Where in `content.ts` |
|---|---|
| Phone number (optional; hidden while empty) | `contact.phone` |
| Final site URL (used for SEO / link previews) | `site.url` |
| Event photos for Leadership Training & Seminars and other GCCL / JME activities | `momentEvents` |

Email and social links (LinkedIn, Instagram, Facebook) are set in `contact` and `socials`.

### Adding event photos ("Selected Moments")

1. Put the photo in `public/images/moments/` (JPG or WebP, about 1600 px on the long side is plenty).
2. Add it to that event's `photos` list in `momentEvents`:

```ts
{ src: M + "collaboratech-opening.webp", width: 1600, height: 1067, kind: "photo",
  alt: "Raniel opening Collaboratech 2026", caption: "Opening the event at the MH Lobby" },
```

`kind: "photo"` items are shown before official posters and get a gold PHOTO tag. Images keep their original aspect ratio.
To add a new event, copy one of the event blocks and give it a unique `slug`. Use the same `slug` on a project in `projects` so its card's "View moments" link opens that event.

### Adding a project cover image

Give the project an `image` (same shape as above, without `kind`/`caption`). Projects without one show a "Photo coming soon" tile.

### Adding gallery items

Add an entry to the `gallery` array, with the file in `public/images/gallery/`.

## Project structure

```
src/
  app/            layout (SEO metadata, fonts), page, global styles, favicon
  components/     Navbar, PillTitle, EntryList, Portrait, Reveal, Watermark, Icons
    sections/     Hero, InfoPanel (About / Leadership / Experience), Projects,
                  Moments (event photos by event), Gallery, Achievements, Skills, Contact
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
