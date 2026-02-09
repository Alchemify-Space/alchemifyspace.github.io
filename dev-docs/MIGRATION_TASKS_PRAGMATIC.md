# PRAGMATIC MIGRATION - Essential Tasks Only

## Philosophy: Build → Extract → Ship (NOT Plan → Over-Engineer → Never Ship)

**Total Estimated Time**: 12-16 hours  
**Total Files**: ~30 (not 100+)  
**Total Tasks**: 60 essential (not 350+ bloated)

---

## PHASE 0: Bare Minimum Setup (1 hour)

### Task 0.1: Initialize Next.js + shadcn (15 min)
- [ ] Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias="@/*"`
- [ ] Run: `npx shadcn@latest init` (New York, Slate, CSS variables)
- [ ] Create folders: `app/components`, `app/sections`, `public/images`
- [ ] Copy all images from `assets/images/` to `public/images/`

### Task 0.2: Install ONLY Essential Dependencies (15 min)
```bash
npm install framer-motion lucide-react swiper
# Only if contact form exists:
npm install react-hook-form @hookform/resolvers zod
```

**SKIPPING**: GSAP, Embla, clsx (already in shadcn), 90% of shadcn components upfront

### Task 0.3: Minimal Tailwind Config (15 min)
- [ ] Update `tailwind.config.ts` with just 2-3 custom colors
- [ ] Update `app/globals.css` with CSS variables for theme colors

### Task 0.4: Configure Static Export (15 min)
- [ ] Update `next.config.js` for `output: 'export'`
- [ ] Test build: `npm run build`

---

## PHASE 1: Core Layout (2 hours)

### Task 1.1: Root Layout (20 min)
**File**: `app/layout.tsx`
- [ ] Add Inter font from next/font
- [ ] Basic metadata (title template)
- [ ] Import globals.css

**SKIP**: Complex OG tags, JSON-LD, preloader

### Task 1.2: Header Component (40 min)
**File**: `app/components/Header.tsx`
- [ ] Add logo with Link
- [ ] Navigation menu (Home, Services, Portfolio, About, Contact)
- [ ] Mobile hamburger menu (useState toggle)
- [ ] Install shadcn Sheet: `npx shadcn@latest add sheet`
- [ ] Sticky on scroll behavior

### Task 1.3: Footer Component (30 min)
**File**: `app/components/Footer.tsx`
- [ ] 4-column layout
- [ ] Copyright bar
- [ ] Social links

### Task 1.4: Marketing Layout (10 min)
**File**: `app/(marketing)/layout.tsx`
- [ ] Wrap Header + children + Footer

### Task 1.5: 404 Page (20 min)
**File**: `app/not-found.tsx`
- [ ] Simple 404 message + link home

---

## PHASE 2: Build Pages (Copy-Paste → Extract Pattern) (8-10 hours)

### Task 2.1: HOME PAGE (2 hours)
**File**: `app/page.tsx`

#### 2.1.1: Hero Section (30 min)
- [ ] Copy hero HTML from home-index.html
- [ ] Convert to JSX
- [ ] Add Framer Motion fade-in animation
- [ ] Add CTA buttons

#### 2.1.2: Services Section (20 min)
- [ ] 3-4 service cards
- [ ] Title + description for each
- [ ] Link to services page

#### 2.1.3: About Section (20 min)
- [ ] Two columns (image + text)
- [ ] Stats/counters (if any)

#### 2.1.4: Portfolio Section (20 min)
- [ ] Grid of portfolio items
- [ ] Images with hover effects

#### 2.1.5: Team Section (20 min)
- [ ] 3-4 team member cards
- [ ] Photo, name, role

#### 2.1.6: Testimonials (10 min)
- [ ] Simple Swiper carousel
- [ ] 2-3 testimonials

**EXTRACT NOW**: Copy TeamCard to separate file (used in Home + About)

---

### Task 2.2: ABOUT PAGE (45 min)
**File**: `app/about/page.tsx`
- [ ] Hero with breadcrumb
- [ ] About content section
- [ ] Mission/Vision
- [ ] Team section (reuse TeamCard)
- [ ] Add metadata

---

### Task 2.3: SERVICES LIST PAGE (45 min)
**File**: `app/services/page.tsx`
- [ ] Hero section
- [ ] Grid of service cards
- [ ] Install shadcn Card: `npx shadcn@latest add card`
- [ ] Add metadata

**EXTRACT NOW**: ServiceCard component

---

### Task 2.4: SERVICE DETAIL PAGES (1 hour total)
**Strategy**: Static pages first

**Files**: 
- `app/services/mobile-app-development/page.tsx`
- `app/services/web-development/page.tsx`
- `app/services/cloud-solutions/page.tsx`

For each:
- [ ] Hero with service name
- [ ] Service description
- [ ] Features list
- [ ] CTA section
- [ ] "Other Services" section

**IF** you have 5+ services: Create dynamic route `app/services/[slug]/page.tsx`

---

### Task 2.5: PORTFOLIO PAGE (45 min)
**File**: `app/portfolio/page.tsx`
- [ ] Hero section
- [ ] Grid of portfolio items (6-8 items)
- [ ] Category filter (optional)
- [ ] Add metadata

---

### Task 2.6: CONTACT PAGE (1 hour)
**File**: `app/contact/page.tsx`

#### 2.6.1: Contact Info (20 min)
- [ ] Address, phone, email
- [ ] Simple map embed or image

#### 2.6.2: Contact Form (40 min)
- [ ] Install shadcn Form + Input + Textarea: `npx shadcn@latest add form input textarea`
- [ ] Build form with React Hook Form
- [ ] Add Zod validation
- [ ] Submit handler (console.log or fetch)
- [ ] Success message

---

### Task 2.7: TEAM PAGES (30 min)
**Files**:
- `app/team/page.tsx` - Grid of all members
- `app/team/[member]/page.tsx` - Member detail (if exists in original)

Use existing TeamCard component.

---

### Task 2.8: BLOG PAGES (1 hour)
**Files**:
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`

