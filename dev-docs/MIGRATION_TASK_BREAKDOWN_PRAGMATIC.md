# Pragmatic Migration Task Breakdown

## Reality Check
**Original estimate**: 36 hours with 350+ subtasks  
**Pragmatic estimate**: 12-16 hours with 60 essential tasks  

### What We're CUTTING (The Brutal Truth):
1. **NO premature optimization** - Install deps AS NEEDED, not upfront
2. **NO over-engineering** - Use shadcn components as-is, don't wrap them
3. **NO premature abstraction** - Build components WHEN page needs them
4. **NO dynamic routes initially** - Static pages first, add [slug] later if needed
5. **NO complex animations** - Simple Framer Motion fades, not custom hooks
6. **NO full accessibility audit** - Basic a11y, detailed audit later
7. **NO extensive testing phase** - Test as you build

---

## Phase 0: Bare Minimum Setup (1 hour)

### Task 0.1: Initialize Project (15 min)
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
npx shadcn@latest init  # Select: New York, Slate, CSS variables=yes
```

**Subtasks**:
- [ ] Run init command
- [ ] Create folders: `app/components`, `app/sections`, `public/images`
- [ ] Copy images from `assets/images/` to `public/images/`
- [ ] Update `next.config.js` for static export

### Task 0.2: Install ONLY Essential Dependencies (15 min)
```bash
# Animations
npm install framer-motion

# Icons
npm install lucide-react

# Carousel (pick ONE, not both)
npm install swiper

# Forms (only if contact page has form)
npm install react-hook-form @hookform/resolvers zod
```

**NO gsap** - Framer Motion is enough  
**NO embla** - Swiper works fine  
**NO clsx/tailwind-merge** - shadcn already has cn() utility

### Task 0.3: Minimal Tailwind Config (15 min)
Update `tailwind.config.ts`:
```typescript
// ONLY add your custom colors, nothing else
colors: {
  trucker: {
    'deep-blue': '#1a365d',
    'orange': '#ed8936',
  }
}
```

**Don't** map all Bootstrap classes. Map them as you encounter them.

### Task 0.4: Basic Globals CSS (15 min)
Update `app/globals.css`:
- Add CSS variables for your 2-3 main colors
- Keep everything else default from shadcn

---

## Phase 1: Core Layout (2 hours)

### Task 1.1: Create Root Layout (20 min)
**File**: `app/layout.tsx`

**Subtasks**:
- [ ] Add Inter font from next/font
- [ ] Add basic metadata template
- [ ] Import globals.css
- [ ] Create simple layout structure

**SKIP**: Complex metadata (OG tags, JSON-LD) - add later

### Task 1.2: Create Header (40 min)
**File**: `app/components/Header.tsx`

**Subtasks**:
- [ ] Copy navigation structure from HTML
- [ ] Create mobile hamburger menu (simple state toggle)
- [ ] Use shadcn Sheet for mobile menu (don't build custom)
- [ ] Add logo with Link to home
- [ ] Add sticky behavior on scroll (useState + scroll listener)

**SKIP**: Topbar initially, complex dropdowns

### Task 1.3: Create Footer (30 min)
**File**: `app/components/Footer.tsx`

**Subtasks**:
- [ ] 4-column grid (About, Links, Services, Contact)
- [ ] Add copyright bar
- [ ] Add social links

**SKIP**: Complex footer layouts, newsletter form initially

### Task 1.4: Create Marketing Layout (10 min)
**File**: `app/(marketing)/layout.tsx`

**Subtasks**:
- [ ] Import Header, Footer
- [ ] Wrap children

**SKIP**: Preloader (add only if client insists), ScrollToTop (can add later)

---

## Phase 2: Build Pages ONE BY ONE (8-10 hours)

### Strategy
**Don't build shared components first.** Build each page completely, then extract common patterns.

### Task 2.1: Home Page (2 hours)
**File**: `app/page.tsx`

**Subtasks**:
- [ ] **2.1.1**: Copy home-index.html structure
- [ ] **2.1.2**: Convert section by section:
  - Hero: Title + CTA buttons
  - Services: 3-4 cards with icons
  - About: Two columns (image + text)
  - Portfolio: Grid of images
  - Team: 3-4 member cards
  - Testimonials: Simple carousel with Swiper
  - CTA: Banner section
- [ ] **2.1.3**: Add Framer Motion fade-in on scroll
- [ ] **2.1.4**: Test all links work

**Extract after**: If you see yourself copying the same card 3+ times, THEN extract to component.

### Task 2.2: About Page (45 min)
**File**: `app/about/page.tsx`

**Subtasks**:
- [ ] Hero section with title
- [ ] About content section
- [ ] Mission/Vision (if exists)
- [ ] Reuse Team cards from Home (NOW extract TeamCard component)

**Extract**: TeamCard component (since used in 2 places)

### Task 2.3: Services List Page (45 min)
**File**: `app/services/page.tsx`

**Subtasks**:
- [ ] Hero section
- [ ] Grid of service cards
- [ ] Each card: icon, title, description, link

**Extract**: ServiceCard component

### Task 2.4: Service Detail Pages (30 min each)
**Files**: `app/services/mobile/page.tsx`, `app/services/web/page.tsx`, etc.

**Strategy**: **STATIC PAGES FIRST**

**Subtasks**:
- [ ] Create static pages for each service (don't do [slug] yet)
- [ ] Copy content from service-details.html
- [ ] Add "Back to Services" link
- [ ] Add related services section

**IF** you have 5+ services: THEN convert to dynamic route `app/services/[slug]/page.tsx`

### Task 2.5: Portfolio Page (45 min)
**File**: `app/portfolio/page.tsx`

**Subtasks**:
- [ ] Hero section
- [ ] Grid of portfolio items
- [ ] Simple hover effect on images

### Task 2.6: Contact Page (1 hour)
**File**: `app/contact/page.tsx`

**Subtasks**:
- [ ] Hero section
- [ ] Contact form with validation
- [ ] Contact info section

**Form handling**:
- Use shadcn Form + React Hook Form
- Simple client-side validation with Zod
- Show success message (don't build backend yet)

### Task 2.7: Team Pages (30 min)
**Files**: `app/team/page.tsx`, `app/team/[member]/page.tsx` (if detail pages exist)

**Subtasks**:
- [ ] Grid using TeamCard (already extracted)
- [ ] Member detail if needed

### Task 2.8: Blog Pages (1 hour)
**Files**: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`

