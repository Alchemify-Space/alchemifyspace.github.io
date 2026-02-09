---
description: Step-by-step workflow for migrating a single HTML page to Next.js.
---

# Migrate HTML Page to Next.js

## Overview
This workflow converts a single HTML file from the legacy site into a Next.js App Router page.

## Prerequisites
- Next.js project initialized
- shadcn/ui configured
- Tailwind CSS configured with custom theme
- Header and Footer components created

## Migration Steps

### Step 1: Create Page File
Create the page file in the appropriate App Router location:

```bash
# For home page (home-index.html → app/page.tsx)
touch app/page.tsx

# For about page (about.html → app/about/page.tsx)
mkdir -p app/about
touch app/about/page.tsx

# For service detail page
touch app/services/[slug]/page.tsx
```

### Step 2: Add Metadata
Add Next.js metadata for SEO:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Alchemify.Space',
  description: 'Page description for search engines',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/images/og-image.jpg'],
  },
}
```

### Step 3: Extract Sections
From the HTML file, identify and extract sections:

1. **Copy body content** from HTML (excluding header/footer)
2. **Identify sections** based on `<section>` tags
3. **Create section components** in `app/sections/` or `app/[page]/sections/`

Example section breakdown from `about.html`:
```
├── HeroSection (breadcrumb + title)
├── AboutSection (company info)
├── MissionSection (mission/vision)
├── ValuesSection (core values)
├── TeamSection (team members)
└── CTASection (call to action)
```

### Step 4: Convert HTML to JSX
For each section component:

1. **Copy HTML structure**
2. **Convert attributes**:
   - `class` → `className`
   - `for` → `htmlFor`
   - `onclick` → `onClick`
   - `style="..."` → `style={{...}}`

3. **Replace elements**:
   ```tsx
   // Old HTML
   <a href="index.html">Home</a>
   
   // New JSX
   import Link from 'next/link'
   <Link href="/">Home</Link>
   
   // Old HTML
   <img src="assets/images/logo.svg" alt="Logo">
   
   // New JSX
   import Image from 'next/image'
   <Image 
     src="/images/logo.svg" 
     alt="Logo" 
     width={150} 
     height={50}
   />
   ```

4. **Convert Bootstrap to Tailwind**:
   ```tsx
   // Old
   <div class="container">
     <div class="row">
       <div class="col-lg-6">
   
   // New
   <div className="container mx-auto px-4">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       <div>
   ```

### Step 5: Handle Client-Side Interactivity
Identify interactive elements and convert to React:

```tsx
'use client' // Only if needed

import { useState } from 'react'

export function InteractiveSection() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen && <div>Content</div>}
    </div>
  )
}
```

Common conversions:
- **Mobile menu** → Sheet component
- **Tabs** → Tabs component
- **Modal/Popup** → Dialog component
- **Accordion** → Collapsible component
- **Form validation** → React Hook Form + Zod

### Step 6: Migrate Animations
Convert jQuery/WOW.js animations:

```tsx
// Old: WOW.js
<div class="wow fadeInUp" data-wow-delay="0.1s">

// New: Framer Motion
'use client'
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.5 }}
>
```

### Step 7: Handle Images
Update all image paths and use Next.js Image:

1. **Move assets** to `public/images/`
2. **Update paths** from `assets/images/` to `/images/`
3. **Add dimensions** for all images

```tsx
import Image from 'next/image'

<Image
  src="/images/about/team.jpg"
  alt="Team member"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Step 8: Compose Page
Combine all sections in the page file:

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { TeamSection } from './sections/TeamSection'

export const metadata: Metadata = {
  title: 'About Us | Alchemify.Space',
  description: 'Learn about our team and mission...',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection 
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />
      <AboutSection />
      <TeamSection />
    </>
  )
}
```

### Step 9: Test and Verify
Run the development server and verify:

```bash
npm run dev
```

Checklist:
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Navigation links work
- [ ] Responsive on mobile/desktop
- [ ] Animations work
- [ ] No console errors
- [ ] SEO metadata correct

### Step 10: Create Loading State
Add `loading.tsx` for better UX:

```tsx
// app/about/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  )
}
```

## Common Patterns

### Breadcrumb Component
```tsx
// app/components/Breadcrumb.tsx
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  items: Array<{ label: string; href: string }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {index === items.length - 1 ? (
            <span className="text-gray-900">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
```

### Section Wrapper
```tsx
// app/components/Section.tsx
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
```

## Troubleshooting

### Images Not Loading
- Check path starts with `/` not relative
- Verify images are in `public/` directory
- Ensure width/height props provided

### Styles Not Applying
- Check `className` not `class`
- Verify Tailwind classes are correct
- Check if custom CSS variables defined in globals.css

### Hydration Errors
- Ensure server/client component boundaries correct
- Remove `window` or `document` access from server components
- Add `'use client'` if accessing browser APIs

### Link Errors
- Use `Link` from `next/link` not HTML `a` for internal
- Use regular `a` for external links with `target="_blank"`
