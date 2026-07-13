# TODO - SEO Optimization (Right Concept of Mathematics)

## Plan approval: YES

### Step 1: SEO config source of truth

- [x] Create `lib/seo.ts` with per-route metadata (SEO Title, Meta Description, Canonical, OG, Twitter)

### Step 2: Structured data (JSON-LD)

- [x] Create `lib/schema.ts` to generate combined schema (Organization, EducationalOrganization, LocalBusiness, Person, Course, Breadcrumb, WebSite/WebPage, SearchAction, Review/AggregateRating, ImageObject, FAQPage where applicable)
- [x] Update `app/layout.tsx` to inject schema from `lib/schema.ts` (remove/replace existing partial JSON-LD)

### Step 3: Per-page Next.js metadata

- [ ] Update `app/page.tsx` to export route-specific `metadata`
- [ ] Update `app/about/page.tsx` to export route-specific `metadata`
- [ ] Update `app/courses/page.tsx` to export route-specific `metadata`
- [ ] Update `app/faculty/page.tsx` to export route-specific `metadata`
- [ ] Update `app/results/page.tsx` to export route-specific `metadata`
- [ ] Update `app/gallery/page.tsx` to export route-specific `metadata`
- [ ] Update `app/blog/page.tsx` to export route-specific `metadata`
- [ ] Update `app/contact/page.tsx` to export route-specific `metadata`

### Step 4: On-page keyword + local SEO copy updates

- [ ] Update headings/paragraphs/CTAs on each route to naturally include:
  - Best Maths Coaching in Motihari (primary)
  - Maths Coaching in Motihari (secondary)
- [ ] Ensure first + last paragraphs and key CTAs include local intent without stuffing

### Step 5: Image SEO alt text updates

- [ ] Update `<img alt>` text across all routes/sections to be unique, descriptive (≤125 chars) and keyword-aware

### Step 6: Internal linking

- [ ] Update navbar/footer/section links with descriptive anchor text (no generic "Click Here")

### Step 7: Technical verification

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Validate JSON-LD presence in page source and ensure no schema errors
