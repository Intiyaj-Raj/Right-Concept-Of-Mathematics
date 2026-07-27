# 📐 Right Concept of Mathematics (RCM)

> A modern, responsive, and high-performance educational website for **Right Concept of Mathematics (RCM)** — a premier offline mathematics coaching institute in Motihari, Bihar, for **Class 11, Class 12, JEE Main & JEE Advanced** aspirants, founded and taught by **N. M. Sir**.

---

## ✨ Features

- **Hero Slider** — Full-screen slideshow with parallax effects, animated math formulas, and smooth transitions (Swiper.js + Framer Motion)
- **Dark & Light Mode** — Theme toggle with `next-themes`, persistent preference
- **Custom Cursor** — Magnetic dot + outline cursor with interactive hover states
- **Preloader** — Animated loading screen with Sigma (Σ) symbol
- **Responsive Design** — Fully fluid layout from mobile to 4K desktop
- **SEO Optimized** — Per-page meta tags, JSON-LD structured data, sitemap, robots.txt
- **PWA Ready** — Web manifest for installable app experience
- **WhatsApp Integration** — Floating WhatsApp & call buttons with pre-filled enquiry messages
- **Page Sections:**
  - Hero slider with 5 slides (admissions, JEE, board, offline, legacy)
  - Trusted By bar (CBSE, ICSE, BSEB, JEE Main, JEE Advanced, NTSE, NDA, Airforce)
  - Animated statistics counters (20,000+ students, 1,500+ rankers, 15+ years, 98% success)
  - Why Choose Us grid (6 reasons)
  - Features grid (6 features)
  - Courses section with detailed course cards (Class 11, Class 12, JEE Main, JEE Advanced)
  - Faculty preview with N. M. Sir profile
  - Results & testimonials with student success stories
  - Learning process (5-step methodology)
  - Study materials section (free & premium)
  - Gallery with masonry grid (15 images, 3 categories)
  - Testimonials carousel
  - Achievements timeline
  - FAQ accordion
  - Blog section
  - Contact form with WhatsApp enquiry
  - Newsletter subscription
  - Footer with map, links, social icons
- **Animations** — Fade-up, stagger, blur reveal, text reveal, magnetic buttons, ripple effects, 3D tilt cards, floating math symbols, aurora blobs
- **Interactive UI Components** — 40+ Shadcn UI components (accordion, dialog, dropdown, tabs, carousel, etc.)

---

## 🛠 Tech Stack

