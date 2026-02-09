# Blog UI Design Specification

## Design Philosophy
Modern, clean, and easy-to-read blog that seamlessly integrates with the existing Alchemify trucker theme while enhancing readability for long-form content.

---

## Color Scheme (Matching Trucker Theme)

### Primary Colors
- **Deep Sea Blue** (`#1a365d`): Headers, category badges, links hover
- **Sunset Orange** (`#ed8936`): CTAs, accents, reading progress bar

### Text Colors
- **Headings**: `#1a365d` (Deep Sea Blue)
- **Body Text**: `#374151` (Gray-700)
- **Secondary/Meta**: `#6b7280` (Gray-500)
- **Links**: `#ed8936` (Sunset Orange)

### Background Colors
- **Page Background**: `#ffffff`
- **Card Background**: `#ffffff`
- **Code Blocks**: `#1f2937` (Gray-900)
- **Blockquotes**: `#f9fafb` (Gray-50) with orange left border

---

## Blog Listing Page Layout

### Structure
```
[Hero Section - Deep Blue Background]
  Title: "Our Blog"
  Subtitle: "Insights, tutorials, and news"

[Main Content Area]
  [Sidebar - 25% width]
    Categories Navigation
    - All Posts (count)
    - Technology (count)
    - Tutorials (count)
    - News (count)

  [Blog Grid - 75% width]
    [Blog Card 1] [Blog Card 2] [Blog Card 3]
    [Blog Card 4] [Blog Card 5] [Blog Card 6]
```

### Hero Section
- **Background**: Deep Sea Blue (`#1a365d`)
- **Height**: 200px
- **Content**: 
  - Title: 48px bold white
  - Subtitle: 20px white/80 opacity
- **Breadcrumb**: Home > Blog (small, white/60)

### Category Sidebar
- **Position**: Sticky (follows scroll)
- **Width**: 280px
- **Style**:
  - Clean list with counts
  - Active category: Blue background, white text
  - Hover: Light gray background
  - Smooth transitions

### Blog Card Design
```
+------------------+
|  [Featured Image] |  200px height
|                   |
+------------------+
| [CAT] Jan 15, 2024|  Badge + Date
+------------------+
| Post Title Here   |  20px bold blue
| That Can Wrap...  |
+------------------+
| Brief description |  14px gray
| of the post...    |
+------------------+
| By Author • 5 min |  14px gray meta
+------------------+
```

**Card Specs**:
- Border radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Hover shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Hover transform: `translateY(-2px)`
- Image: Object-fit cover, subtle zoom on hover

---

## Individual Blog Post Page Layout

### Structure
```
[Reading Progress Bar]
  Orange bar at very top of page

[Article Container - max-width 800px, centered]
  [Header]
    Category Badge
    Title (H1)
    Description/Subtitle
    Author Bar (Avatar, Name, Date, Read Time)
    Featured Image (full width, 400px height)

  [Article Content]
    Markdown rendered with custom components:
    - H2, H3 with blue color
    - Body text with good line height (1.75)
    - Code blocks with dark background
    - Blockquotes with orange left border
    - Links in orange
    - Lists with proper spacing

  [Tags]
    Row of tag pills at bottom

  [Related Posts Section]
    3-column grid of related article cards
```

### Reading Progress Bar
- **Position**: Fixed top of viewport
- **Height**: 3px
- **Color**: Sunset Orange
- **Behavior**: Fills as user scrolls

### Article Header
- **Category Badge**: Small pill, uppercase, blue background
- **Title**: 40-48px, Deep Sea Blue, bold
- **Description**: 18px, gray-600, max 2 lines
- **Author Bar**:
  - Avatar: 48px circle
  - Author name: 16px semibold
  - Date + read time: 14px gray
  - Separator: Small dot
- **Featured Image**: Full width, 16:9 aspect ratio, rounded corners

