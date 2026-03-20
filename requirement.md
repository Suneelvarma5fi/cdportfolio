# Suneel Armstrong — Portfolio Site Brief
> Take this to Claude Code in VS Code. Everything decided, everything pending, all in one place.

---

## STACK & HOSTING

| Item | Decision |
|---|---|
| Framework | **Astro** |
| Styling | **Tailwind CSS** |
| Hosting | **Vercel** |
| Required package | `@astrojs/vercel` adapter (add to astro config before deploying) |
| Video hosting | **Cloudinary** or **Vimeo unlisted** — do NOT put video files in repo (Vercel 100MB limit) |

---

## DESIGN DIRECTION

- **Visual style:** Clean, minimal, editorial
- **Display font:** Cormorant Garamond (serif, elegant)
- **Body font:** Syne (geometric, modern)
- **Color palette:** Off-white background `#F4F1EC`, near-black ink `#1C1A17`, warm amber accent `#C17B3A`
- No gradients. No purple. No generic tech vibes.

---

## SITE STRUCTURE (Multi-page)

```
/                        → Main portfolio page
/work/[project-slug]     → Case study page per project (Astro Content Collections)
```

Each case study is a `.md` file in `/content/work/` — Astro renders it into the template automatically. Adding future projects = drop a new `.md` file, done.

---

## PAGE SECTIONS (in order)

---

### SECTION 1 — HERO

**Layout:** Two-column grid

**Left column:**
- Name: `SUNEEL ARMSTRONG` — large serif, ALL CAPS
- Tagline: `CREATIVE DIRECTOR & TECHNOLOGIST` — small caps, amber color
- Description: **bullet points** — ⚠️ content to be provided by Suneel

**Right column — Video Area:**
- Portrait ratio (3:4) video box
- **Video 1 (loop):** Character standing still — plays on load, loops silently
- **Video 2 (backflip):** Plays once on button click, then returns to Video 1 loop
- **Button below video:** `BACKFLIP` — minimal outlined button
  - On click → pause loop → play backflip video → on `ended` event → resume loop
  - ⚠️ Both videos to be uploaded by Suneel and hosted on Cloudinary/Vimeo

**Backflip logic (pseudocode):**
```js
btn.onclick = () => {
  loopVid.pause()
  backflipVid.play()
  backflipVid.onended = () => {
    backflipVid.currentTime = 0
    loopVid.play()
  }
}
```

---

### SECTION 2 — WORK

**Header row:** `Work` (italic serif, left) + `See All →` (small caps link, right)

**3 project cards, stacked vertically.** Each card:
- Left: thumbnail image (Suneel provides per project)
- Right: project title + short description + two CTA links:
  - `Watch →` — links to video (YouTube/Vimeo)
  - `Deep Dive →` — navigates to `/work/[project-slug]` (case study page)
- Hover: card lifts with subtle shadow

**Projects:** ⚠️ Suneel to provide — title, short desc, thumbnail image, watch link, case study content
(Placeholders at build time, swap in later)

---

### SECTION 3 — I WRITE

**Header:** `I write` (italic serif)

**Layout:** Soft pink-tinted container, article rows inside. Each row:
- Left: article headline (hyperlinked, opens in new tab)
- Right: date (muted, small)
- Hover: row gets subtle white highlight background

⚠️ Suneel to provide: headline, URL, date for each article

---

### SECTION 4 — PROUD SIDE QUESTS

**Header:** `Proud Side Quests` (italic serif)

**Layout:** Horizontal scroll, image cards (as per sketch)

Each card:
- Left: photo/image
- Right: bold one-liner

**Cards confirmed at launch:**

| Card | Image | One-liner |
|---|---|---|
| N8N Japan Hackathon | ⚠️ Event photo from Suneel | TBD |
| LeetCode Top 10% Globally | Screenshot or clean stat card | TBD |
| Events I've hosted | ⚠️ Image from Suneel | TBD |

⚠️ Suneel to provide: photos for each card + one-liner copy

---

### SECTION 5 — FOOTER / HI

**Style:** Warm yellow-tinted full-width block

**Content:**
- Short personal message to the viewer (draft and approve with Suneel)
- `You can reach me on X` with handle linked
- ⚠️ Suneel to provide: X handle

No contact form. No newsletter. Just the message and X link.

---

## CASE STUDY PAGE TEMPLATE

Each `/work/[slug]` page has:
- Project title + category tag
- Film/video embedded at top (YouTube/Vimeo embed)
- Written breakdown: process, tools used, result
- `← Back to work` link

Content lives in `/content/work/[slug].md` using Astro Content Collections.
⚠️ Suneel to provide case study content per project when ready.

---

## FULL CONTENT CHECKLIST

| # | Item | Status |
|---|---|---|
| 1 | Hero description (bullet points) | ⚠️ Suneel to provide |
| 2 | Video 1 — loop (character standing still) | ⚠️ Suneel to upload |
| 3 | Video 2 — backflip | ⚠️ Suneel to upload |
| 4 | Work project 1 — title, desc, thumbnail, watch link, case study | ⚠️ Later |
| 5 | Work project 2 — title, desc, thumbnail, watch link, case study | ⚠️ Later |
| 6 | Work project 3 — title, desc, thumbnail, watch link, case study | ⚠️ Later |
| 7 | Writing pieces — headline, URL, date (all articles) | ⚠️ Suneel to provide |
| 8 | Side quest: Japan hackathon photo + one-liner | ⚠️ Suneel to provide |
| 9 | Side quest: Events hosted — photo + one-liner | ⚠️ Suneel to provide |
| 10 | X handle for footer | ⚠️ Suneel to provide |
| 11 | Cloudinary account setup (for video hosting) | ⚠️ Suneel to set up |

---

## KNOWN COMPLICATIONS & FIXES

| Complication | Fix |
|---|---|
| Videos too large for Vercel (100MB limit) | Host on Cloudinary or Vimeo, reference by URL |
| Vercel doesn't know how to build Astro by default | Add `@astrojs/vercel` adapter to `astro.config.mjs` |
| Case study pages need content management | Use Astro Content Collections — each project = one `.md` file |

---

## SUGGESTED BUILD ORDER FOR CLAUDE CODE

1. Init Astro project + install Tailwind + Vercel adapter
2. Build global layout, fonts, color tokens
3. Build Hero section (with video placeholder boxes + backflip button logic)
4. Build Work section (3 placeholder cards with correct layout)
5. Build I Write section (2–3 placeholder article rows)
6. Build Side Quests horizontal scroll
7. Build Footer/Hi section
8. Build Case Study page template
9. Set up Astro Content Collections for `/work/[slug]`
10. Deploy to Vercel, confirm build works
11. Swap in real content, videos, images as Suneel provides them