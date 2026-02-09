# Alchemify.Space - Next.js Migration Project

## Project Overview

This project is migrating from a static HTML/CSS/JS website to a modern **Next.js 15** application with App Router. The original site uses Bootstrap 5, jQuery, and custom CSS (trucker theme). The new Next.js version will use React 19, Tailwind CSS, and modern React patterns.

### Original Stack (Legacy)
- HTML5 static pages (14 pages total)
- Bootstrap 5.3.x with custom theme classes
- jQuery 3.x with various plugins (swiper, wow.js, magnific-popup, etc.)
- FontAwesome Pro icons
- Custom CSS in `assets/css/style.css`

### Target Stack (Next.js)
- **Next.js 15** with App Router
- **React 19** with Server Components by default
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- Modern React hooks and patterns (no jQuery)
- Static export for deployment

## Architecture Decisions

### 1. App Router Structure
```
app/
├── layout.tsx              # Root layout with global providers
├── page.tsx                # Home page (replaces home-index.html)
├── globals.css             # Global styles + Tailwind
├── sections/               # Page section components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── ...
├── components/             # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Preloader.tsx       # Page preloader animation
│   ├── ui/                 # shadcn/ui components
│   └── ...
├── lib/                    # Utilities and helpers
│   └── utils.ts
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── [routes]/               # Dynamic routes
    ├── about/
    ├── services/
    ├── portfolio/
    ├── contact/
    └── ...
```

### 2. Styling Strategy
- **Tailwind CSS** for all new styling (replace Bootstrap grid)
- **CSS Variables** for theme colors matching trucker theme
- **Custom utility classes** for trucker-specific typography patterns
- **CSS Modules** only when scoped styles absolutely needed

### 3. Component Migration Strategy
| Legacy Pattern | Next.js Pattern |
|---------------|-----------------|
| HTML sections | React Server Components |
| jQuery plugins | React hooks + custom components |
| Bootstrap JS | shadcn/ui + Radix primitives |
| Static HTML files | Next.js App Router pages |
| CDN scripts | npm packages + dynamic imports |

### 4. Animation Migration
- **WOW.js** → **Framer Motion** or **GSAP**
- **jQuery animations** → **CSS transitions** or **Framer Motion**
- **Swiper.js** → **Embla Carousel** or keep Swiper via npm

## Development Rules

### Code Style
- Use **TypeScript** for all new files
- Use **Server Components** by default (no 'use client' unless needed)
- Use **async/await** for data fetching
- Use **function declarations** for components
- Use **named exports** for components

### Component Patterns
```tsx
// Server Component (default)
export function HeroSection() {
  return <section>...</section>
}

// Client Component (only when needed)
'use client'
export function InteractiveCarousel() {
  const [state, setState] = useState()
  return <div>...</div>
}
```

### Styling Patterns
```tsx
// Tailwind + custom CSS variables
<div className="container mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-[--trucker-deep-sea-blue]">
    Title
  </h2>
</div>
```

### Asset Handling
- Move `assets/images/` → `public/images/`
- Move `assets/fonts/` → `public/fonts/`
- Import CSS files in `layout.tsx`
- Use Next.js `<Image>` component for all images

### Navigation
- Replace `<a href="...">` with Next.js `<Link>`
- Use `usePathname()` for active states
- Client Component wrapper for interactive nav

## Migration Phases

### Phase 1: Project Setup
1. Initialize Next.js 15 project with shadcn
2. Configure Tailwind CSS with custom theme
3. Set up project structure
4. Migrate global styles

### Phase 2: Core Components
1. Create Layout with Header/Footer
2. Build Preloader component
3. Create reusable UI components
4. Set up navigation

### Phase 3: Page Migration
1. Home page (home-index.html)
2. About page (about.html)
3. Services pages (service.html, service-details.html)
4. Portfolio page (portfolio.html)
5. Contact page (contact.html)
6. Team pages (team.html, team-details.html)
7. Blog pages (blog-standard.html, blog-details.html)
8. FAQ page (faq.html)
9. 404 page (404.html)

### Phase 4: Polish
1. Implement animations (Framer Motion)
2. Add responsive design
3. SEO optimization
4. Performance optimization

## Common Tasks

### Converting HTML to React Component
```
1. Copy HTML structure
2. Convert class → className
3. Convert style strings to objects or Tailwind
4. Replace <img> with <Image>
5. Replace <a> with <Link>
6. Extract reusable components
7. Add TypeScript types
```

### Converting jQuery to React
```
1. Identify DOM manipulations
2. Replace with React state
3. Use useEffect for side effects
4. Use useRef for DOM references
5. Convert event listeners to React events
```

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## Business Contact Information

When building the website, use the following contact details throughout (Header, Footer, Contact page):

### Primary Contact
- **Email**: alchemify.space@gmail.com
- **Phone**: +0310 1556061
- **WhatsApp Business**: +0310 1556061
- **Telegram**: +92 310 1556061

### Addresses
- **Primary**: Chak 6061/GD, Tehsil and District Sahiwal, Pakistan
- **Secondary**: Chak 89/6-R, Sahiwal, Pakistan
- **Google Maps**: https://www.google.com/maps/place/Chak+89%2F6-R,+Pakistan/@30.6861848,73.0694413,1916m

### Social Media Links
- **YouTube**: https://www.youtube.com/@AlchemifySpace
- **LinkedIn**: https://www.linkedin.com/company/alchemifyspace/
- **Facebook**: https://www.facebook.com/AlchemifySpace
- **GitHub**: https://github.com/Alchemify-Space
- **Telegram**: https://t.me/+923101556061
- **Twitter/X**: https://twitter.com/AlchemifySpace (to be created)

### Business Hours
- Monday - Friday: 9:00 AM - 6:00 PM (PKT)
- Saturday: 10:00 AM - 2:00 PM
- Sunday: Closed

## Resources

- Original HTML files: `/` (root directory)
- Original assets: `/assets/`
- Next.js project: `/` (will overwrite root)
- Documentation: `/dev-docs/`
- Contact Setup Guide: `/dev-docs/TWITTER_SETUP_GUIDE.md`
- Backup: Keep `.git` history for reference
