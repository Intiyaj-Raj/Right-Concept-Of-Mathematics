# Right Concept of Mathematics — Premium Educational Website

A world-class, futuristic, highly animated, fully responsive EdTech website for **Right Concept of Mathematics (RCM)** — a premier mathematics coaching institute for Class 9–12, JEE, and NEET aspirants.

Built with modern web technologies, premium micro-interactions, glassmorphism, gradient mesh backgrounds, and a 100% custom UI designed to feel like a 2026-era learning platform.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Color Palette & Typography](#color-palette--typography)
- [Project Structure](#project-structure)
- [Animations & Micro-interactions](#animations--micro-interactions)
- [WhatsApp Contact Flow](#whatsapp-contact-flow)
- [SEO & Performance](#seo--performance)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

---

## Overview

**Right Concept of Mathematics** is a production-ready marketing and admissions website. It includes a premium hero slider, animated courses, faculty profiles, a masonry gallery with lightbox, an auto-playing testimonials carousel, an achievements timeline, a filterable blog grid, an accordion FAQ, and a validated contact form that submits enquiries directly to WhatsApp.

---

## Tech Stack

| Category         | Technology                      |
| ---------------- | ------------------------------- |
| Framework        | Next.js 13 (App Router)         |
| UI               | React 18                        |
| Language         | JavaScript (JSX)                |
| Styling          | Tailwind CSS 3                  |
| UI Components    | Shadcn/UI + Radix UI primitives |
| Animations       | Framer Motion                   |
| Hero Slider      | Swiper.js                       |
| Icons            | Lucide React                    |
| Forms            | React Hook Form                 |
| Validation       | Zod                             |
| Counters         | React CountUp                   |
| Scroll Detection | Intersection Observer           |
| Theming          | next-themes (dark/light mode)   |

> Note: The repo uses `.tsx`/`.ts` file extensions for the Next.js toolchain, while feature code is written in plain JavaScript (no TypeScript-only types/interfaces in the feature logic).

---

## Features

### Core Features

- **5-slide Hero Swiper Slider** — autoplay, fade transitions, parallax mouse movement, word-by-word reveal, floating math symbols
- **Dark / Light Mode** — persisted theme toggle
- **Preloader** — animated loading screen with progress
- **Responsive Layout** — mobile to ultra-wide support
- **Floating Action Buttons** — WhatsApp, Call, Back-to-Top
- **WhatsApp Integration** — validated contact form opens a pre-filled WhatsApp message
- **SEO Optimized** — meta tags, Open Graph, Twitter cards, JSON-LD, sitemap/robots, manifest
- **PWA Ready** — web app manifest and theme colors

### Design System

- Glassmorphism cards
- Gradient mesh + aurora blob backgrounds
- Animated gradient borders, ripple/magnetic button effects
- Bento grid layouts
- Custom styled scrollbar

---

## Color Palette & Typography

### Colors

| Token              | Hex       |
| ------------------ | --------- |
| Primary            | `#10B981` |
| Secondary          | `#2563EB` |
| Accent             | `#F59E0B` |
| Background (Light) | `#F8FAFC` |
| Dark               | `#0F172A` |
| Text               | `#334155` |

### Typography

- Headings: **Bricolage Grotesque** (700)
- Body: **Inter** (400/500/600)

Fonts are loaded with `next/font/google` using `display: swap`.

---

## Project Structure

```
project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animation.tsx
│   ├── decorative.tsx
│   ├── interactive.tsx
│   ├── navbar.tsx
│   ├── preloader.tsx
│   ├── stat-counter.tsx
│   ├── theme-provider.tsx
│   └── sections/
├── hooks/
├── lib/
├── public/
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

---

## Animations & Micro-interactions

Animations are implemented with **Framer Motion** and custom CSS keyframes, including:

- scroll-reveal (FadeUp/FadeLeft/FadeRight)
- word-by-word text reveal
- magnetic + ripple buttons
- 3D tilt cards
- floating math symbols + aurora blobs
- accordion/timeline/gallery transitions

---

## WhatsApp Contact Flow

The contact form (`components/sections/contact.tsx`) uses **React Hook Form** + **Zod** validation.

On submit:

1. Validate fields (name, phone, email, class, course, city, message)
2. Build a formatted message for WhatsApp
3. URL-encode the message
4. Open a WhatsApp chat URL like:

`https://wa.me/<WHATSAPP_NUMBER>?text=<ENCODED_MESSAGE>`

> Replace the WhatsApp number with your own in `lib/data.js` under `siteConfig`.

---

## SEO & Performance

- Semantic structure and ARIA labels
- Meta tags, Open Graph, Twitter cards
- JSON-LD structured data
- Sitemap and robots routes
- Next.js/static-friendly setup

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn)

### Installation

```bash
npm install
```

### How to Run

```bash
npm run dev
```

Then open: http://localhost:3000

---

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

---

## Deployment

### Vercel

1. Push to GitHub
2. Import in Vercel
3. Deploy (Next.js detection is automatic)

### Netlify

1. Push to GitHub
2. Import in Netlify
3. Build command: `npm run build`

---

## Customization

### Updating Content

Edit `lib/data.js` (siteConfig, hero slides, courses, faculty, results, testimonials, gallery, blogs, FAQs, etc.).

### Changing Colors

Edit HSL variables in `app/globals.css`.

### Replacing Images

Update image URLs inside `lib/data.js`.

---

## Credits

- Designed & Developed by: Intiyaj Ansari
- Framework: Next.js
- UI Components: Shadcn/UI + Radix UI
- Icons: Lucide React
- Animations: Framer Motion
- Slider: Swiper.js
- Fonts: Bricolage Grotesque + Inter

---

## License

© 2026 Right Concept of Mathematics. All Rights Reserved.

This project and its source code are proprietary. No part of this website may be copied, reproduced, or distributed without prior written permission from Right Concept of Mathematics.
