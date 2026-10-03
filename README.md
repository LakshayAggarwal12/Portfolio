# Lakshay Aggarwal - Developer Portfolio

Personal portfolio website for **Lakshay Aggarwal**, a full-stack engineer and AI builder. The site presents selected projects, experience, technical capabilities, achievements, and contact links through a responsive, motion-led interface.

**Live site:** [lakshayaggarwal.vercel.app](https://lakshayaggarwal.vercel.app)

## Overview

This portfolio is designed to communicate technical work clearly without relying on a UI framework. It includes:

- Responsive layouts for desktop, tablet, and mobile
- Light and dark themes with persisted user preference
- Animated section reveals and project interactions
- Project case studies with technology links, stages, metadata, and demos
- Experience timeline and achievement highlights
- Accessible navigation, skip links, focus states, and reduced-motion support
- Open Graph metadata and a social preview image for link sharing

## Tech stack

- **React 19** - component-based UI
- **Vite** - development server and production bundling
- **JavaScript (ES modules)** - application logic and content data
- **CSS** - responsive layout, design tokens, themes, and animations
- **Motion** - UI transitions and scroll-based interactions
- **Prettier** - code formatting

## Project structure

```text
src/
├── components/    Reusable interface components
├── data/          Portfolio content and project information
├── hooks/         Theme, media-query, scroll, and stage behavior
├── sections/      Page sections rendered by the main application
├── styles/        Global design system and responsive styles
├── App.jsx        Application composition
└── main.jsx       React entry point

public/
├── favicon.svg
├── og.png         Social preview image
└── resume.pdf     Downloadable resume

index.html         Page metadata and font loading
vite.config.js     Vite configuration
package.json       Scripts and dependencies
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/LakshayAggarwal12/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

The development server is available at `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

`npm run build` creates the optimized production bundle in `dist/`. `npm run preview` serves that build locally for verification.

### Formatting

```bash
npm run format
```

## Updating portfolio content

Most content is intentionally kept separate from the UI:

| File | Purpose |
| --- | --- |
| `src/data/profile.js` | Name, branding, email, social links, and resume link |
| `src/data/projects.js` | Project descriptions, technologies, stages, metadata, and URLs |
| `src/data/experience.js` | Experience timeline and achievements |
| `src/data/skills.js` | Skills, capabilities, and current focus |
| `src/styles/global.css` | Colors, typography, spacing, responsive behavior, and animation |
| `index.html` | Title, SEO description, favicon, and social sharing metadata |
| `public/og.png` | Open Graph preview image shown by supported platforms |

When adding or changing content, make sure every link works and every project claim accurately reflects the underlying work.

## Deployment

The project can be deployed to any static hosting provider that supports Vite builds.

For Vercel:

1. Import the repository into Vercel.
2. Select **Vite** as the framework preset.
3. Use `npm run build` as the build command.
4. Set `dist` as the output directory.
5. Deploy.

The project includes production metadata for the deployed Vercel URL, including Open Graph title, description, URL, image, canonical URL, and favicon.

After updating the social preview image or metadata, link platforms may continue showing a cached preview. Share the exact production URL again after deployment or use the platform's link debugger/cache refresh tool.

## Quality checklist

Before publishing changes:

```bash
npm run build
```

Then verify:

- Navigation and anchor links work
- The layout is usable at mobile width
- Light and dark themes both render correctly
- The theme preference persists after refresh
- Project, social, email, and resume links are valid
- The live URL returns the current Open Graph image
- Reduced-motion preferences do not prevent access to content

## License

This repository contains personal portfolio content and is intended primarily for personal use. The implementation may be used as a reference, but please replace personal content, branding, project details, and assets before publishing a derivative portfolio.
