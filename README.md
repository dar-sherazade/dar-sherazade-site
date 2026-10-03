# Dar Sherazade

The website of **Dar Sherazade** (Instagram: [@sheracreates](https://www.instagram.com/sheracreates/)), an independent cultural project about Algerian kaftans and Algerian dress heritage: craft, archives, regional traditions and contemporary creation.

The site is an **editorial archive, not a shop**. It has no cart, checkout, payments or customer accounts. When a piece is available, visitors are invited to enquire privately by Instagram or email.

- **Live site:** https://dar-sherazade.github.io/
- **Hosting:** GitHub Pages (free), published automatically by GitHub Actions

---

## Contents

1. [How the site is built](#how-the-site-is-built)
2. [Working on your computer](#working-on-your-computer)
3. [Publishing (GitHub Pages)](#publishing-github-pages)
4. [Changing Instagram, email and the site address](#changing-instagram-email-and-the-site-address)
5. [Adding a kaftan to the archive](#adding-a-kaftan-to-the-archive)
6. [Marking a piece as available](#marking-a-piece-as-available)
7. [Adding a journal article](#adding-a-journal-article)
8. [Changing images](#changing-images)
9. [Changing the About page and homepage text](#changing-the-about-page-and-homepage-text)
10. [Using a custom domain](#using-a-custom-domain)
11. [Project structure](#project-structure)

---

## How the site is built

| | |
|---|---|
| Framework | [Astro](https://astro.build) — generates plain HTML pages |
| Language | TypeScript, modern CSS (no CSS framework) |
| JavaScript | A few lines only: scroll reveals, header and mobile menu, archive filters |
| Fonts | EB Garamond and IBM Plex Sans, served from the site itself |
| Images | Optimised automatically (WebP, several sizes, lazy loading) |
| Content | Markdown files in `src/content/`, one folder per kaftan or article |

There is no server and no database. The site is a folder of static files.

---

## Working on your computer

You need **Node.js 22 or newer** ([nodejs.org](https://nodejs.org)). In a terminal, from the project folder:

```bash
npm install        # once, to download the tools
npm run dev        # starts a local site at http://localhost:4321 (refreshes as you edit)
npm run build      # builds the final site into the dist/ folder
npm run preview    # serves the built site from dist/ to check it
```

---

## Publishing (GitHub Pages)

Publishing is automatic: **every push to the `main` branch rebuilds and republishes the site** (see `.github/workflows/deploy.yml`). Progress is visible in the repository's **Actions** tab. A deployment usually takes one to two minutes.

### One-time setup

1. **Repository visibility.** GitHub Pages is free for **public** repositories. Make the repository public in **Settings → General → Danger Zone → Change visibility** (private repositories need a paid plan).
2. **Turn on Pages with GitHub Actions.** In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** (not "Deploy from a branch").
3. Push to `main`. When the workflow finishes, the site is live at the address shown in **Settings → Pages**.

The site works at any of these addresses without changing code. The workflow reads the address from the Pages settings:

- `https://<username>.github.io/` (a repository named `<username>.github.io`, like this one)
- `https://<username>.github.io/<repository-name>/`
- a custom domain such as `https://sheracreates.com`

---

## Changing Instagram, email and the site address

All of these are in **one file: `src/config.ts`**.

```ts
export const siteConfig = {
  name: 'Dar Sherazade',
  instagramHandle: '@sheracreates',
  instagramUrl: 'https://www.instagram.com/sheracreates/',
  email: 'YOUR_EMAIL_ADDRESS',          // ← replace with the real address
  siteUrl: 'https://dar-sherazade.github.io',
  ...
};
```

Until `email` is changed, the site shows `YOUR_EMAIL_ADDRESS` on the Contact page, and the "Enquire by email" buttons point to the Contact page. Once a real address is set, they automatically open an email with a subject already filled in, for example:

```
Dar Sherazade enquiry — Ivory Lace Kaftan (DS-001)
```

---

## Adding a kaftan to the archive

Each kaftan has **its own folder** in `src/content/kaftans/`, containing one text file (`index.md`) and its photographs:

```
src/content/kaftans/
└── ivory-lace-kaftan/
    ├── index.md            ← the text and details
    ├── cover.jpg           ← main photograph (2:3 portrait)
    ├── detail-bodice.jpg   ← close-ups shown under "Details"
    └── detail-hem.jpg
```

The folder name becomes the page address: `ivory-lace-kaftan` → `/archive/ivory-lace-kaftan/`. Use lowercase letters, numbers and hyphens only.

### Steps

1. **Copy an existing folder**, for example `ivory-lace-kaftan`, and rename the copy (e.g. `green-brocade-kaftan`).
2. **Add the photographs** to the new folder and delete the old ones.
3. **Open `index.md`** and change the details:

```yaml
---
title: "Green Brocade Kaftan"
archiveNumber: "DS-009"          # catalogue reference
order: 9                          # position in the archive → shown as "No. 09"
region: "To be documented"        # keep "To be documented" until it is known
period: "To be documented"
materials:
  - Velvet
  - Metallic thread
techniques:
  - Metallic-thread embroidery
condition: "Good — minor wear at the cuffs"
collection: "Dar Sherazade collection"
collectionNote: "Research in progress"   # optional
available: false                  # true → private enquiry section + "Available" page
featured: false                   # true → shown on the homepage (the first four)
sample: false                     # true shows a "sample entry" notice; use false for real pieces
cover: ./cover.jpg                # file name of the main photograph in this folder
coverAlt: "Describe the photograph for people who cannot see it."
coverPosition: "50% 30%"          # optional: which part of the photo to keep when cropping
gallery:                          # optional: as many photographs as you like
  - src: ./detail-01.jpg
    alt: "Close view of the gold embroidery along the front opening."
    view: "Embroidery detail"     # full garment, back, cuff, neckline, buttons, lining…
    caption: "Embroidery along the front opening"
description: "A short editorial description shown under the title."
terms:                            # optional glossary — only verified terms
  - term: "Word as written"
    language: "Algerian Arabic"
    gloss: "Short explanation."
---

The text below the line is the **cultural and historical note**. Write it in
plain paragraphs. Leave "Research in progress" here until sources are found.
```

4. **Commit and push** (or upload the folder on github.com with *Add file → Upload files*).
5. **GitHub republishes the site automatically** within a couple of minutes.

The archive filters (region, period, material, technique, availability) update themselves from these fields. A filter only appears when there are at least two different values to choose from.

---

## Marking a piece as available

In the kaftan's `index.md`, set:

```yaml
available: true
```

That's all. The piece then:

- shows a discreet **Private enquiry** section at the end of its page, with links to Instagram and email;
- appears on the **Available** page and in the homepage "Private collection" section;
- is marked "Available by private enquiry" in the archive.

Set it back to `false` when the piece is no longer available. It stays in the archive either way.

---

## Adding a journal article

Articles work the same way, in `src/content/journal/`:

```
src/content/journal/
└── dressing-tlemcen/
    ├── index.md
    ├── cover.jpg
    └── figure-01.jpg
```

1. Copy an existing article folder and rename it (the name becomes `/journal/<name>/`).
2. Replace the images.
3. Edit `index.md`:

```yaml
---
title: "Dressing Tlemcen"
subtitle: "On ceremony, family memory and the clothes that carry them."
date: 2026-08-20                  # year-month-day; articles are listed newest first
cover: ./cover.jpg
coverAlt: "Description of the cover photograph."
coverCaption: "Caption shown under the cover photograph."
excerpt: "One or two sentences used on cards and in link previews."
references:
  - "Author, Title, Publisher, Year, page."
  - "Museum name, object number."
placeholder: false                # true shows an "editorial placeholder" notice
draft: false                      # true hides the article from the site
---

Write the article here in Markdown.

## A section heading

A paragraph of text.

> A line written like this becomes a large pull quote.

![Describe the image](./figure-01.jpg "This text becomes the caption under the image")
```

4. Commit and push. The site republishes automatically, with the previous/next links updated.

---

## Changing images

- **Archive and journal images** are in their own content folders (see above). To replace one, either keep the same file name, or put in a new file and update its name in `index.md`.
- **Brand banner (top of the homepage):** `src/assets/brand/dar-sherazade-banner.jpg`
- **Logo in the header:** `src/assets/brand/wordmark-ink.png` (a light version, `wordmark-ivory.png`, is also there)
- **Courtyard photographs** (homepage and About page): `src/assets/home/courtyard-01.jpg` to `courtyard-03.jpg`
- **Link-preview image** (when the site is shared on social media): `public/social/og-default.jpg`, 1200 × 630 px
- **Favicon:** `public/favicon.ico` and `public/favicon/`
- **Original, unedited photographs:** `photos/originals/` (not used by the site; kept for reference)

If you rename one of these images, update the `import` line at the top of `src/pages/index.astro`, `src/pages/about.astro` or `src/components/Header.astro`.

**Photograph tips**

- Use JPEGs at least **1500 px** on the long side. The site creates the smaller versions automatically.
- Collection covers are **2:3 portraits** with the model at the same scale in every photo (head near the top, hem near the bottom), so the pieces line up evenly. The current covers were straightened, reframed this way and given a soft blur towards the edges of the room.
- Always write an `alt` description. It is read aloud to people using screen readers.
- Very large files (over ~8 MB) slow down publishing. Export at around 2500 px and 85% quality.

---

## Changing the About page and homepage text

- **About page:** `src/content/pages/about.md`. Placeholders are marked `[Placeholder — …]`.
- **Homepage, buttons and labels:** `src/i18n/en.ts`. All interface text is kept in this one file, so a French version can later be added as `src/i18n/fr.ts`.

---

## Using a custom domain

1. Buy the domain (for example `sheracreates.com`) from any registrar.
2. In the repository, go to **Settings → Pages → Custom domain**, enter the domain and save.
3. At the registrar, add these DNS records:
   - for `sheracreates.com`: four **A** records pointing to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - for `www.sheracreates.com`: a **CNAME** record pointing to `dar-sherazade.github.io`
4. Wait for the DNS check to pass (minutes to a few hours), then tick **Enforce HTTPS** in **Settings → Pages**. GitHub provides the HTTPS certificate for free.
5. Update `siteUrl` in `src/config.ts` to `https://sheracreates.com`. The deployment already uses the custom domain automatically; this keeps local builds consistent.

Check GitHub's current documentation on [managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) in case these addresses change.

---

## Project structure

```
├── .github/workflows/deploy.yml   automatic publishing to GitHub Pages
├── astro.config.mjs               Astro settings (site address, base path, sitemap)
├── public/                        files copied as they are (favicon, social image)
└── src/
    ├── config.ts                  ← name, Instagram, email, site address
    ├── i18n/en.ts                 ← interface text and homepage copy
    ├── content/
    │   ├── kaftans/<name>/        ← one folder per archive piece
    │   ├── journal/<name>/        ← one folder per article
    │   └── pages/about.md         ← About page text
    ├── content.config.ts          fields allowed in each content type
    ├── assets/                    homepage and About images
    ├── components/                Header, Navigation, Footer, KaftanCard, EditorialCard,
    │                              ImageReveal, SectionHeading, EnquiryCTA, PrevNext
    ├── layouts/BaseLayout.astro   page frame and SEO tags
    ├── pages/                     one file per page or page type
    │   ├── index.astro            homepage
    │   ├── archive.astro          /archive
    │   ├── archive/[slug].astro   one page per kaftan
    │   ├── journal.astro          /journal
    │   ├── journal/[slug].astro   one page per article
    │   ├── available.astro        /available
    │   ├── about.astro, contact.astro, 404.astro
    │   └── robots.txt.ts
    ├── scripts/site.ts            reveals, header, mobile menu
    ├── lib/                       small helpers
    └── styles/                    global.css, typography.css, animations.css
```

### Notes on content

- Historical information should only be added with sources. Unknown details stay as **"To be documented"**.
- The kaftan is presented as a garment with a long transregional history. This project focuses on its **Algerian** forms.
- Arabic or Tamazight terms should only be added once they have been verified.