#### 2.8.1: Blog List (30 min)
- [ ] Create `data/posts.ts` with 2-3 posts
- [ ] Grid of blog cards
- [ ] Image, title, excerpt, date

**EXTRACT**: BlogCard component

#### 2.8.2: Blog Detail (30 min)
- [ ] Article layout
- [ ] Title, meta, content
- [ ] Author bio
- [ ] Related posts

---

### Task 2.9: FAQ PAGE (30 min)
**File**: `app/faq/page.tsx`
- [ ] Install shadcn Accordion: `npx shadcn@latest add accordion`
- [ ] Copy FAQ items from HTML
- [ ] Add metadata

---

## PHASE 3: Polish & Ship (2 hours)

### Task 3.1: Responsive Check (30 min)
- [ ] Test Home page on mobile (DevTools)
- [ ] Test navigation
- [ ] Fix any overflow issues

**DON'T**: Test every single page on 20 devices

### Task 3.2: Basic SEO (30 min)
- [ ] Add metadata to all pages (title, description)
- [ ] Add OpenGraph to Home and About

### Task 3.3: Final Build (30 min)
```bash
npm run build
```
- [ ] Fix any build errors
- [ ] Verify dist/ output
- [ ] Test navigation on built files

### Task 3.4: Quick Performance (30 min)
- [ ] Add `priority` to above-fold images
- [ ] Check Lighthouse score
- [ ] Fix critical issues only

### Task 3.5: Deploy (30 min)
- [ ] Deploy to Vercel or Netlify
- [ ] Test live URL
- [ ] Share with client

---

## Summary: What We're NOT Doing

❌ Installing all shadcn components upfront (install as needed)  
❌ Creating all hooks upfront (create when needed)  
❌ Extracting all data upfront (extract per page)  
❌ Building reusable components upfront (build inline, extract on 3rd use)  
❌ Dynamic routes initially (static first)  
❌ Complex animations (simple Framer Motion fades)  
❌ Full accessibility audit (basic a11y only)  
❌ Testing phase (test as you build)  
❌ Structured data/JSON-LD (can add later)  
❌ Preloader (add only if client insists)  

---

## Quick Reference: shadcn Components to Install

Install ONLY these as needed:
```bash
npx shadcn@latest add sheet          # Mobile menu
npx shadcn@latest add card           # Any cards
npx shadcn@latest add form           # Contact form
npx shadcn@latest add input          # Contact form
npx shadcn@latest add textarea       # Contact form
npx shadcn@latest add accordion      # FAQ page
npx shadcn@latest add button         # Usually auto-installed
```

---

## Success Criteria

✅ All 14 pages render without errors  
✅ Navigation works between all pages  
✅ Mobile menu functions  
✅ Contact form validates and submits  
✅ Images load correctly  
✅ Site is deployed and live  

**Time to MVP**: 8-10 hours  
**Time to Complete**: 12-16 hours

---

## The Golden Rule

**Build ONE page completely before starting the next.**

Don't prepare everything upfront. Build the Home page from top to bottom, then About, then Services. Extract components only when you see clear repetition (3+ uses).

**Ship early. Ship often. Iterate.**
