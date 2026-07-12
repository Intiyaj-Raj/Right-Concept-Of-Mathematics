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
- [Sections Breakdown](#sections-breakdown)
- [Animations & Micro-interactions](#animations--micro-interactions)
- [Contact Form & WhatsApp Integration](#contact-form--whatsapp-integration)
- [SEO & Performance](#seo--performance)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

---

## Overview

**Right Concept of Mathematics** is a single-page, production-ready marketing and admissions website for a mathematics coaching institute. It features a premium hero slider, animated course cards, faculty profiles, topper showcases, a masonry gallery with lightbox, an auto-playing testimonials carousel, an interactive timeline of achievements, a filterable blog grid, an accordion FAQ, and a fully validated contact form that submits enquiries directly to WhatsApp.

The site is designed to be visually stunning, performant, accessible, and deployment-ready for Vercel or Netlify.

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 13 (App Router) |
| UI Library | React 18 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 3 |
| UI Components | Shadcn/UI + Radix UI primitives |
| Animations | Framer Motion |
| Hero Slider | Swiper.js |
| Icons | Lucide React |
| Forms | React Hook Form |
| Validation | Zod |
| Counters | React CountUp |
| Scroll Detection | React Intersection Observer |
| Theming | next-themes (dark/light mode) |
| Fonts | Bricolage Grotesque (display) + Inter (body) |

> **Note:** The project uses `.tsx`/`.ts` file extensions (required by the Next.js + TypeScript toolchain) but all application logic is written in **plain JavaScript** with no TypeScript interfaces or type annotations in the feature code. The `tsconfig.json` has strict mode relaxed (`strict: false`, `noImplicitAny: false`) to support JavaScript-style development.

---

## Features

### Core Features

- **5-Slide Hero Swiper Slider** — Full-screen slides with fade transitions, autoplay, parallax mouse movement, word-by-word text reveal, floating math formulas, custom navigation arrows, and pagination dots
- **Dark / Light Mode** — Persisted theme toggle with smooth transitions
- **Custom Cursor** — Animated dot + outline cursor with blend mode and hover scaling (desktop only)
- **Preloader** — Animated loading screen with progress bar and rotating math symbol
- **Smooth Scrolling** — Native CSS smooth scroll with scroll-based section detection
- **Fully Responsive** — Mobile, tablet, desktop, and ultra-wide screen support
- **Floating Action Buttons** — WhatsApp (with ping animation), Call, and Back-to-Top
- **WhatsApp Integration** — Contact form validates all fields then opens WhatsApp with a pre-filled, URL-encoded message
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt, manifest
- **PWA Ready** — Web app manifest with theme colors and icons

### Design System

- **Glassmorphism** — Frosted glass cards with backdrop blur
- **Gradient Mesh Backgrounds** — Radial gradient overlays in primary, secondary, and accent colors
- **Aurora Blob Animations** — Floating, blurred color blobs that drift continuously
- **Floating Math Symbols** — Decorative π, ∫, Σ, √, ∞, θ, Δ, ∂ symbols that float across sections
- **Premium Shadows** — Layered, colored shadows for depth
- **Animated Gradient Borders** — Flowing gradient borders on interactive elements
- **Bento Grid Layouts** — Asymmetric grid sections (Features)
- **Custom Scrollbar** — Gradient-styled scrollbar matching the brand
- **Ripple & Magnetic Buttons** — Click ripple effects and magnetic hover attraction

---

## Color Palette & Typography

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#10B981` | Emerald green — main brand color |
| Secondary | `#2563EB` | Royal blue — secondary actions |
| Accent | `#F59E0B` | Amber — highlights, badges |
| Background | `#F8FAFC` | Light mode background |
| Dark | `#0F172A` | Dark mode background |
| Text | `#334155` | Body text |
| Cards | `#FFFFFF` | Card backgrounds |
| Borders | `#E2E8F0` | Borders and dividers |

All colors are defined as HSL CSS custom properties in `app/globals.css` and mapped through `tailwind.config.ts` for utility class usage (e.g., `bg-primary`, `text-secondary`).

### Typography

| Role | Font | Weights |
|------|------|---------|
| Display (headings) | Bricolage Grotesque | 700 (bold) |
| Body (paragraphs) | Inter | 400, 500, 600 |

Fonts are loaded via `next/font/google` with `display: swap` for optimal performance. CSS variables `--font-bricolage` and `--font-inter` are applied through the `font-display` and `font-body` utility classes.

---

## Project Structure

```
project/
├── app/
│   ├── globals.css          # Design system, utilities, animations, custom CSS
│   ├── layout.tsx           # Root layout, fonts, SEO metadata, JSON-LD, ThemeProvider
│   ├── page.tsx             # Main page assembling all sections
│   ├── manifest.ts          # PWA web app manifest
│   ├── robots.ts            # robots.txt route
│   └── sitemap.ts           # sitemap.xml route
├── components/
│   ├── animation.tsx        # Reusable scroll-reveal wrappers (FadeUp, FadeLeft, etc.)
│   ├── decorative.tsx       # AuroraBackground, FloatingMathSymbols, WaveDivider, Marquee
│   ├── interactive.tsx      # MagneticButton, RippleButton, TiltCard, CustomCursor, ThemeToggle
│   ├── navbar.tsx           # Sticky navbar with scroll detection + mobile drawer
│   ├── preloader.tsx        # Animated loading screen with progress
│   ├── stat-counter.tsx     # CountUp wrapper with intersection observer
│   ├── theme-provider.tsx   # next-themes provider wrapper
│   ├── sections/
│   │   ├── hero.tsx                 # 5-slide Swiper hero slider
│   │   ├── stats-features.tsx       # TrustedBy, Statistics, WhyChooseUs, Features
│   │   ├── courses-faculty.tsx      # Courses grid + Faculty cards
│   │   ├── results-study.tsx        # Results toppers + Learning process + Study material
│   │   ├── gallery-testimonials.tsx # Masonry gallery + Testimonials slider
│   │   ├── achievements-faqs-blogs.tsx # Timeline + FAQ accordion + Blog grid
│   │   ├── contact.tsx              # Validated form with WhatsApp integration + map
│   │   └── footer.tsx               # Newsletter, Footer, FloatingButtons
│   └── ui/                  # Shadcn/UI component library (accordion, button, card, etc.)
├── hooks/
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   ├── data.js              # All site content (courses, faculty, testimonials, etc.)
│   └── utils.ts             # cn() class merge utility
├── public/                  # Static assets (favicon, icons, og-image)
├── next.config.js           # Next.js config (ESLint ignore, unoptimized images)
├── tailwind.config.ts       # Tailwind theme, colors, animations
├── postcss.config.js        # PostCSS + Tailwind + Autoprefixer
├── tsconfig.json            # TypeScript config (strict mode relaxed for JS)
├── components.json          # Shadcn/UI config
├── netlify.toml             # Netlify deployment config
└── package.json             # Dependencies and scripts
```

---

## Sections Breakdown

The website is composed of 17+ sections, each with unique animations and visual identity:

### 1. Hero Slider (`#home`)
- 5 full-screen slides with Swiper.js
- Fade transition + autoplay (6s interval)
- Parallax mouse movement on background images
- Word-by-word text reveal with blur effect
- Floating animated math formulas (π, integrals, limits)
- Background zoom animation (Ken Burns effect)
- Magnetic primary CTA + ripple secondary CTA
- Custom navigation arrows + clickable pagination dots
- Animated scroll-down indicator

### 2. Trusted By
- Infinite horizontal marquee of exam boards (CBSE, ICSE, JEE, NEET, etc.)

### 3. Statistics Counter
- 4 animated counters with React CountUp + Intersection Observer
- Glassmorphism cards with gradient icon backgrounds
- Gradient mesh + aurora blob background

### 4. Why Choose Us (`#why-us`)
- 6 feature cards with hover gradient glow effects
- Icons that scale and rotate on hover

### 5. Features (`#features`)
- Bento grid layout with one large gradient feature card
- 4 smaller feature cards with colored icon badges

### 6. Courses (`#courses`)
- 6 animated course cards with:
  - Image zoom on hover
  - Level badges (Beginner, Intermediate, Advanced, Expert)
  - Topic tags with checkmarks
  - Duration and fee display
  - Gradient enroll button
- Free counselling CTA banner linking to WhatsApp

### 7. Faculty (`#faculty`)
- 4 faculty profile cards with:
  - Photo zoom on hover
  - Experience badge (top-right)
  - Social icons that appear on hover (Facebook, Twitter, LinkedIn)
  - Specialty tag with sparkle icon

### 8. Results (`#results`)
- 6 topper cards with:
  - Achievement badges (medal/award icons)
  - Score badges
  - 3D tilt on hover
  - Star ratings
- Gradient mesh + floating math symbols background

### 9. Learning Process
- 5-step horizontal timeline with connecting gradient line
- Numbered step circles with icons
- Hover lift effect

### 10. Study Material (`#study-material`)
- 4 download cards with:
  - Free / Premium tags
  - File size and page count
  - Animated download buttons
  - Alternating fade-left/fade-right reveal

### 11. Gallery (`#gallery`)
- Masonry grid with varied row/column spans
- Category filter tabs (All, Classroom, Events, Achievements)
- Animated filter transitions (AnimatePresence layout)
- Image zoom + overlay on hover
- Full-screen lightbox modal

### 12. Testimonials (`#testimonials`)
- Auto-playing Swiper carousel (5s interval)
- Responsive slides (1 / 2 / 3 per view)
- Student and Parent review badges
- Star ratings + quote icons
- Avatar + name + role display

### 13. Achievements (`#achievements`)
- Vertical timeline with alternating left/right cards
- Gradient connecting line
- Animated dot markers with trophy/award icons
- Year badges

### 14. FAQs (`#faqs`)
- Radix UI accordion with smooth open/close animations
- Chevron rotation on expand
- Open item highlights with primary border

### 15. Blogs (`#blog`)
- Filterable blog grid by category
- Search input field
- Blog cards with:
  - Image zoom on hover
  - Category tags
  - Date + reading time
  - Excerpt + "Read More" link

### 16. Contact (`#contact`)
- Full validated enquiry form (see [WhatsApp Integration](#contact-form--whatsapp-integration))
- Contact info cards (phone, email, address, hours)
- WhatsApp quick-chat card
- Embedded Google Map
- Success animation on submission

### 17. Newsletter
- Gradient CTA banner with email subscription input
- Success state confirmation

### 18. Footer
- Dark 4-column layout:
  - Brand + social media icons
  - Quick Links
  - Courses
  - Contact info + mini Google Map
- Copyright: `© 2026 Right Concept of Mathematics. All Rights Reserved.`
- Credit line: `Designed & Developed by Intiyaj Ansari`

### Floating Buttons (fixed)
- **WhatsApp** — Green button with ping animation, opens pre-filled chat
- **Call** — Blue button linking to `tel:` 
- **Back to Top** — Gradient button, appears after scrolling 600px

---

## Animations & Micro-interactions

All animations are built with **Framer Motion** and custom CSS keyframes:

| Animation | Where Used |
|-----------|-----------|
| Fade Up / Fade Left / Fade Right | Section reveals, cards, content blocks |
| Zoom In | Stats cards, feature cards |
| Blur Reveal | Hero text, headings |
| Word-by-word Text Reveal | Hero slide titles |
| Stagger Container + Items | Card grids (courses, faculty, features) |
| Parallax Mouse Movement | Hero background images |
| Background Zoom (Ken Burns) | Hero slide backgrounds |
| Magnetic Button | Hero primary CTA |
| Ripple Effect | Hero secondary CTA |
| 3D Tilt Card | Result topper cards |
| Floating Math Symbols | Hero, Results sections |
| Aurora Blob Animation | Stats, Results, Study Material, Achievements, Blogs, Contact |
| Marquee | Trusted By section |
| Animated Gradient Border | Interactive elements |
| Pulse Glow | WhatsApp floating button |
| Scroll Indicator | Hero bottom |
| Count Up | Statistics counters |
| Layout Animations | Gallery filter transitions |
| Hover Lift + Scale | All cards |
| Icon Rotate + Scale | Navbar logo, feature icons, process icons |
| Accordion Expand/Collapse | FAQ section |
| Mobile Menu Slide | Navbar mobile drawer |

### Reusable Animation Components (`components/animation.tsx`)

| Component | Description |
|-----------|-------------|
| `FadeUp` | Fade in + slide up on scroll |
| `FadeLeft` | Fade in + slide from left |
| `FadeRight` | Fade in + slide from right |
| `ZoomIn` | Fade in + scale up |
| `BlurReveal` | Fade in + blur removal |
| `StaggerContainer` | Parent container for staggered children |
| `StaggerItem` | Child item with stagger animation |
| `TextReveal` | Word-by-word text reveal |
| `SectionHeading` | Eyebrow + title + subtitle with fade animations |

---

## Contact Form & WhatsApp Integration

The contact form (`components/sections/contact.tsx`) uses **React Hook Form** with **Zod** validation.

### Form Fields

| Field | Validation |
|-------|-----------|
| Name | Min 2 characters |
| Phone | Min 10 digits, numeric |
| Email | Valid email format |
| Class | Required (dropdown) |
| Course | Required (dropdown) |
| City | Min 2 characters |
| Message | Min 5 characters |

### WhatsApp Flow

1. User fills out the form
2. On submit, all fields are validated via Zod schema
3. If valid, a formatted message is constructed:

```
New Admission Enquiry

Name: [name]
Phone: [phone]
Email: [email]
Class: [class]
Course: [course]
City: [city]
Message: [message]
Date: [auto-generated]
Time: [auto-generated]
```

4. The message is URL-encoded with `encodeURIComponent()`
5. A WhatsApp chat link is opened to **+91 95766 10388**:
   `https://wa.me/919576610388?text=[encoded-message]`
6. A success animation is displayed confirming the submission

The WhatsApp number and other site config values are centralized in `lib/data.js` under `siteConfig`.

---

## SEO & Performance

### SEO Features

- **Meta Tags** — Title, description, keywords in `app/layout.tsx`
- **Open Graph** — Social sharing metadata with image
- **Twitter Cards** — Summary large image card
- **JSON-LD Structured Data** — `EducationalOrganization` schema in `<head>`
- **Canonical URL** — Set via `metadataBase`
- **Sitemap** — Auto-generated at `/sitemap.xml` (`app/sitemap.ts`)
- **Robots.txt** — Auto-generated at `/robots.txt` (`app/robots.ts`)
- **Manifest** — PWA manifest at `/manifest.webmanifest` (`app/manifest.ts`)
- **Semantic HTML** — Proper `<section>`, `<article>`, `<footer>` tags
- **Alt Text** — All images include descriptive alt attributes
- **ARIA Labels** — Buttons and interactive elements have aria-labels

### Performance Optimizations

- **Static Generation** — All pages are statically generated (SSG)
- **Font Optimization** — `next/font` with `display: swap`
- **Image Loading** — `loading="lazy"` on below-the-fold images
- **Code Splitting** — Next.js automatic route-based code splitting
- **CSS Optimization** — Tailwind purges unused styles in production
- **Minimal JS** — Animations use CSS where possible, Framer Motion where needed

### Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd right-concept-of-mathematics

# Install dependencies
npm install
```

### Environment Variables

No environment variables are required for the website to run. All configuration (WhatsApp number, contact details, social links) is centralized in `lib/data.js`.

If you want to connect a Supabase backend in the future, add these to `.env`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## Available Scripts

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

---

## Deployment

### Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

### Netlify

The project includes a `netlify.toml` configuration file. The `@netlify/plugin-nextjs` plugin is already installed as a dependency.

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) and import the repository
3. Build command: `npm run build`
4. Publish directory: `.next` (handled by the plugin)
5. Click **Deploy**

---

## Customization

### Updating Content

All site content is centralized in **`lib/data.js`**. Edit the exported arrays and objects to update:

- `siteConfig` — Phone, email, WhatsApp number, social links, designer credit
- `navLinks` — Navigation menu items
- `heroSlides` — Hero slider content (5 slides)
- `trustedBy` — Marquee exam board names
- `stats` — Statistics counter values
- `whyChooseUs` — Why Choose Us cards
- `features` — Features bento grid items
- `courses` — Course cards (title, fee, duration, image, topics)
- `faculty` — Faculty profiles (name, role, image, qualification)
- `results` — Topper cards (name, rank, exam, score, image)
- `learningProcess` — 5-step learning journey
- `studyMaterials` — Download cards
- `galleryImages` — Gallery images with categories
- `testimonials` — Student and parent reviews
- `achievements` — Timeline milestones
- `faqs` — FAQ accordion items
- `blogs` — Blog articles

### Changing Colors

Edit the HSL values in `app/globals.css` under `:root` (light mode) and `.dark` (dark mode):

```css
:root {
  --primary: 160 84% 39%;   /* Emerald green */
  --secondary: 217 91% 60%; /* Royal blue */
  --accent: 38 92% 50%;     /* Amber */
}
```

### Changing Fonts

Update the font imports in `app/layout.tsx`:

```tsx
import { Bricolage_Grotesque, Inter } from 'next/font/google';
```

Then update the CSS variables and `tailwind.config.ts` `fontFamily` accordingly.

### Replacing Images

All images use **Pexels** royalty-free stock photos via direct URLs. Replace the `image`/`src` URLs in `lib/data.js` with your own image URLs. The Next.js config has `images: { unoptimized: true }` to allow external image URLs without configuration.

---

## Credits

- **Designed & Developed by:** Intiyaj Ansari
- **Framework:** Next.js
- **UI Components:** Shadcn/UI + Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Slider:** Swiper.js
- **Fonts:** Bricolage Grotesque + Inter (Google Fonts)
- **Images:** Pexels (royalty-free, easily replaceable)
- **Math Symbols:** Unicode characters (π, ∫, Σ, √, ∞, θ, Δ, ∂)

---

## License

© 2026 Right Concept of Mathematics. All Rights Reserved.

This project and its source code are proprietary. No part of this website may be copied, reproduced, or distributed without prior written permission from Right Concept of Mathematics.
#   R i g h t - C o n c e p t - O f - M a t h e m a t i c s  
 