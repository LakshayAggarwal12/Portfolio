# Lakshay Aggarwal | Portfolio

React + Vite + `motion`, plain JavaScript, plain CSS. No UI framework, no icon library.

```
src/
  data/         <- ALL your content lives here (edit these, not the components)
    profile.js      contact links (start here)
    projects.js     the four case studies: copy, stack, stages, links
    experience.js   timeline and achievements
    skills.js       stack groups, capability rows, "currently building" lines
  sections/     one file per page section
  components/   Navbar, Action, Icon, ProjectShowcase, ProjectVisual, Timeline, ...
  hooks/        theme, media queries, active section, auto-stepping stages
  styles/global.css   design tokens (colours, fonts) + all styling
index.html      title, meta tags, font links, theme bootstrap script
```

---

## 1. Run it locally

You need Node 18 or newer (`node -v`).

```bash
npm install
npm run dev          # http://localhost:5173
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build into `dist/` (multi-file). Use this for hosting. |
| `npm run build:single` | Same, but inlined into one `dist/index.html`. Handy for sharing one file. |
| `npm run preview` | Serves `dist/` locally so you can test the real build. |
| `npm run format` | Prettier over `src/`. |

---

## 2. Configuration checklist (do these in order)

### A. Contact links: `src/data/profile.js`
- [ ] `linkedin`: full URL, e.g. `https://www.linkedin.com/in/your-handle`
- [ ] `email`: plain address, e.g. `you@example.com` (the site builds the `mailto:` link and the copy button)
- [ ] `github`: already set to `https://github.com/LakshayAggarwal12`, confirm it
- [ ] `leetcode` (optional): profile URL. The row stays hidden while this is `null`
- [ ] `resume` (optional): put `resume.pdf` in `public/` and set `'/resume.pdf'`, or use a Drive/Notion link

Anything left `null` shows as a dashed "pending" placeholder on the live site, so a recruiter would see it. Fill every one you can before you deploy.

### B. Projects: `src/data/projects.js`
For each of ScoutFlow, EnergyCast, TaskFlow and HireSense:
- [ ] `links.github`: repository URL
- [ ] `links.demo`: live URL (HireSense is already set; verify it still loads)
- [ ] `links.architecture` (optional): a diagram, README section or blog post. The button only appears when set
- [ ] `description`, `tech`: confirm every technology is actually in the project
- [ ] `stages`: the one-line notes under each stage. Make sure each sentence is true of your implementation
- [ ] `meta`: the small facts that appear on hover (skills taxonomy size, ATS checks, hosting, etc.). Delete any you cannot back up

### C. Experience and achievements: `src/data/experience.js`
- [ ] IBM internship dates and wording
- [ ] "Campus and technical work" entry: rewrite it with something specific, or delete it
- [ ] Achievements: title, organisation and note must match your certificates exactly

### D. Skills and numbers: `src/data/skills.js`
- [ ] "currently building" lines. The DSA line says **LeetCode, 280+ problems solved**. Update or remove it
- [ ] Stack groups: remove anything you would not want to be asked about in an interview
- [ ] The stack section links each technology to the projects using it, based on `tech` in `projects.js`. If a skill is called something different there, add it to `techAliases`

### E. Page metadata: `index.html`
- [ ] `<title>` and `description`
- [ ] After you have a URL, add `<link rel="canonical" href="https://your-site.com/">` and `og:url`
- [ ] Add a social preview image: a 1200x630 PNG in `public/og.png`, then
  `<meta property="og:image" content="https://your-site.com/og.png">` and `<meta name="twitter:card" content="summary_large_image">`
- [ ] Favicon: replace the inline one with `public/favicon.svg` and `<link rel="icon" href="/favicon.svg">`

### F. Look and feel: `src/styles/global.css` (top of file)
- [ ] Colours are tokens in `:root` (light) and `.dark` (dark). `--accent` is the single accent colour
- [ ] Fonts are Bricolage Grotesque and IBM Plex Mono, loaded from Google Fonts in `index.html`. To self-host, download them (for example from fontsource), put them in `public/fonts/`, add `@font-face` rules and delete the Google `<link>` tags
- [ ] Brand text in the nav and footer: `brand` in `profile.js`

### G. Final read-through
- [ ] Every sentence on the page is true and you can talk about it
- [ ] No "link pending" or "add ... in data/profile.js" text is visible
- [ ] Click every button and link
- [ ] Toggle light and dark, refresh, confirm the choice sticks
- [ ] Check at phone width (browser dev tools, 390px) and on a real phone
- [ ] Turn on "reduce motion" in your OS and confirm nothing is broken
- [ ] Run Lighthouse in Chrome dev tools (Performance, Accessibility, SEO) and note the scores

---

## 3. Deploy

First put the project on GitHub:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/LakshayAggarwal12/<repo-name>.git
git push -u origin main
```

### Option 1: Vercel (recommended, free, 2 minutes)
1. Go to vercel.com, sign in with GitHub, click **Add New > Project**, import the repo.
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`. These are auto-detected.
3. Click **Deploy**. You get `https://<name>.vercel.app`. Every push to `main` redeploys.
4. Custom domain: **Project > Settings > Domains**, add it, then follow the DNS instructions Vercel shows.

### Option 2: Netlify
1. app.netlify.com > **Add new site > Import from Git**, pick the repo.
2. Build command `npm run build`, publish directory `dist`.
3. Domain settings are under **Site configuration > Domain management**.

### Option 3: Cloudflare Pages
1. Workers & Pages > **Create > Pages > Connect to Git**.
2. Framework preset **Vite**, build command `npm run build`, output `dist`.

### Option 4: GitHub Pages
Project sites live at `https://<user>.github.io/<repo-name>/`, so the app needs a base path.
1. Add `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy
   on: { push: { branches: [main] } }
   permissions: { contents: read, pages: write, id-token: write }
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20, cache: npm }
         - run: npm ci
         - run: npm run build
           env: { BASE_PATH: /<repo-name>/ }
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment: { name: github-pages }
       steps:
         - uses: actions/deploy-pages@v4
   ```
2. Repo **Settings > Pages > Source: GitHub Actions**.
3. If you name the repo `LakshayAggarwal12.github.io` it is served from the root, so drop `BASE_PATH`.

Note: files in `public/` (for example `/resume.pdf`) are referenced with a leading slash. On a GitHub Pages project site, use `import.meta.env.BASE_URL + 'resume.pdf'` or a full URL instead.

---

## 4. After deploying

- [ ] Open the live URL on your phone and on desktop
- [ ] Paste the link into LinkedIn or WhatsApp and check the preview card (needs the `og:image` from step E)
- [ ] Submit the URL to Google Search Console if you want it indexed
- [ ] Add the live URL to your GitHub profile, LinkedIn and resume
- [ ] When a project gets a new link or feature, edit `src/data/projects.js`, push, and it redeploys

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Blank page after deploy on GitHub Pages | `BASE_PATH` is missing or wrong (must start and end with `/`) |
| 404 on refresh | Not an issue here: it is a single page with `#` anchors |
| Fonts look different from the preview | Google Fonts blocked by a network or extension. Self-host them (step F) |
| Projects do not pin while scrolling | Expected on screens under 1024px wide and with reduced motion on. They step through automatically instead |
| Custom cursor missing | Intended on touch devices and with reduced motion |
