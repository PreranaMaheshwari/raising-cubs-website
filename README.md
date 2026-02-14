# Raising Cubs Kindergarten

A modern, responsive website for **Raising Cubs Kindergarten** — a nurturing early childhood education center in Hyderbad, India for children aged 2–6. The site showcases programs, values, testimonials, and contact options in a playful, family-friendly design.

---

## Features

- **Home** — Hero, about snippet, program highlights, parent testimonials, and contact CTA
- **About** — Story, values (Love & Care, Safety, Creativity, Holistic Development, Nature, Community), why choose us, and stats
- **Services** — Overview of programs with links to detailed pages:
  - **Preschool** (Ages 3–5) — Literacy, numeracy, social skills, school readiness
  - **Playgroup** (Ages 2–3) — Sensory play, motor skills, social interaction, routines
  - Enrichment: Creative Arts, Outdoor Learning, Music & Movement, Social Skills
- **Contact** — Phone, email, address, hours, contact form, visit booking, and FAQ snippets

Built with **Next.js 15**, **React 18**, **Tailwind CSS 4**, and **Radix UI** for accessibility and a consistent UI.

---

## Tech Stack

| Category        | Technology |
|----------------|------------|
| Framework      | [Next.js](https://nextjs.org/) 15 (App Router) |
| UI             | [React](https://react.dev/) 18 |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) 4, [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate) |
| Components     | [Radix UI](https://www.radix-ui.com/) primitives, [shadcn/ui](https://ui.shadcn.com/)-style components |
| Language       | [TypeScript](https://www.typescriptlang.org/) 5 |
| Fonts          | [Geist](https://vercel.com/font), [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts) |
| Analytics      | [Vercel Analytics](https://vercel.com/analytics) |

---

## Project Structure

```
raising-cubs-kindergarten/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx             # Home
│   ├── about/page.tsx       # About
│   ├── contact/page.tsx     # Contact
│   ├── services/
│   │   ├── page.tsx         # Services overview
│   │   ├── playgroup/page.tsx
│   │   └── preschool/page.tsx
│   └── globals.css
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── ui/                  # Buttons, cards, inputs, etc.
├── public/                  # Images and static assets
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** (recommended) — install with: `npm install -g pnpm`

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd raising-cubs-kindergarten
```

### 2. Install dependencies

This project uses **pnpm**. Use it to avoid dependency resolution issues:

```bash
pnpm install
```

If you use npm instead, you may need to delete `node_modules` and use `npm install` (the lockfile is for pnpm).

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## Available Scripts

| Command        | Description |
|----------------|-------------|
| `pnpm dev`     | Start Next.js dev server (default port 3000) |
| `pnpm build`   | Build for production |
| `pnpm start`   | Run production build locally |
| `pnpm lint`    | Run ESLint |

---

## Environment

No environment variables are required to run the site. Optional:

- Configure [Vercel Analytics](https://vercel.com/analytics) via your Vercel project if you deploy there.

---

## Deployment

The app is set up for [Vercel](https://vercel.com/). Connect your repo and deploy; `build` and `start` work with Vercel’s default Next.js settings.

---

## License

Rasing Cubs. All rights reserved.
