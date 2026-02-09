---
description: Converting Bootstrap CSS classes to Tailwind CSS with custom theme configuration.
---

# Bootstrap to Tailwind Migration

## Overview
Convert Bootstrap 5 utility classes and grid system to Tailwind CSS while maintaining the Alchemify design system.

## Complete Class Mapping

### Grid System

| Bootstrap Class | Tailwind Class | Notes |
|----------------|----------------|-------|
| `.container` | `container mx-auto px-4` | Centered with auto margins |
| `.container-fluid` | `w-full px-4` | Full width |
| `.row` | `flex flex-wrap -mx-4` or `grid` | Flex or Grid option |
| `.col` | `flex-1` | Equal width columns |
| `.col-auto` | `w-auto` | Auto width |
| `.col-1` | `w-1/12` | 8.33% width |
| `.col-2` | `w-1/6` or `w-2/12` | 16.67% width |
| `.col-3` | `w-1/4` or `w-3/12` | 25% width |
| `.col-4` | `w-1/3` or `w-4/12` | 33.33% width |
| `.col-6` | `w-1/2` or `w-6/12` | 50% width |
| `.col-12` | `w-full` | 100% width |
| `.col-sm-*` | `sm:w-*` | Small breakpoint (640px) |
| `.col-md-*` | `md:w-*` | Medium breakpoint (768px) |
| `.col-lg-*` | `lg:w-*` | Large breakpoint (1024px) |
| `.col-xl-*` | `xl:w-*` | Extra large (1280px) |

### Responsive Grid Examples

```html
<!-- Bootstrap -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Content</div>
</div>

<!-- Tailwind -->
<div class="flex flex-wrap -mx-4">
  <div class="w-full md:w-1/2 lg:w-1/3 px-4">Content</div>
</div>

<!-- Or using CSS Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Content</div>
</div>
```

### Spacing (Margin & Padding)

| Bootstrap | Tailwind | Value |
|-----------|----------|-------|
| `.m-0` | `m-0` | 0 |
| `.m-1` | `m-1` | 0.25rem (4px) |
| `.m-2` | `m-2` | 0.5rem (8px) |
| `.m-3` | `m-3` | 0.75rem (12px) |
| `.m-4` | `m-4` | 1rem (16px) |
| `.m-5` | `m-5` | 1.25rem (20px) |
| `.mt-*` | `mt-*` | Margin top |
| `.mb-*` | `mb-*` | Margin bottom |
| `.ml-*` | `ml-*` | Margin left |
| `.mr-*` | `mr-*` | Margin right |
| `.mx-*` | `mx-*` | Margin horizontal |
| `.my-*` | `my-*` | Margin vertical |
| `.p-*` | `p-*` | Padding (same scale) |
| `.pt-*` | `pt-*` | Padding top |
| `.pb-*` | `pb-*` | Padding bottom |
| `.px-*` | `px-*` | Padding horizontal |
| `.py-*` | `py-*` | Padding vertical |
| `.mx-auto` | `mx-auto` | Auto horizontal margin |

### Typography

| Bootstrap | Tailwind | Description |
|-----------|----------|-------------|
| `.h1` - `.h6` | `text-4xl` - `text-base` | Heading sizes |
| `.display-1` | `text-8xl` | 6rem display |
| `.display-2` | `text-7xl` | 5.5rem display |
| `.display-3` | `text-6xl` | 4.5rem display |
| `.display-4` | `text-5xl` | 3.5rem display |
| `.lead` | `text-xl` | Lead paragraph |
| `.small` | `text-sm` | Small text |
| `.text-start` | `text-left` | Left align |
| `.text-center` | `text-center` | Center align |
| `.text-end` | `text-right` | Right align |
| `.fw-bold` | `font-bold` | Bold weight (700) |
| `.fw-normal` | `font-normal` | Normal weight (400) |
| `.fw-light` | `font-light` | Light weight (300) |
| `.fst-italic` | `italic` | Italic style |
| `.text-decoration-none` | `no-underline` | Remove underline |
| `.text-uppercase` | `uppercase` | Uppercase text |
| `.text-capitalize` | `capitalize` | Capitalize text |

### Colors

#### Text Colors
| Bootstrap | Tailwind |
|-----------|----------|
| `.text-primary` | `text-blue-600` or custom |
| `.text-secondary` | `text-gray-600` |
| `.text-success` | `text-green-600` |
| `.text-danger` | `text-red-600` |
| `.text-warning` | `text-yellow-600` |
| `.text-info` | `text-cyan-600` |
| `.text-light` | `text-gray-100` |
| `.text-dark` | `text-gray-900` |
| `.text-white` | `text-white` |
| `.text-muted` | `text-gray-500` |

#### Background Colors
| Bootstrap | Tailwind |
|-----------|----------|
| `.bg-primary` | `bg-blue-600` |
| `.bg-secondary` | `bg-gray-600` |
| `.bg-success` | `bg-green-600` |
| `.bg-light` | `bg-gray-100` |
| `.bg-dark` | `bg-gray-900` |
| `.bg-white` | `bg-white` |
| `.bg-transparent` | `bg-transparent` |

