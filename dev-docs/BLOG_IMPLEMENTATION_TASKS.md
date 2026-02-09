# Blog Implementation with Markdown - Task Breakdown

## Overview
Implement a blog system using Markdown files with category-based organization. Simple file-based approach matching the existing trucker theme UI.

**Estimated Time**: 3-4 hours  
**Files to Create**: 8-10  
**Dependencies**: gray-matter, next-mdx-remote (or remark/rehype), date-fns

---

## Architecture

```
content/
└── blog/
    ├── technology/
    │   ├── nextjs-16-features.md
    │   └── react-server-components.md
    ├── tutorials/
    │   └── building-scalable-apps.md
    └── news/
        └── company-update-2024.md
app/
├── blog/
│   ├── page.tsx              # Blog listing with categories
│   ├── layout.tsx            # Blog layout
│   └── [category]/
│       └── [slug]/
│           └── page.tsx      # Individual blog post
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx      # Blog preview card
│   │   ├── BlogGrid.tsx      # Grid of blog posts
│   │   ├── CategoryNav.tsx   # Category sidebar/filter
│   │   ├── BlogHeader.tsx    # Blog post header
│   │   ├── BlogContent.tsx   # Markdown content renderer
│   │   └── RelatedPosts.tsx  # Related articles
│   └── ui/                   # shadcn components
lib/
└── blog.ts                   # Blog utilities
```

---

## Phase 1: Setup Markdown Processing (30 min)

### Task 1.1: Install Dependencies (5 min)
```bash
npm install gray-matter next-mdx-remote date-fns
# Alternative (lighter): npm install gray-matter remark rehype remark-html
```

**Why these**:
- `gray-matter`: Parse frontmatter (title, date, category, etc.)
- `next-mdx-remote`: Render MDX with React components
- `date-fns`: Format dates nicely

### Task 1.2: Create Content Directory Structure (10 min)
```bash
mkdir -p content/blog/technology
mkdir -p content/blog/tutorials
mkdir -p content/blog/news
```

### Task 1.3: Create Sample Blog Posts (15 min)
Create 2-3 sample markdown files to test with:

**File**: `content/blog/technology/nextjs-15-features.md`
```markdown
---
title: "What's New in Next.js 15"
description: "Exploring the latest features in Next.js 15 including the App Router improvements"
date: "2024-01-15"
author: "John Doe"
category: "technology"
tags: ["nextjs", "react", "web-development"]
image: "/images/blog/nextjs-15.jpg"
---

# What's New in Next.js 15

Next.js 15 brings significant improvements to the App Router, making it easier than ever to build modern web applications...

## Key Features

- **Turbopack**: Faster builds and HMR
- **Server Components**: Improved performance
- **Parallel Routes**: Better layouts

## Conclusion

Next.js 15 is a game-changer for web development.
```

---

## Phase 2: Blog Utilities (45 min)

### Task 2.1: Create Blog Types (10 min)
**File**: `types/blog.ts`

```typescript
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  content: string
  readingTime: number
}

export interface BlogCategory {
  name: string
  slug: string
  count: number
  description?: string
}
```

### Task 2.2: Create Blog Utilities (35 min)
**File**: `lib/blog.ts`

#### 2.2.1: Read All Blog Posts
```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogCategory } from '@/types/blog'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  const categories = fs.readdirSync(blogDirectory)
  const posts: BlogPost[] = []
  
  categories.forEach(category => {
    const categoryPath = path.join(blogDirectory, category)
    
    if (!fs.statSync(categoryPath).isDirectory()) return
    
    const files = fs.readdirSync(categoryPath)
    
    files.forEach(file => {
      if (!file.endsWith('.md')) return
      
      const slug = file.replace('.md', '')
      const filePath = path.join(categoryPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      posts.push({
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        image: data.image,
        content,
        readingTime: Math.ceil(content.split(' ').length / 200), // 200 wpm
      })
    })
  })
  
  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
```

#### 2.2.2: Get Categories
```typescript
export function getCategories(): BlogCategory[] {
  const categories = fs.readdirSync(blogDirectory)
  
  return categories
    .filter(category => {
      const categoryPath = path.join(blogDirectory, category)
      return fs.statSync(categoryPath).isDirectory()
    })
    .map(category => {
      const categoryPath = path.join(blogDirectory, category)
      const files = fs.readdirSync(categoryPath)
      const mdFiles = files.filter(f => f.endsWith('.md'))
      
      return {
        name: category.charAt(0).toUpperCase() + category.slice(1),
        slug: category,
        count: mdFiles.length,
      }
    })
}
```

#### 2.2.3: Get Posts by Category
```typescript
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.category === categorySlug)
}
```