### Article Content Typography
```
H2: 28px, Deep Sea Blue, bold, margin-top 48px, margin-bottom 24px
H3: 22px, Deep Sea Blue, bold, margin-top 32px, margin-bottom 16px
Body: 18px, Gray-700, line-height 1.75, margin-bottom 24px
Links: Sunset Orange, underline on hover
Lists: 18px, proper bullet points, spacing between items
Blockquotes: Italic, gray-600, orange left border 4px, light gray bg
Code (inline): Monospace, gray bg, rounded, 14px
Code (blocks): Dark bg (#1f2937), white text, rounded, 16px, padding 24px
Images: Full width, rounded corners, shadow
```

### Tags Section
```
Tags: [Next.js] [React] [Tutorial]
```
- Pill-shaped badges
- Gray background
- 14px font
- Hover: Light blue background

### Related Posts
- **Section Title**: "Related Articles" (24px, Deep Sea Blue)
- **Layout**: 3-column grid
- **Cards**: Simplified version (no image, just title + description + read more link)
- **Style**: Subtle hover effect

---

## Responsive Breakpoints

### Desktop (1200px+)
- Sidebar visible
- 3-column blog grid
- Article: 800px max-width centered

### Tablet (768px - 1199px)
- Sidebar collapses to top dropdown or moves below content
- 2-column blog grid
- Article: Full width with padding

### Mobile (< 768px)
- Single column everything
- Sidebar becomes horizontal scroll or accordion
- Cards stack vertically
- Article: Full width, comfortable padding (20px)
- Typography scales down slightly

---

## Interactive Elements

### Hover Effects
1. **Blog Cards**: 
   - Lift up 2px
   - Shadow increases
   - Image zooms slightly (scale 1.05)
   - Title color changes to orange
   - Duration: 200ms ease

2. **Category Links**:
   - Background color transition
   - Duration: 150ms

3. **Read More Links**:
   - Arrow slides right 4px
   - Color stays orange
   - Duration: 200ms

4. **Article Links**:
   - Underline appears
   - Duration: 150ms

### Focus States (Accessibility)
- All interactive elements: 2px orange outline
- Offset: 2px
- Visible on keyboard navigation

---

## Empty States

### No Posts in Category
```
[Icon: Document or Search]
Text: "No posts found in this category yet"
Text: "Check back soon for new content!"
```
- Centered
- Gray icon
- Gray-500 text
- Generous padding (80px)

### Blog Loading (if using client-side filtering)
- Skeleton cards (3)
- Pulse animation
- Maintains layout

---

## Animation Specifications

### Page Load
- Hero: Fade in from bottom (y: 20 → 0, opacity: 0 → 1, 500ms)
- Cards: Stagger fade in (delay 100ms each)

### Scroll Animations
- Section headers: Fade in when entering viewport
- Cards: Subtle parallax (optional, can skip for simplicity)

### Hover Transitions
- All: 200ms ease or ease-out
- Cards: transform + box-shadow
- Buttons: background-color
- Links: color + text-decoration

---

## Component Style Guide

### BlogCard
```tsx
<Card className="group overflow-hidden rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
  <div className="relative h-48 overflow-hidden">
    <Image className="object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  <CardHeader className="pb-2">
    <div className="flex items-center gap-2 mb-2">
      <Badge className="bg-[--trucker-deep-sea-blue] text-white">{category}</Badge>
      <span className="text-xs text-gray-500">{formattedDate}</span>
    </div>
    <h3 className="text-xl font-bold text-[--trucker-deep-sea-blue] group-hover:text-[--trucker-sunset-orange] transition-colors line-clamp-2">
      {title}
    </h3>
  </CardHeader>
  <CardContent>
    <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
    <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
      <span>By {author}</span>
      <span>•</span>
      <span>{readingTime} min read</span>
    </div>
  </CardContent>
</Card>
```

