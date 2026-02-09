# Alchemify.Space - Agent Guidelines

## Build & Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Running tests (when configured)
npm test
npm test -- --testNamePattern="ComponentName"
npm test -- --testPathPattern="path/to/test"
```

## Code Style Guidelines

### TypeScript
- All files must be `.ts` or `.tsx`
- Use explicit types for function parameters and return values
- Prefer `interface` over `type` for object definitions
- Use `strict` mode configuration

### Component Patterns
- **Default to Server Components** - no 'use client' unless necessary
- Use 'use client' only for: event handlers, browser APIs, state, effects
- Use function declarations: `export function ComponentName()`
- Use named exports, not default exports
- Add component display names for forwarded refs

```tsx
// Server Component (preferred)
export function HeroSection({ title }: { title: string }) {
  return <section>{title}</section>
}

// Client Component (when needed)
'use client'
export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Naming Conventions
- Components: PascalCase (e.g., `Header.tsx`, `HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`, `cn.ts`)
- Types/Interfaces: PascalCase (e.g., `Service.ts`, `BlogPost.ts`)
- Files: Match exported name (e.g., `Button.tsx` exports `Button`)

### File Organization
```
app/
├── components/          # Shared UI components
│   ├── ui/             # shadcn/ui components only
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/           # Page section components
│   ├── Hero.tsx
│   └── Services.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utilities
│   └── utils.ts        # Contains cn() helper
├── types/              # TypeScript types
├── data/               # Static data/content
├── globals.css         # Global styles + Tailwind
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

### Styling (Tailwind CSS)
- Use Tailwind utility classes exclusively
- Use `cn()` utility for conditional classes
- Use CSS variables for theme colors: `text-[--trucker-deep-sea-blue]`
- Avoid arbitrary values when possible
- Mobile-first responsive design

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "flex items-center justify-between p-4",
  isActive ? "bg-blue-600" : "bg-gray-200"
)}>
```

### Imports
- Use `@/` path alias for project imports
- Group imports: React/Next, third-party, internal, types
- No unused imports (enforced by lint)

```tsx
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { Service } from '@/app/types/Service'
```

### Error Handling
- Always handle async errors with try/catch
- Use error.tsx for route error boundaries
- Use not-found.tsx for 404 pages
- Remove console.log before committing

```tsx
// app/error.tsx
'use client'
export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="text-center py-16">
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

## Key Libraries

- **UI**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Images**: Next.js Image component (always)

## Performance Rules

1. Use Next.js `<Image>` for all images with proper dimensions
2. Use dynamic imports for heavy components
3. Keep Server Components as default
4. Optimize fonts with next/font
5. Add `priority` prop to above-the-fold images

## Migration Context

This project is migrating from static HTML (Bootstrap/jQuery) to Next.js 15:
- Legacy files are in `/html-template/`
- New Next.js app is in `/app/`
- Assets moved from `assets/` to `public/`
- Replace `<a>` with Next.js `<Link>`
- Replace `<img>` with Next.js `<Image>`

## Pre-commit Checklist

- [ ] Run `npm run lint` - zero errors
- [ ] Run `npx tsc --noEmit` - no type errors
- [ ] Remove all console.log statements
- [ ] Add proper alt text to images
- [ ] Test responsive breakpoints
- [ ] Verify accessibility (ARIA labels, keyboard nav)