#### 2.2.4: Get Single Post
```typescript
export function getBlogPost(category: string, slug: string): BlogPost | null {
  const filePath = path.join(blogDirectory, category, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) return null
  
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category,
    tags: data.tags || [],
    image: data.image,
    content,
    readingTime: Math.ceil(content.split(' ').length / 200),
  }
}
```

#### 2.2.5: Get Related Posts
```typescript
export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}
```

#### 2.2.6: Generate Static Params
```typescript
export function generateBlogParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    category: post.category,
    slug: post.slug,
  }))
}
```

---

## Phase 3: Blog UI Components (1.5 hours)

### Task 3.1: Blog Card Component (20 min)
**File**: `app/components/blog/BlogCard.tsx`

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/types/blog'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.category}/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {post.image && (
          <div className="relative h-48 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <span className="text-xs text-gray-500">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </span>
          </div>
          <h3 className="text-xl font-semibold line-clamp-2 text-[--trucker-deep-sea-blue]">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 text-sm">
            {post.description}
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
```

**Install**: `npx shadcn@latest add card badge`

### Task 3.2: Category Navigation (20 min)
**File**: `app/components/blog/CategoryNav.tsx`

```tsx
import Link from 'next/link'
import { BlogCategory } from '@/types/blog'
import { cn } from '@/lib/utils'

interface CategoryNavProps {
  categories: BlogCategory[]
  activeCategory?: string
}

export function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">Categories</h3>
      <Link
        href="/blog"
        className={cn(
          "block px-4 py-2 rounded-lg transition-colors",
          !activeCategory 
            ? "bg-[--trucker-deep-sea-blue] text-white" 
            : "hover:bg-gray-100"
        )}
      >
        All Posts
      </Link>
      {categories.map(category => (
        <Link
          key={category.slug}
          href={`/blog?category=${category.slug}`}
          className={cn(
            "flex items-center justify-between px-4 py-2 rounded-lg transition-colors",
            activeCategory === category.slug
              ? "bg-[--trucker-deep-sea-blue] text-white"
              : "hover:bg-gray-100"
          )}
        >
          <span>{category.name}</span>
          <span className={cn(
            "text-sm",
            activeCategory === category.slug ? "text-white/80" : "text-gray-500"
          )}>
            {category.count}
          </span>
        </Link>
      ))}
    </div>
  )
}
```

### Task 3.3: Blog Grid Component (15 min)
**File**: `app/components/blog/BlogGrid.tsx`

```tsx
import { BlogPost } from '@/types/blog'
import { BlogCard } from './BlogCard'

interface BlogGridProps {
  posts: BlogPost[]
  columns?: 2 | 3 | 4
}

export function BlogGrid({ posts, columns = 3 }: BlogGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">No posts found in this category.</p>
      </div>
    )
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
```

### Task 3.4: Blog Post Header (15 min)
**File**: `app/components/blog/BlogHeader.tsx`

```tsx
import Image from 'next/image'
import { format } from 'date-fns'
import { BlogPost } from '@/types/blog'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface BlogHeaderProps {
  post: BlogPost
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="mb-8">
      <Badge className="mb-4" variant="secondary">
        {post.category}
      </Badge>
      
      <h1 className="text-4xl md:text-5xl font-bold text-[--trucker-deep-sea-blue] mb-4">
        {post.title}
      </h1>
      
      <p className="text-xl text-gray-600 mb-6">
        {post.description}
      </p>
      
      <div className="flex items-center gap-4 py-4 border-y border-gray-200">
        <Avatar className="h-12 w-12">
          <AvatarImage src={`/images/authors/${post.author.toLowerCase().replace(' ', '-')}.jpg`} />
          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        
        <div>
          <p className="font-semibold">{post.author}</p>
          <p className="text-sm text-gray-500">
            {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readingTime} min read
          </p>
        </div>
      </div>
      
      {post.image && (
        <div className="relative h-[400px] w-full mt-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  )
}
```

**Install**: `npx shadcn@latest add avatar`

### Task 3.5: Markdown Content Renderer (30 min)
**File**: `app/components/blog/BlogContent.tsx`

```tsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogPost } from '@/types/blog'

// Custom components for MDX
const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold text-[--trucker-deep-sea-blue] mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold text-[--trucker-deep-sea-blue] mt-8 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold text-[--trucker-deep-sea-blue] mt-6 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-gray-700">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-[--trucker-sunset-orange] pl-4 py-2 my-6 bg-gray-50 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6">
      {children}
    </pre>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-[--trucker-sunset-orange] hover:underline"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="rounded-lg w-full" />
    </div>
  ),
}

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <MDXRemote source={post.content} components={components} />
    </article>
  )
}
```

### Task 3.6: Related Posts Component (10 min)
**File**: `app/components/blog/RelatedPosts.tsx`

```tsx
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import { ArrowRight } from 'lucide-react'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-[--trucker-deep-sea-blue] mb-6">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="group p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-semibold text-lg mb-2 group-hover:text-[--trucker-sunset-orange] transition-colors">
              {post.title}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {post.description}
            </p>
            <span className="text-sm text-[--trucker-sunset-orange] flex items-center gap-1">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