### CategoryNav
```tsx
<div className="space-y-1">
  <h3 className="font-semibold text-lg mb-4 text-[--trucker-deep-sea-blue]">Categories</h3>
  {categories.map(cat => (
    <Link 
      key={cat.slug}
      className={cn(
        "flex justify-between items-center px-4 py-2 rounded-lg text-sm transition-colors duration-150",
        isActive 
          ? "bg-[--trucker-deep-sea-blue] text-white" 
          : "hover:bg-gray-100 text-gray-700"
      )}
    >
      <span>{cat.name}</span>
      <span className={isActive ? "text-white/80" : "text-gray-500 text-xs"}>
        {cat.count}
      </span>
    </Link>
  ))}
</div>
```

### BlogHeader
```tsx
<header className="mb-8">
  <Badge className="mb-4 bg-[--trucker-deep-sea-blue]">{post.category}</Badge>
  <h1 className="text-4xl md:text-5xl font-bold text-[--trucker-deep-sea-blue] mb-4 leading-tight">
    {post.title}
  </h1>
  <p className="text-xl text-gray-600 mb-6">{post.description}</p>
  
  <div className="flex items-center gap-4 py-4 border-y border-gray-200">
    <Avatar className="h-12 w-12">
      <AvatarImage src={authorImage} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
    <div>
      <p className="font-semibold text-gray-900">{post.author}</p>
      <p className="text-sm text-gray-500">
        {formattedDate} • {post.readingTime} min read
      </p>
    </div>
  </div>
</header>
```

---

## Implementation Checklist

### Visual Polish
- [ ] All colors match trucker theme
- [ ] Typography is readable (18px body, good line height)
- [ ] Adequate whitespace (not cramped)
- [ ] Consistent spacing (4px, 8px, 16px, 24px, 32px, 48px scale)
- [ ] Smooth hover transitions
- [ ] Mobile responsive

### UX Enhancements
- [ ] Reading progress bar
- [ ] Sticky category navigation
- [ ] Clear visual hierarchy
- [ ] Prominent CTAs (Read more links)
- [ ] Easy category switching
- [ ] Related posts for content discovery

### Content Readability
- [ ] Good contrast ratios (4.5:1 minimum)
- [ ] Comfortable line length (60-75 characters)
- [ ] Adequate line spacing (1.75)
- [ ] Clear distinction between headings and body
- [ ] Code blocks are readable (dark background, syntax highlighting)

---

## Files Reference

**Layout/Structure**:
- `app/blog/page.tsx` - Listing page
- `app/blog/[category]/[slug]/page.tsx` - Article page
- `app/blog/layout.tsx` - Blog layout wrapper

**Components**:
- `app/components/blog/BlogCard.tsx` - Card component
- `app/components/blog/BlogGrid.tsx` - Grid layout
- `app/components/blog/CategoryNav.tsx` - Sidebar navigation
- `app/components/blog/BlogHeader.tsx` - Article header
- `app/components/blog/BlogContent.tsx` - Markdown renderer
- `app/components/blog/RelatedPosts.tsx` - Related articles
- `app/components/blog/ReadingProgress.tsx` - Progress bar

**Utilities**:
- `lib/blog.ts` - Blog data fetching
- `types/blog.ts` - TypeScript types
- `content/blog/` - Markdown content directory

---

## Quick Tips for Great Blog UI

1. **Whitespace is your friend** - Don't cram content
2. **Typography matters** - Use a clean, readable font (Inter or similar)
3. **Images add life** - Every post should have a featured image
4. **Mobile first** - Most blog reading happens on mobile
5. **Fast load times** - Optimize images, use next/image
6. **Clear hierarchy** - H1 → H2 → H3 should be obvious
7. **Code blocks need care** - Dark theme, syntax highlighting, copy button
8. **Reading time helps** - Shows commitment level upfront
9. **Related posts keep users** - Don't let them hit dead ends
10. **Search is essential** - Add fuse.js or similar if you have 10+ posts
