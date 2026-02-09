# Next.js Development Rules

## 1. Component Architecture

### Server vs Client Components
- **Default to Server Components** - No 'use client' unless absolutely necessary
- **Use Client Components for**:
  - Event handlers (onClick, onChange, etc.)
  - Browser APIs (localStorage, window, document)
  - State management (useState, useReducer)
  - Effects (useEffect, useLayoutEffect)
  - Custom hooks that use above features

```tsx
// Server Component (default) - app/sections/Hero.tsx
export function HeroSection() {
  return (
    <section>
      <h1>Welcome</h1>
    </section>
  )
}

// Client Component - app/components/Carousel.tsx
'use client'
export function Carousel() {
  const [current, setCurrent] = useState(0)
  return <div>...</div>
}
```

## 2. File Structure

### Directory Organization
```
app/
├── components/          # Shared UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── sections/           # Page section components
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utilities
│   └── utils.ts
├── types/              # TypeScript types
├── data/               # Static data/content
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Header.tsx`, `HeroSection.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- **Utilities**: camelCase (e.g., `cn.ts`, `formatDate.ts`)
- **Types**: PascalCase (e.g., `Service.ts`, `BlogPost.ts`)

## 3. Styling Rules

### Tailwind CSS
- Use **Tailwind utility classes** for all styling
- Use **CSS variables** for theme colors
- Use **cn() utility** for conditional classes
- Avoid arbitrary values when possible

```tsx
// Good
<div className="flex items-center justify-between p-4 bg-blue-600">

// Good with cn utility
import { cn } from '@/lib/utils'
<div className={cn(
  "flex items-center justify-between p-4",
  isActive ? "bg-blue-600" : "bg-gray-200"
)}>

// Bad - Arbitrary values
<div className="w-[123px] h-[45px]">
```

### Custom CSS Variables
```css
/* globals.css */
:root {
  --trucker-deep-sea-blue: #1a365d;
  --trucker-sunset-orange: #ed8936;
  --trucker-cloud-white: #f7fafc;
}
```

```tsx
// Usage
<div className="text-[--trucker-deep-sea-blue]">
```

## 4. Component Patterns

### Props Interface
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  onClick,
  className 
}: ButtonProps) {
  return <button>...</button>
}
```

### Forward Refs
```tsx
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input ref={ref} className={className} {...props} />
      </div>
    )
  }
)
Input.displayName = 'Input'
```

## 5. Image Handling

### Next.js Image Component
Always use Next.js Image for optimization:

```tsx
import Image from 'next/image'

// Local image
<Image
  src="/images/logo.svg"
  alt="Company Logo"
  width={150}
  height={50}
  priority // For above-the-fold images
/>

// Remote image (must be in next.config.js)
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>

// Fill container
<div className="relative w-full h-64">
  <Image
    src="/images/hero.jpg"
    alt="Hero"
    fill
    className="object-cover"
  />
</div>
```

## 6. Navigation

### Next.js Link
Always use Link component for internal navigation:

```tsx
import Link from 'next/link'

// Internal link
<Link href="/about" className="text-blue-600 hover:underline">
  About Us
</Link>

// External link
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site
</a>

// Link with button styling
<Link href="/contact" passHref>
  <Button>Contact Us</Button>
</Link>
```

## 7. Metadata

### Page Metadata
Add metadata to every page:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Alchemify.Space',
  description: 'Page description for SEO',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/images/og-image.jpg'],
  },
}
```

## 8. Animations

### Framer Motion
Use Framer Motion for animations:

```tsx
'use client'
import { motion } from 'framer-motion'

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Content
</motion.div>

// Stagger children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 9. Forms

### React Hook Form + Zod
Use for all forms:

```tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // Submit logic
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Send</button>
    </form>
  )
}
```

## 10. Data Fetching

### Static Data
For static content, use direct imports:

```tsx
import { services } from '@/app/data/services'

export default function ServicesPage() {
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
```

### Dynamic Data
For dynamic routes:

```tsx
export async function generateStaticParams() {
  const services = await getServices()
  return services.map(service => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const service = await getService(params.slug)
  return <ServiceDetails service={service} />
}
```

## 11. Error Handling

### Error Boundaries
Create error.tsx for error boundaries:

```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
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

### Not Found
Create not-found.tsx for 404:

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Go Home</Link>
    </div>
  )
}
```

## 12. Performance

### Optimization Rules
1. **Use Image component** for all images
2. **Use dynamic imports** for heavy components
3. **Lazy load** below-the-fold sections
4. **Use will-change** sparingly for animations
5. **Optimize fonts** with next/font

```tsx
// Dynamic import
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})

// Font optimization
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## 13. Accessibility

### A11y Requirements
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast (WCAG 4.5:1)

```tsx
// Good
<button aria-label="Close menu" onClick={closeMenu}>
  <XIcon />
</button>

// Bad
<button onClick={closeMenu}>
  <XIcon />
</button>

// Form accessibility
<form>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" aria-required="true" />
  <p id="email-error" role="alert">Error message</p>
</form>
```

## 14. Code Quality

### Required Practices
1. **TypeScript** - All files must be .tsx/.ts
2. **ESLint** - Run `npm run lint` before committing
3. **No console.log** - Remove debug logs
4. **Error handling** - Always handle async errors
5. **Comments** - Use JSDoc for complex functions

```bash
# Run checks before committing
npm run lint
npx tsc --noEmit
```