| Category        | Technology                                       |
| --------------- | ------------------------------------------------ |
| **Framework**   | [Next.js](https://nextjs.org/) 13.5 (App Router) |
| **Language**    | TypeScript / JavaScript                          |
| **Styling**     | Tailwind CSS 3.3 + CSS Variables                 |
| **UI Library**  | Shadcn UI / Radix UI Primitives                  |
| **Animation**   | Framer Motion 12                                 |
| **Carousel**    | Swiper.js 14                                     |
| **Forms**       | React Hook Form + Zod Validation                 |
| **Icons**       | Lucide React                                     |
| **Theme**       | next-themes                                      |
| **SEO**         | JSON-LD Structured Data, next-metadata           |
| **Charts**      | Recharts                                         |
| **Toasts**      | Sonner                                           |
| **Date Picker** | react-day-picker / date-fns                      |
| **Deployment**  | Netlify / Vercel                                 |

---

## 📂 Complete Project Structure

```text
ROOT/
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── components.json                 # Shadcn UI configuration
├── googleeb04a3efe6afd631.html     # Google Search Console verification
├── netlify.toml                    # Netlify deployment config
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Lock file
├── postcss.config.js               # PostCSS config (Tailwind)
├── tailwind.config.ts              # Tailwind theme & plugins
├── tsconfig.json                   # TypeScript configuration
├── README.md                       # This file
│
├── app/                            # Next.js App Router pages
│   ├── globals.css                 # Global styles + CSS variables
│   ├── layout.tsx                  # Root layout (fonts, theme, navbar, footer)
│   ├── manifest.ts                 # PWA web manifest
│   ├── page.tsx                    # Home page
│   ├── robots.ts                   # Robots.txt generator
│   ├── sitemap.ts                  # XML sitemap generator
│   ├── template.tsx                # Page template wrapper
│   ├── about/
│   │   └── page.tsx                # About page (vision, mission, team)
│   ├── blog/
│   │   └── page.tsx                # Blog listing page
│   ├── contact/
│   │   └── page.tsx                # Contact page
│   ├── courses/
│   │   └── page.tsx                # Courses listing page
│   ├── faculty/
│   │   └── page.tsx                # Faculty profile (N. M. Sir)
│   ├── gallery/
│   │   └── page.tsx                # Gallery page
│   └── results/
│       └── page.tsx                # Results page
│
├── components/                     # React components
│   ├── animation.tsx               # Animation wrappers (FadeUp, Stagger, TextReveal, etc.)
│   ├── decorative.tsx              # Decorative elements (Aurora, MathSymbols, WaveDivider, Marquee)
│   ├── interactive.tsx             # Interactive elements (MagneticButton, RippleButton, TiltCard, CustomCursor)
│   ├── navbar.tsx                  # Responsive navigation bar
│   ├── page-hero.tsx               # Reusable page hero section
│   ├── preloader.tsx               # Loading preloader animation
│   ├── stat-counter.tsx            # Animated statistics counter
│   ├── theme-provider.tsx          # Theme provider wrapper
│   │
│   ├── sections/                   # Page section components
│   │   ├── achievements-faqs-blogs.tsx  # Achievements, FAQs & Blog sections
│   │   ├── contact.tsx             # Contact form section
│   │   ├── courses-faculty.tsx     # Courses grid & Faculty preview
│   │   ├── footer.tsx              # Footer, Newsletter & Floating buttons
│   │   ├── gallery-testimonials.tsx # Gallery masonry & Testimonials carousel
│   │   ├── hero.tsx                # Homepage hero slider
│   │   ├── results-study.tsx       # Results, Learning process & Study materials
│   │   └── stats-features.tsx      # TrustedBy, Stats, WhyChooseUs & Features
│   │
│   └── ui/                         # Shadcn UI primitive components
│       ├── accordion.tsx           # Expandable accordion
│       ├── alert-dialog.tsx        # Alert dialog modal
│       ├── alert.tsx               # Alert banners
│       ├── aspect-ratio.tsx        # Aspect ratio container
│       ├── avatar.tsx              # Avatar display
│       ├── badge.tsx               # Badge / pill
│       ├── breadcrumb.tsx          # Breadcrumb navigation
│       ├── button.tsx              # Button variants
│       ├── calendar.tsx            # Calendar date picker
│       ├── card.tsx                # Card container
│       ├── carousel.tsx            # Carousel slider
│       ├── chart.tsx               # Recharts wrapper
│       ├── checkbox.tsx            # Checkbox input
│       ├── collapsible.tsx         # Collapsible panel
│       ├── command.tsx             # Command palette
│       ├── context-menu.tsx        # Right-click context menu
│       ├── dialog.tsx              # Modal dialog
│       ├── drawer.tsx              # Drawer panel
│       ├── dropdown-menu.tsx       # Dropdown menu
│       ├── form.tsx                # Form field wrappers
│       ├── hover-card.tsx          # Hover preview card
│       ├── input-otp.tsx           # OTP input
│       ├── input.tsx               # Text input
│       ├── label.tsx               # Form label
│       ├── menubar.tsx             # Menu bar
│       ├── navigation-menu.tsx     # Navigation menu
│       ├── pagination.tsx          # Pagination
│       ├── popover.tsx             # Popover overlay
│       ├── progress.tsx            # Progress bar
│       ├── radio-group.tsx         # Radio button group
│       ├── resizable.tsx           # Resizable panels
│       ├── scroll-area.tsx         # Custom scroll area
│       ├── select.tsx              # Select dropdown
│       ├── separator.tsx           # Horizontal/vertical separator
│       ├── sheet.tsx               # Slide-in sheet
│       ├── skeleton.tsx            # Loading skeleton
│       ├── slider.tsx              # Range slider
│       ├── sonner.tsx              # Sonner toast provider
│       ├── switch.tsx              # Toggle switch
│       ├── table.tsx               # Data table
│       ├── tabs.tsx                # Tabbed interface
│       ├── textarea.tsx            # Multi-line text input
│       ├── toast.tsx               # Toast notification hooks
│       ├── toaster.tsx             # Toast container
│       ├── toggle-group.tsx        # Toggle button group
│       ├── toggle.tsx              # Toggle button
│       └── tooltip.tsx             # Tooltip
│
├── hooks/                          # Custom React hooks
│   └── use-toast.ts                # Toast hook
│
├── lib/                            # Utility libraries
│   ├── data.js                     # All site content/data
│   ├── schema.ts                   # JSON-LD structured data builder
│   ├── seo.ts                      # Per-route SEO configuration
│   └── utils.ts                    # Utility functions (cn)
│
├── public/                         # Static assets
│   ├── images/
│   │   ├── best-math-coaching.ico  # Favicon
│   │   ├── right-concept-of-mathematics-logo.png  # Logo
│   │   ├── right-concept-of-mathematics-hero.avif # Hero image
│   │   ├── right-concept-of-mathematics-hero2.avif.jpg
│   │   ├── right-concept-of-mathematics-about.webp
│   │   ├── right-concept-of-mathematics-about2.webp
│   │   ├── right-concept-of-mathematics-about3.webp
│   │   ├── right-concept-of-mathematics-building.webp
│   │   ├── right-concept-of-mathematics-faculty.png
│   │   ├── right-concept-of-mathematics-faculty.webp
│   │   ├── right-concept-of-mathematics-author.webp
│   │   ├── right-concept-of-mathematics-result.webp
│   │   ├── right-concept-of-mathematics-post.webp
│   │   ├── right-concept-of-mathematics-poster-2021.webp
│   │   ├── right-concept-of-mathematics-poster-2023.webp
│   │   ├── right-concept-of-mathematics-blog-hero.webp
│   │   ├── right-concept-of-mathematics-b2.webp
│   │   ├── right-concept-of-mathematics-b6.webp
│   │   ├── right-concept-of-mathemathics-b3.webp
│   │   ├── right-concept-of-mathemathics-intiyaj.webp
│   │   ├── right-concept-of-mathemathics-jee-adv.jpg
│   │   ├── right-concept-of-mathemathics-jee-main.jpg
│   │   ├── right-concept-of-mathematics-afjal.webp
│   │   ├── right-concept-of-mathematics-arbaj.webp
│   │   ├── right-concept-of-mathematics-ayub.webp
│   │   ├── right-concept-of-mathematics-himanshu.webp
│   │   ├── right-concept-of-mathematics-jitendra.webp
│   │   ├── right-concept-of-mathematics-prakash.webp
│   │   ├── right-concept-of-mathematics-rohit.webp
│   │   ├── right-concept-of-mathematics-sanjay.webp
│   │   ├── right-concept-of-mathematics-seraj.webp
│   │   ├── right-concept-of-mathematics-vikash.webp
│   │   │
│   │   └── gallery/                # Gallery images
│   │       ├── right-concept-of-mathematics-1.webp
│   │       ├── right-concept-of-mathematics-2.webp
│   │       ├── right-concept-of-mathematics-3.webp
│   │       ├── right-concept-of-mathematics-4.webp
│   │       ├── right-concept-of-mathematics-5.webp
│   │       ├── right-concept-of-mathematics-6.webp
│   │       ├── right-concept-of-mathematics-7.webp
│   │       ├── right-concept-of-mathematics-8.webp
│   │       ├── right-concept-of-mathematics-9.webp
│   │       ├── right-concept-of-mathematics-10.webp
│   │       ├── right-concept-of-mathematics-11.webp
│   │       ├── right-concept-of-mathematics-12.webp
│   │       ├── right-concept-of-mathematics-13.webp
│   │       ├── right-concept-of-mathematics-14.webp
│   │       └── right-concept-of-mathematics-15.webp
│   │
│   └── media/                      # Additional media files
│
└── node_modules/                   # Dependencies (gitignored)
```

---

## ⚙️ Installation

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

### Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/rcm-website.git

# Move into the project directory
cd rcm-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

---

## 📜 Available Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start development server     |
| `npm run build`     | Build for production         |
| `npm run start`     | Start production server      |
| `npm run lint`      | Run ESLint                   |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🗺️ Pages & Routes

| Route      | Page    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| `/`        | Home    | Hero slider, stats, courses, blog, etc.  |
| `/about`   | About   | Institute intro, vision, mission, team   |
| `/courses` | Courses | Course listings with details & pricing   |
| `/faculty` | Faculty | N. M. Sir profile & teaching methodology |
| `/results` | Results | Student achievements & testimonials      |
| `/gallery` | Gallery | Photo gallery with masonry grid          |
| `/blog`    | Blog    | Study tips, exam strategies, updates     |
| `/contact` | Contact | Enquiry form & WhatsApp integration      |

---

## 🧩 Key Components Overview

### Animation Components (`components/animation.tsx`)

- `FadeUp` — Fade in + slide up on scroll
- `FadeLeft` / `FadeRight` — Horizontal slide reveals
- `ZoomIn` — Scale up on scroll
- `BlurReveal` — Blur-to-clear text reveal
- `StaggerContainer` / `StaggerItem` — Staggered animation for grids
- `TextReveal` — Word-by-word text animation
- `SectionHeading` — Consistent section header with eyebrow + title + subtitle

### Interactive Components (`components/interactive.tsx`)

- `MagneticButton` — Button that follows cursor with magnetic pull
- `RippleButton` — Click ripple effect
- `TiltCard` — 3D perspective tilt on mouse move
- `CustomCursor` — Animated custom cursor with smooth trailing outline

### Decorative Components (`components/decorative.tsx`)

- `AuroraBackground` — Animated gradient blob background
- `FloatingMathSymbols` — Floating π, ∫, Σ, √, ∞ symbols
- `WaveDivider` — SVG wave separator between sections
- `Marquee` — Infinite horizontal scrolling text

---

## 🎨 Customization Guide

### Site Content

Edit `lib/data.js` to update all site content:

- Hero slides, navigation links, courses, faculty info
- Results, testimonials, galleries, FAQs, blogs
- Contact info (phone, email, social links, WhatsApp)
- Stats, features, why-choose-us items

### SEO & Metadata

- Per-page SEO: `lib/seo.ts`
- JSON-LD structured data: `lib/schema.ts` + `app/layout.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

### Theme & Styling

- CSS variables: `app/globals.css` (light/dark theme)
- Tailwind config: `tailwind.config.ts` (fonts, colors, animations)
- Global styles include custom scrollbar, glass effects, gradient mesh, animated borders

### Images

Replace images inside `public/images/` directory.
Update image paths in `lib/data.js` accordingly.

### UI Components

Shadcn UI components in `components/ui/` can be customized or removed via:

```bash
npx shadcn@latest add [component-name]
npx shadcn@latest remove [component-name]
```

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push your project to GitHub
2. Connect your repository in Netlify
3. Netlify automatically detects `netlify.toml` with:

   ```toml
   [build]
   command = "npx next build"
   publish = ".next"

   [[plugins]]
   package = "@netlify/plugin-nextjs"
   ```

4. Click **Deploy**

### Vercel

1. Push your project to GitHub
2. Import the repository into Vercel
3. Click **Deploy** (zero-config for Next.js)

---

## 🔍 SEO & Performance

- **Structured Data** — Organization, EducationalOrganization, LocalBusiness, Person, Course, FAQPage, Review, AggregateRating, BreadcrumbList, Website, WebPage, ImageObject
- **Metadata** — Per-page title, description, Open Graph, Twitter cards
- **Sitemap** — Auto-generated XML sitemap via `app/sitemap.ts`
- **Robots** — Custom robots.txt via `app/robots.ts`
- **Manifest** — PWA manifest via `app/manifest.ts`
- **Images** — WebP format for optimal performance, lazy loading with blur placeholders
- **Fonts** — Self-hosted Google Fonts (Bricolage Grotesque + Inter) with `display: swap`

---

## 👨‍💻 Developer

**Intiyaj Ansari**  
Frontend & MERN Stack Developer

- 🌐 Portfolio: [intiyajansarifullstackdeveloper.netlify.app](https://intiyajansarifullstackdeveloper.netlify.app/)
- 📧 Email: nimajee05091992@gmail.com

---

## 📄 License

© 2026 Right Concept of Mathematics. All Rights Reserved.

This project is proprietary and may not be copied, modified, or distributed without explicit permission.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Shadcn UI](https://ui.shadcn.com/) — Accessible UI components
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Swiper.js](https://swiperjs.com/) — Touch slider
- [Lucide](https://lucide.dev/) — Icon library
- [Sonner](https://sonner.emilkowal.ski/) — Toast notifications
- [Recharts](https://recharts.org/) — Charting library