---

## Phase 4: Blog Pages (1 hour)

### Task 4.1: Blog Listing Page (30 min)
**File**: `app/blog/page.tsx`

```tsx
import type { Metadata } from 'next'
import { getAllBlogPosts, getCategories, getPostsByCategory } from '@/lib/blog'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { CategoryNav } from '@/components/blog/CategoryNav'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Blog | Alchemify.Space',
  description: 'Latest articles, tutorials, and news from Alchemify.Space',
}

interface BlogPageProps {
  searchParams: { category?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const categories = getCategories()
  const posts = searchParams.category 
    ? getPostsByCategory(searchParams.category)
    : getAllBlogPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[--trucker-deep-sea-blue] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </section>

      {/* Content */}
      <Section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <CategoryNav 
                categories={categories} 
                activeCategory={searchParams.category}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {searchParams.category && (
              <h2 className="text-2xl font-bold mb-6 capitalize">
                {searchParams.category} Posts
              </h2>
            )}
            <BlogGrid posts={posts} columns={3} />
          </main>
        </div>
      </Section>
    </>
  )
}
```

### Task 4.2: Blog Post Detail Page (30 min)
**File**: `app/blog/[category]/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts, generateBlogParams } from '@/lib/blog'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { BlogContent } from '@/components/blog/BlogContent'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { Section } from '@/components/Section'

interface BlogPostPageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateStaticParams() {
  return generateBlogParams()
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.category, params.slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Alchemify.Space Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.category, params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category)

  return (
    <Section className="py-12">
      <div className="max-w-4xl mx-auto">
        <BlogHeader post={post} />
        <BlogContent post={post} />
        <RelatedPosts posts={relatedPosts} />
      </div>
    </Section>
  )
}
```

### Task 4.3: Blog Layout (10 min)
**File**: `app/blog/layout.tsx`

```tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
```

---

## Phase 5: Styling & Polish (30 min)

### Task 5.1: Add Typography Styles (10 min)
Update `app/globals.css` with blog-specific styles:

```css
/* Blog typography enhancements */
.prose h1, .prose h2, .prose h3 {
  color: var(--trucker-deep-sea-blue);
}

.prose a {
  color: var(--trucker-sunset-orange);
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose pre code {
  background-color: transparent;
  padding: 0;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Task 5.2: Add Reading Progress Bar (Optional) (10 min)
**File**: `app/components/blog/ReadingProgress.tsx`

```tsx
'use client'

import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-[--trucker-sunset-orange] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

### Task 5.3: Test Blog System (10 min)
- [ ] Create 2-3 test markdown files in different categories
- [ ] Test blog listing page
- [ ] Test category filtering
- [ ] Test individual blog post rendering
- [ ] Test related posts
- [ ] Verify mobile responsiveness

---

## Quick Start Guide

### To Add a New Blog Post:

1. Create markdown file: `content/blog/[category]/[slug].md`
2. Add frontmatter:
```markdown
---
title: "Your Title"
description: "Brief description"
date: "2024-01-20"
author: "Author Name"
category: "category-name"
tags: ["tag1", "tag2"]
image: "/images/blog/your-image.jpg"
---

Your content here...
```
3. Rebuild: `npm run build`
4. Deploy

### To Add a New Category:

1. Create folder: `content/blog/[new-category]/`
2. Add at least one markdown file to it
3. Category appears automatically in navigation

---

## Summary

**Total Files Created**: 10  
**Total Time**: 3-4 hours  
**Dependencies**: 3 (gray-matter, next-mdx-remote, date-fns)  
**Lines of Code**: ~500 (excluding content)

### Key Features:
✅ File-based markdown blog  
✅ Automatic category organization  
✅ Clean UI matching trucker theme  
✅ Reading time calculation  
✅ Related posts  
✅ Responsive design  
✅ SEO-friendly with metadata  
✅ Easy to add new posts (just drop markdown files)

### No Over-Engineering:
❌ No database  
❌ No CMS  
❌ No authentication  
❌ No comments (can add later)  
❌ No search (can add later with fuse.js if needed)