### Display & Flexbox

| Bootstrap | Tailwind |
|-----------|----------|
| `.d-none` | `hidden` |
| `.d-inline` | `inline` |
| `.d-inline-block` | `inline-block` |
| `.d-block` | `block` |
| `.d-flex` | `flex` |
| `.d-inline-flex` | `inline-flex` |
| `.d-grid` | `grid` |
| `.d-table` | `table` |
| `.d-table-cell` | `table-cell` |

#### Flexbox Utilities
| Bootstrap | Tailwind |
|-----------|----------|
| `.flex-row` | `flex-row` |
| `.flex-row-reverse` | `flex-row-reverse` |
| `.flex-column` | `flex-col` |
| `.flex-column-reverse` | `flex-col-reverse` |
| `.justify-content-start` | `justify-start` |
| `.justify-content-center` | `justify-center` |
| `.justify-content-end` | `justify-end` |
| `.justify-content-between` | `justify-between` |
| `.justify-content-around` | `justify-around` |
| `.justify-content-evenly` | `justify-evenly` |
| `.align-items-start` | `items-start` |
| `.align-items-center` | `items-center` |
| `.align-items-end` | `items-end` |
| `.align-items-stretch` | `items-stretch` |
| `.flex-wrap` | `flex-wrap` |
| `.flex-nowrap` | `flex-nowrap` |
| `.flex-grow-1` | `flex-grow` |
| `.flex-shrink-1` | `flex-shrink` |

### Position

| Bootstrap | Tailwind |
|-----------|----------|
| `.position-static` | `static` |
| `.position-relative` | `relative` |
| `.position-absolute` | `absolute` |
| `.position-fixed` | `fixed` |
| `.position-sticky` | `sticky` |
| `.top-0` | `top-0` |
| `.bottom-0` | `bottom-0` |
| `.start-0` | `left-0` |
| `.end-0` | `right-0` |
| `.translate-middle` | `transform -translate-x-1/2 -translate-y-1/2` |

### Sizing

| Bootstrap | Tailwind |
|-----------|----------|
| `.w-25` | `w-1/4` |
| `.w-50` | `w-1/2` |
| `.w-75` | `w-3/4` |
| `.w-100` | `w-full` |
| `.w-auto` | `w-auto` |
| `.h-25` | `h-1/4` |
| `.h-50` | `h-1/2` |
| `.h-75` | `h-3/4` |
| `.h-100` | `h-full` |
| `.h-auto` | `h-auto` |
| `.mw-100` | `max-w-full` |
| `.mh-100` | `max-h-full` |
| `.min-vw-100` | `min-w-screen` |
| `.min-vh-100` | `min-h-screen` |
| `.vw-100` | `w-screen` |
| `.vh-100` | `h-screen` |

### Borders

| Bootstrap | Tailwind |
|-----------|----------|
| `.border` | `border` |
| `.border-0` | `border-0` |
| `.border-top` | `border-t` |
| `.border-bottom` | `border-b` |
| `.border-start` | `border-l` |
| `.border-end` | `border-r` |
| `.border-1` | `border` |
| `.border-2` | `border-2` |
| `.border-3` | `border-4` |
| `.border-4` | `border-4` |
| `.border-5` | `border-8` |
| `.rounded` | `rounded` |
| `.rounded-0` | `rounded-none` |
| `.rounded-1` | `rounded-sm` |
| `.rounded-2` | `rounded` |
| `.rounded-3` | `rounded-lg` |
| `.rounded-circle` | `rounded-full` |
| `.rounded-pill` | `rounded-full px-4` |

### Custom Theme Configuration

Add to `tailwind.config.js` or `globals.css`:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'trucker-deep-sea-blue': '#1a365d',
        'trucker-sunset-orange': '#ed8936',
        'trucker-cloud-white': '#f7fafc',
        'trucker-gray': '#718096',
        'trucker-gray-2': '#a0aec0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
}
```

## Trucker-Specific Patterns

### Container Pattern
```html
<!-- Old -->
<div class="trucker__container">
  <div class="trucker__container-inside">

<!-- New -->
<div className="container mx-auto px-4">
  <div className="max-w-7xl mx-auto">
```

### Section Pattern
```html
<!-- Old -->
<section class="trucker__hero-area trucker__pt-190 trucker__pb-90">

<!-- New -->
<section className="pt-48 pb-24 bg-gradient-to-b from-blue-900 to-blue-800">
```

### Typography Pattern
```html
<!-- Old -->
<h2 class="trucker__fs-45 trucker__fw-700 trucker__deep-sea-blue">

<!-- New -->
<h2 className="text-5xl font-bold text-[--trucker-deep-sea-blue]">
```

### Button Pattern
```html
<!-- Old -->
<a href="#" class="trucker__btn-style-1 trucker__fs-16 trucker__fw-600">
  Button Text <i class="fa-light fa-arrow-up-right"></i>
</a>

<!-- New -->
<Link 
  href="#" 
  className="inline-flex items-center gap-2 px-8 py-4 bg-[--trucker-sunset-orange] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
>
  Button Text <ArrowUpRight className="w-4 h-4" />
</Link>
```
