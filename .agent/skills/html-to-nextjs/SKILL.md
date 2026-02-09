---
description: Converting static HTML files to Next.js React components with TypeScript.
---

# HTML to Next.js Component Conversion

## Overview
This skill guides the conversion of static HTML pages to Next.js App Router components.

## Conversion Process

### 1. File Structure Mapping
| HTML File | Next.js Route | Component Type |
|-----------|---------------|----------------|
| `home-index.html` | `app/page.tsx` | Page (Server Component) |
| `about.html` | `app/about/page.tsx` | Page (Server Component) |
| `service.html` | `app/service/page.tsx` | Page (Server Component) |
| `contact.html` | `app/contact/page.tsx` | Page (Server Component) |
| Reusable sections | `app/sections/*.tsx` | Section Components |
| Shared UI | `app/components/*.tsx` | Reusable Components |

### 2. Step-by-Step Conversion

#### Step 1: Copy HTML Structure
Extract the `<body>` content from the HTML file, excluding:
- `<header>` (will be in layout)
- `<footer>` (will be in layout)
- `<script>` tags (replaced with React logic)

#### Step 2: Convert to JSX
```html
<!-- HTML -->
<div class="trucker__container">
  <div class="row">
    <div class="col-lg-6">
      <h2 class="trucker__fs-45 trucker__fw-700">Title</h2>
    </div>
  </div>
</div>
```

```tsx
// React
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div>
      <h2 className="text-4xl font-bold text-[--trucker-deep-sea-blue]">
        Title
      </h2>
    </div>
  </div>
</div>
```

#### Step 3: Replace HTML Elements
| HTML | React/Next.js |
|------|---------------|
| `<a href="page.html">` | `<Link href="/page">` |
| `<img src="...">` | `<Image src="..." width={X} height={Y} />` |
| `<script>` | Use `useEffect` or event handlers |
| `class=` | `className=` |
| `for=` (in label) | `htmlFor=` |
| `onclick=` | `onClick=` handler |

### 3. Bootstrap to Tailwind Mapping

#### Grid System
```
Bootstrap → Tailwind
.row → flex flex-wrap or grid
.col-lg-6 → lg:col-span-6 or lg:w-1/2
.col-md-12 → col-span-12 or w-full
.container → container mx-auto px-4
.container-fluid → w-full px-4
```

#### Spacing
```
Bootstrap → Tailwind
.mt-5 → mt-12 (3rem)
.mb-4 → mb-6 (1.5rem)
.py-5 → py-12
.p-3 → p-4
.mx-auto → mx-auto
```

#### Typography
```
Bootstrap → Tailwind
.text-center → text-center
.text-white → text-white
.font-bold → font-bold
display-4 → text-6xl font-bold
h1 → text-4xl font-bold
```

### 4. Trucker Theme Classes

Preserve these custom classes as CSS variables:
```css
:root {
  --trucker-deep-sea-blue: #1a365d;
  --trucker-sunset-orange: #ed8936;
  --trucker-cloud-white: #f7fafc;
  --trucker-gray: #718096;
  --trucker-gray-2: #a0aec0;
}
```

Typography patterns:
```
trucker__fs-14 → text-sm
trucker__fs-16 → text-base
trucker__fs-18 → text-lg
trucker__fs-24 → text-2xl
trucker__fs-30 → text-3xl
trucker__fs-35 → text-4xl
trucker__fs-45 → text-5xl
trucker__fs-48 → text-5xl
trucker__fw-400 → font-normal
trucker__fw-500 → font-medium
trucker__fw-600 → font-semibold
trucker__fw-700 → font-bold
```

### 5. Image Conversion

Always use Next.js Image component:
```tsx
import Image from 'next/image'

// Old HTML
<img src="assets/images/logo/logo.svg" alt="Logo">

// New React
<Image 
  src="/images/logo/logo.svg" 
  alt="Logo" 
  width={150} 
  height={50}
  priority
/>
```

### 6. SEO Metadata

Add metadata to each page:
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Alchemify.Space',
  description: 'Page description for SEO',
}
```

## Common Pitfalls

1. **Don't forget to convert `class` to `className`**
2. **Self-closing tags need explicit closing in JSX**: `<img />`, `<br />`, `<hr />`
3. **Inline styles must be objects**: `style={{ color: 'red' }}`
4. **Comments use `{/* */}` not `<!-- -->`**
5. **Boolean attributes need explicit values**: `checked={true}` not just `checked`

## Testing Checklist

- [ ] Page renders without errors
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Responsive layout matches original
- [ ] Typography matches design system
- [ ] All animations preserved
- [ ] No console errors
