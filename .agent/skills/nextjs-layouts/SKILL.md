---
description: Creating Next.js App Router layouts, pages, and routing configuration.
---

# Next.js Layouts and Routing

## Overview
Setting up the App Router structure with layouts, nested layouts, and route groups.

## Directory Structure

```
app/
├── (marketing)/           # Route group (no URL segment)
│   ├── layout.tsx         # Marketing layout
│   ├── page.tsx           # Home page (home-index.html)
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── services/
│   │   ├── page.tsx       # Services list
│   │   └── [slug]/
│   │       └── page.tsx   # Service detail
│   ├── portfolio/
│   │   └── page.tsx       # Portfolio page
│   ├── team/
│   │   ├── page.tsx       # Team list
│   │   └── [id]/
│   │       └── page.tsx   # Team member detail
│   ├── blog/
│   │   ├── page.tsx       # Blog list
│   │   └── [slug]/
│   │       └── page.tsx   # Blog post
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── faq/
│   │   └── page.tsx       # FAQ page
│   └── pricing/
│       └── page.tsx       # Pricing page
├── layout.tsx             # Root layout
├── globals.css            # Global styles
├── not-found.tsx          # 404 page
├── error.tsx              # Error boundary
└── loading.tsx            # Loading UI
```

## Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Alchemify.Space',
    default: 'Alchemify.Space - Transforming Ideas into Reality',
  },
  description: 'Expert mobile app, web application, and cloud solutions development.',
  keywords: ['mobile app development', 'web development', 'cloud solutions'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

## Marketing Layout (with Header/Footer)

```tsx
// app/(marketing)/layout.tsx
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { ScrollToTop } from '@/app/components/ScrollToTop'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
```

## Page Templates

### Static Page
```tsx
// app/(marketing)/about/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { TeamSection } from './sections/TeamSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Alchemify.Space and our mission.',
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

### Dynamic Page (Service Detail)
```tsx
// app/(marketing)/services/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/app/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  
  return {
    title: service.title,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }
  
  return (
    <>
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <RelatedServices currentSlug={service.slug} />
    </>
  )
}
```

### Blog Post Page
```tsx
// app/(marketing)/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/app/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.coverImage }],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <article className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-500">{post.date}</time>
      </header>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
```

## Error Handling

### Not Found Page (404)
```tsx
// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
```

### Error Boundary
```tsx
// app/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

### Loading State
```tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
    </div>
  )
}
```

## Route Groups

Route groups allow you to organize routes without affecting the URL:

```
app/
├── (marketing)/          # URL: /, /about, /services
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
├── (dashboard)/          # URL: /dashboard, /dashboard/settings
│   ├── layout.tsx        # Different layout (sidebar, etc.)
│   └── dashboard/
└── api/                  # API routes
    └── contact/
        └── route.ts
```

## Parallel Routes

For complex layouts with multiple sections:

```tsx
// app/@modal/page.tsx
export default function Modal() {
  return null
}
```

```tsx
// app/layout.tsx
export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
```

## Intercepting Routes

For modal-style navigation:

```
app/
├── portfolio/
│   └── [id]/
│       └── page.tsx          # Full page
└── (.)portfolio/
    └── [id]/
        └── page.tsx          # Modal interception
```

## Best Practices

1. **Use Server Components by default** - Only add 'use client' when needed
2. **Co-locate related files** - Keep sections, components, and data close to pages
3. **Use generateStaticParams** - For dynamic routes that should be static
4. **Implement proper metadata** - SEO is important for each page
5. **Use loading.tsx** - Show loading states for better UX
6. **Handle errors gracefully** - Always have error.tsx and not-found.tsx