**Subtasks**:
- [ ] Blog list with cards
- [ ] Blog detail with article layout

**Data**: Create `data/posts.ts` with 2-3 sample posts

### Task 2.9: FAQ Page (30 min)
**File**: `app/faq/page.tsx`

**Subtasks**:
- [ ] Use shadcn Accordion (install: `npx shadcn@latest add accordion`)
- [ ] Copy FAQ items from HTML

### Task 2.10: 404 Page (15 min)
**File**: `app/not-found.tsx`

**Subtasks**:
- [ ] Simple 404 message
- [ ] Link back to home

---

## Phase 3: Polish & Ship (2-3 hours)

### Task 3.1: Responsive Check (30 min)
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test on tablet
- [ ] Fix any broken layouts

**DON'T**: Test on 20 different devices. Test on 3 screen sizes.

### Task 3.2: Basic SEO (30 min)
- [ ] Add title/description to all pages
- [ ] Add OpenGraph tags to key pages (Home, About)

**SKIP**: JSON-LD structured data initially

### Task 3.3: Build & Test (30 min)
```bash
npm run build
```

**Subtasks**:
- [ ] Fix any build errors
- [ ] Check dist folder output
- [ ] Test navigation on built site

### Task 3.4: Performance Quick Wins (30 min)
- [ ] Add `priority` to hero images
- [ ] Lazy load below-fold images
- [ ] Check Lighthouse score (aim for >70, not 100)

### Task 3.5: Deploy (30 min)
- [ ] Deploy to Vercel/Netlify
- [ ] Test live site
- [ ] Share with client

---

## The Pragmatic Rules

### 1. YAGNI (You Aren't Gonna Need It)
- **Don't** build hooks until you need them
- **Don't** create TypeScript types for everything upfront
- **Don't** optimize images until they're a problem
- **Don't** add animations "just because"

### 2. Copy-Paste Until It Hurts
- Copy-paste card components 2-3 times
- Extract to component ONLY on 3rd use
- Better to have 2 similar components than 1 wrong abstraction

### 3. Static First
- Static pages are faster to build and debug
- Add dynamic routes ONLY when you have 5+ similar items
- generateStaticParams can wait

### 4. Use shadcn As-Is
- Don't wrap Button in MyButton
- Don't customize everything upfront
- shadcn components look fine out of the box

### 5. Test While Building
- Don't save 2 hours of "testing phase"
- Test each page as you finish it
- Fix issues immediately

### 6. Ship Early
- Home + About + Contact = MVP
- Add other pages after initial deployment
- Get feedback before building everything

---

## Files You'll Actually Create (≈30 files)

```
app/
├── layout.tsx                    # Root layout
├── page.tsx                      # Home page
├── globals.css                   # Basic styles
├── not-found.tsx                 # 404 page
├── (marketing)/
│   ├── layout.tsx               # Marketing layout
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── mobile/
│   │   │   └── page.tsx
│   │   ├── web/
│   │   │   └── page.tsx
│   │   └── cloud/
│   │       └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── faq/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ui/                       # shadcn components (auto-generated)
│   ├── ServiceCard.tsx           # Extract after building 2 pages
│   ├── TeamCard.tsx              # Extract after building 2 pages
│   └── BlogCard.tsx              # Extract after building 2 pages
├── sections/                     # Extract if sections are reused
├── lib/
│   └── utils.ts                  # Already exists from shadcn
└── data/
    └── services.ts               # Only if needed

public/
└── images/                       # Copied from assets
    └── ...
```

---

## Comparison: Original vs Pragmatic

| Aspect | Original (Bloated) | Pragmatic (This) |
|--------|-------------------|------------------|
| Setup Time | 2.5 hours | 1 hour |
| Components Built Upfront | 15+ | 3 (Header, Footer, Layout) |
| shadcn Components Installed | 13 | 5-6 (as needed) |
| Hooks Created Upfront | 5 | 0 |
| Types Defined Upfront | 5 files | 0 |
| Data Extracted Upfront | All 14 pages | Per page as needed |
| Testing Phase | 4 hours | 30 min |
| **Total Time** | **36 hours** | **12-16 hours** |
| **Risk of Abandoning** | **HIGH** | **LOW** |

---

## Final Advice

**Start with Phase 0, then jump straight to building the Home page.**

Don't prepare everything upfront. Build one page completely, then move to the next. Extract components only when you see clear repetition.

**Remember**: A shipped imperfect website is infinitely better than a perfect website that's never finished.

Now go build. Stop planning.
