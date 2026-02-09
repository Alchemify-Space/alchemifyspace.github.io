# Detailed Task Breakdown: HTML to Next.js Migration

## Project: Alchemify.Space Website Migration
**Source**: Static HTML/CSS/jQuery website  
**Target**: Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui  
**Total HTML Pages**: 14 pages

---

## Phase 0: Project Initialization & Setup
**Objective**: Initialize Next.js project with all required dependencies and tooling

### Task 0.1: Initialize Next.js 15 Project
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **0.1.1**: Create Next.js 15 project with TypeScript
  - Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm`
  - Verify installation succeeds
  - Check Node.js version compatibility (18.17+ required)

- [ ] **0.1.2**: Configure project structure
  - Remove default Next.js template files (page.tsx, layout.tsx content)
  - Create directory structure:
    ```
    app/
    ├── (marketing)/
    ├── components/
    │   └── ui/
    ├── sections/
    ├── hooks/
    ├── lib/
    ├── types/
    └── data/
    public/
    ├── images/
    ├── fonts/
    └── favicon.ico
    ```

- [ ] **0.1.3**: Install and configure shadcn/ui
  - Run: `npx shadcn@latest init`
  - Select style: New York
  - Select base color: Slate
  - Configure CSS variables: Yes
  - Tailwind prefix: (none)

- [ ] **0.1.4**: Install required shadcn components
  - Run component installations:
    ```bash
    npx shadcn@latest add button
    npx shadcn@latest add card
    npx shadcn@latest add dialog
    npx shadcn@latest add dropdown-menu
    npx shadcn@latest add form
    npx shadcn@latest add input
    npx shadcn@latest add navigation-menu
    npx shadcn@latest add sheet
    npx shadcn@latest add tabs
    npx shadcn@latest add textarea
    npx shadcn@latest add badge
    npx shadcn@latest add separator
    npx shadcn@latest add skeleton
    npx shadcn@latest add sonner
    ```

### Task 0.2: Install Additional Dependencies
**Status**: 🔴 Not Started  
**Estimated Time**: 15 minutes

#### Subtasks:
- [ ] **0.2.1**: Install animation libraries
  ```bash
  npm install framer-motion
  npm install gsap @gsap/react
  ```

- [ ] **0.2.2**: Install icon library
  ```bash
  npm install lucide-react
  ```

- [ ] **0.2.3**: Install form handling
  ```bash
  npm install react-hook-form @hookform/resolvers zod
  ```

- [ ] **0.2.4**: Install utility libraries
  ```bash
  npm install clsx tailwind-merge
  npm install embla-carousel-react embla-carousel-autoplay
  ```

- [ ] **0.2.5**: Install Swiper (if keeping original carousel)
  ```bash
  npm install swiper
  ```

### Task 0.3: Configure Development Tools
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **0.3.1**: Update next.config.js for static export
  ```javascript
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  }
  
  module.exports = nextConfig
  ```

- [ ] **0.3.2**: Configure TypeScript
  - Verify tsconfig.json paths are correct
  - Add strict mode settings
  - Configure module resolution

- [ ] **0.3.3**: Update package.json scripts
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint",
      "typecheck": "npx tsc --noEmit"
    }
  }
  ```

### Task 0.4: Asset Migration
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **0.4.1**: Create public directory structure
  ```
  public/
  ├── images/
  │   ├── home-1/
  │   ├── about/
  │   ├── services/
  │   ├── portfolio/
  │   ├── team/
  │   ├── blog/
  │   └── logo/
  └── fonts/
  ```

- [ ] **0.4.2**: Copy images from assets
  - Copy all images from `assets/images/` to `public/images/`
  - Maintain folder structure
  - Verify all images copied successfully
  - Check for any missing images

- [ ] **0.4.3**: Copy fonts from assets
  - Copy font files from `assets/fonts/` to `public/fonts/`
  - Ensure font licenses are valid

- [ ] **0.4.4**: Copy favicon
  - Copy `assets/images/favicon.png` to `public/favicon.png`

---

## Phase 1: Design System & Theme Configuration
**Objective**: Set up the complete design system with Tailwind and CSS variables

### Task 1.1: Configure Tailwind CSS Theme
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **1.1.1**: Update tailwind.config.ts with Alchemify theme
  - Add custom colors from original CSS
  - Configure font families
  - Set up custom breakpoints
  - Add container configuration
  - Configure animation timings

- [ ] **1.1.2**: Add custom color palette
  ```typescript
  colors: {
    trucker: {
      'deep-sea-blue': '#1a365d',
      'sunset-orange': '#ed8936',
      'cloud-white': '#f7fafc',
      'gray': '#718096',
      'gray-2': '#a0aec0',
    }
  }
  ```

- [ ] **1.1.3**: Configure font sizes mapping
  ```typescript
  fontSize: {
    'trucker-14': ['0.875rem', { lineHeight: '1.25rem' }],
    'trucker-16': ['1rem', { lineHeight: '1.5rem' }],
    'trucker-18': ['1.125rem', { lineHeight: '1.75rem' }],
    'trucker-24': ['1.5rem', { lineHeight: '2rem' }],
    'trucker-30': ['1.875rem', { lineHeight: '2.25rem' }],
    'trucker-35': ['2.1875rem', { lineHeight: '2.5rem' }],
    'trucker-45': ['2.8125rem', { lineHeight: '1.2' }],
    'trucker-48': ['3rem', { lineHeight: '1.2' }],
  }
  ```

### Task 1.2: Create Global CSS
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **1.2.1**: Update globals.css with design tokens
  - Add CSS custom properties for all theme colors
  - Configure font imports (Inter, or custom fonts)
  - Add base styles (reset, typography)
  - Add custom utility classes

- [ ] **1.2.2**: Add preloader styles
  - Copy preloader CSS from original
  - Convert to Tailwind-compatible format
  - Add animation keyframes

- [ ] **1.2.3**: Add responsive utilities
  - Create responsive container classes
  - Add section padding utilities
  - Configure spacing scale

### Task 1.3: Update shadcn/ui Theme
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **1.3.1**: Customize button variants
  - Add 'trucker' variant (orange background)
  - Add 'trucker-outline' variant
  - Add 'trucker-ghost' variant
  - Update default sizes

- [ ] **1.3.2**: Customize card component
  - Add hover effects
  - Update border radius
  - Add shadow variants

- [ ] **1.3.3**: Update input styles
  - Match original form styling
  - Add focus states
  - Configure error states

---

## Phase 2: Core Layout Components
**Objective**: Build the fundamental layout components used across all pages

### Task 2.1: Create Root Layout
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **2.1.1**: Create app/layout.tsx
  - Import Inter font from next/font/google
  - Configure metadata (title template, description)
  - Add language attribute
  - Configure viewport settings
  - Add global providers (Toaster, etc.)

- [ ] **2.1.2**: Set up metadata structure
  ```typescript
  export const metadata: Metadata = {
    title: {
      template: '%s | Alchemify.Space',
      default: 'Alchemify.Space - Transforming Ideas into Reality',
    },
    description: '...',
    keywords: [...],
    authors: [...],
    openGraph: {...},
  }
  ```

### Task 2.2: Create Preloader Component
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **2.2.1**: Analyze original preloader
  - Study preloader HTML/CSS/JS
  - Understand animation sequence
  - Identify timing parameters

- [ ] **2.2.2**: Create Preloader.tsx component
  - Build loader HTML structure
  - Implement circle loader animation with Framer Motion
  - Add logo fade-in animation
  - Configure timing (2-3 seconds)

- [ ] **2.2.3**: Add loading state management
  - Create usePreloader hook
  - Detect when page is ready
  - Handle animation completion
  - Remove from DOM after animation

- [ ] **2.2.4**: Test preloader
  - Verify animation matches original
  - Test on slow connections
  - Ensure no flash of unstyled content

### Task 2.3: Create Header Component
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **2.3.1**: Analyze original header
  - Study header HTML structure
  - Identify topbar (email, social links)
  - Document navigation menu items
  - Note mobile menu behavior
  - Identify CTA button

- [ ] **2.3.2**: Create Header.tsx
  - Build topbar section
  - Add logo with Link to home
  - Create navigation menu with Next.js Link
  - Implement mobile menu toggle
  - Add CTA button

- [ ] **2.3.3**: Create TopBar component
  - Add email link
  - Add social media icons (YouTube, LinkedIn, Twitter)
  - Style with original theme colors

- [ ] **2.3.4**: Create Navigation component
  - Map navigation items from original
  - Add active state handling
  - Implement hover effects
  - Add dropdown support (if needed)

- [ ] **2.3.5**: Create MobileMenu component
  - Use shadcn/ui Sheet component
  - Add slide-in animation
  - Implement mobile navigation
  - Add close button
  - Ensure accessibility (ARIA labels)

- [ ] **2.3.6**: Add sticky header behavior
  - Create useScrollPosition hook
  - Add CSS for sticky positioning
  - Implement background change on scroll
  - Add transition animations

### Task 2.4: Create Footer Component
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **2.4.1**: Analyze original footer
  - Study footer HTML structure
  - Identify columns (About, Links, Services, Contact)
  - Note copyright section
  - Document social links

- [ ] **2.4.2**: Create Footer.tsx
  - Build footer container
  - Create footer grid layout
  - Add logo and description
  - Add quick links column
  - Add services column
  - Add contact info column

- [ ] **2.4.3**: Create FooterColumn component
  - Reusable column component
  - Title with styling
  - Link list with proper navigation

- [ ] **2.4.4**: Add copyright bar
  - Add copyright text
  - Add privacy policy link
  - Add terms of service link
  - Style with original theme

### Task 2.5: Create ScrollToTop Component
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **2.5.1**: Analyze original scroll-to-top
  - Study button HTML/CSS
  - Understand show/hide behavior
  - Note animation

- [ ] **2.5.2**: Create ScrollToTop.tsx
  - Use useScrollPosition hook
  - Add show/hide logic (show after 300px scroll)
  - Implement smooth scroll to top
  - Add hover effects
  - Style with original theme colors

### Task 2.6: Create Marketing Layout
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **2.6.1**: Create app/(marketing)/layout.tsx
  - Import Header component
  - Import Footer component
  - Import ScrollToTop component
  - Wrap children with layout structure
  - Add Preloader if global

- [ ] **2.6.2**: Test layout integration
  - Verify Header renders correctly
  - Verify Footer renders correctly
  - Check all children render in main
  - Test responsive behavior

---

## Phase 3: Shared UI Components
**Objective**: Build reusable UI components that appear across multiple pages

### Task 3.1: Create Section Component
**Status**: 🔴 Not Started  
**Estimated Time**: 15 minutes

#### Subtasks:
- [ ] **3.1.1**: Create Section.tsx
  - Build wrapper component
  - Add container class
  - Support id attribute (for anchor links)
  - Add padding variants (py-16, py-24)
  - Support background color variants

- [ ] **3.1.2**: Add SectionHeader component
  - Title with styling options
  - Subtitle/description support
  - Centered or left-aligned options
  - Decorative elements (if any)

### Task 3.2: Create Breadcrumb Component
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **3.2.1**: Analyze original breadcrumbs
  - Study breadcrumb HTML structure
  - Note separator styling
  - Identify active page styling

- [ ] **3.2.2**: Create Breadcrumb.tsx
  - Build breadcrumb container
  - Create BreadcrumbItem component
  - Add ChevronRight separator
  - Style active vs inactive items
  - Support responsive behavior

- [ ] **3.2.3**: Add Schema.org structured data
  - Implement JSON-LD breadcrumb schema
  - Add proper itemListElement structure

### Task 3.3: Create Hero Section Component
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **3.3.1**: Create HeroSection.tsx
  - Build hero container
  - Add background image support
  - Add overlay options
  - Support breadcrumb integration
  - Add title and subtitle slots

- [ ] **3.3.2**: Add background options
  - Solid color background
  - Gradient background
  - Image background with overlay
  - Video background (if needed)

### Task 3.4: Create Button Components
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **3.4.1**: Extend shadcn Button
  - Add trucker variant styles
  - Add icon support (left/right)
  - Add loading state
  - Ensure proper Link integration

- [ ] **3.4.2**: Create IconButton component
  - Circular button style
  - Support for various icons
  - Size variants

### Task 3.5: Create Card Components
**Status**: 🔴 Not Started  
**Estimated Time**: 40 minutes

#### Subtasks:
- [ ] **3.5.1**: Create ServiceCard component
  - Icon/image area
  - Title and description
  - Link/CTA button
  - Hover effects
  - Animation on scroll

- [ ] **3.5.2**: Create TeamCard component
  - Image with hover overlay
  - Name and role
  - Social links
  - Link to detail page

- [ ] **3.5.3**: Create PortfolioCard component
  - Image with overlay
  - Title and category
  - Link to detail
  - Hover zoom effect

- [ ] **3.5.4**: Create BlogCard component
  - Featured image
  - Category badge
  - Title and excerpt
  - Date and author
  - Read more link

- [ ] **3.5.5**: Create TestimonialCard component
  - Quote styling
  - Author info
  - Rating stars
  - Avatar image

- [ ] **3.5.6**: Create PricingCard component
  - Plan name and price
  - Feature list
  - CTA button
  - Highlighted/recommended variant

### Task 3.6: Create Form Components
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **3.6.1**: Create ContactForm component
  - Form fields (name, email, subject, message)
  - Validation with Zod schema
  - Error messages
  - Submit button with loading state
  - Success message

- [ ] **3.6.2**: Create NewsletterForm component
  - Email input
  - Submit button
  - Success state
  - Validation

- [ ] **3.6.3**: Create FormInput component
  - Label support
  - Error state styling
  - Icon support (left/right)
  - Various input types

- [ ] **3.6.4**: Create FormTextarea component
  - Auto-resize option
  - Character counter
  - Error handling

### Task 3.7: Create Carousel Components
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **3.7.1**: Choose carousel library
  - Option A: Use Swiper React (maintain original behavior)
  - Option B: Use Embla Carousel (lighter weight)
  - Evaluate and decide

- [ ] **3.7.2**: Create TestimonialCarousel
  - Swiper/Embla configuration
  - TestimonialCard integration
  - Navigation arrows
  - Pagination dots
  - Autoplay settings

- [ ] **3.7.3**: Create PortfolioCarousel
  - Grid or slider layout
  - PortfolioCard integration
  - Navigation

- [ ] **3.7.4**: Create TeamCarousel
  - TeamCard integration
  - Responsive breakpoints

- [ ] **3.7.5**: Create ClientLogoCarousel
  - Logo grid/slider
  - Grayscale to color hover effect

---

## Phase 4: Utility Components & Hooks
**Objective**: Create shared utilities, hooks, and helper components

### Task 4.1: Create Custom Hooks
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **4.1.1**: Create useScrollPosition hook
  - Track window scroll Y position
  - Debounce for performance
  - Return scroll position value
  - Clean up event listeners

- [ ] **4.1.2**: Create useMediaQuery hook
  - Accept media query string
  - Return boolean match
  - Handle SSR (default value)
  - Clean up listeners

- [ ] **4.1.3**: Create useInView hook (if not using Framer Motion)
  - Intersection Observer implementation
  - Trigger once or multiple times
  - Threshold configuration

- [ ] **4.1.4**: Create useLocalStorage hook
  - Get/set values
  - JSON serialization
  - SSR safety
  - Error handling

- [ ] **4.1.5**: Create useCounterAnimation hook
  - Animate number counting
  - Duration configuration
  - Easing options
  - Trigger on view

### Task 4.2: Create Animation Components
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **4.2.1**: Create FadeIn component (Framer Motion)
  - Fade in animation
  - Direction variants (up, down, left, right)
  - Duration and delay props
  - whileInView trigger

- [ ] **4.2.2**: Create StaggerContainer component
  - Parent container for staggered children
  - Configurable stagger delay
  - whileInView trigger

- [ ] **4.2.3**: Create AnimatedCounter component
  - Number counting animation
  - Use useCounterAnimation hook
  - Formatting options
  - Suffix/prefix support

- [ ] **4.2.4**: Create ParallaxWrapper component
  - Parallax scroll effect
  - Speed configuration
  - Optional scale effect

### Task 4.3: Create Data Types
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **4.3.1**: Create types/Service.ts
  ```typescript
  export interface Service {
    id: string
    slug: string
    title: string
    description: string
    icon: string
    image: string
    features: string[]
    content?: string
  }
  ```

- [ ] **4.3.2**: Create types/Team.ts
  ```typescript
  export interface TeamMember {
    id: string
    name: string
    role: string
    image: string
    bio?: string
    social: {
      linkedin?: string
      twitter?: string
      github?: string
    }
  }
  ```

- [ ] **4.3.3**: Create types/Blog.ts
  ```typescript
  export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    category: string
    image: string
    tags: string[]
  }
  ```

- [ ] **4.3.4**: Create types/Portfolio.ts
  ```typescript
  export interface PortfolioItem {
    id: string
    slug: string
    title: string
    category: string
    image: string
    description: string
    technologies: string[]
    link?: string
  }
  ```

- [ ] **4.3.5**: Create types/index.ts
  - Export all types
  - Create shared utility types

### Task 4.4: Create Static Data Files
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **4.4.1**: Extract services data from HTML
  - Read service.html
  - Extract all service items
  - Create data/services.ts

- [ ] **4.4.2**: Extract team data from HTML
  - Read team.html
  - Extract all team members
  - Create data/team.ts

- [ ] **4.4.3**: Extract portfolio data from HTML
  - Read portfolio.html
  - Extract all portfolio items
  - Create data/portfolio.ts

- [ ] **4.4.4**: Extract blog data from HTML
  - Read blog-standard.html
  - Extract all blog posts
  - Create data/blog.ts

- [ ] **4.4.5**: Create data/navigation.ts
  - Define navigation structure
  - Include all pages
  - Add any dropdown menus

### Task 4.5: Create Utility Functions
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **4.5.1**: Update lib/utils.ts
  - Ensure cn() function from shadcn is present
  - Add formatDate utility
  - Add formatPrice utility
  - Add slugify utility

- [ ] **4.5.2**: Create lib/formatters.ts
  - Date formatting functions
  - Number formatting
  - String utilities

---

## Phase 5: Migrate Home Page (home-index.html)
**Objective**: Convert the home page with all its sections

### Task 5.1: Analyze Home Page Structure
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **5.1.1**: Document all sections
  - Hero section
  - Services section
  - About section
  - Features/Why Choose Us
  - Portfolio/Projects
  - Team section
  - Testimonials
  - Blog/News section
  - CTA section

- [ ] **5.1.2**: Identify animations
  - List all WOW.js animations
  - Note trigger elements
  - Document timing

- [ ] **5.1.3**: Note interactive elements
  - Carousels
  - Counters
  - Hover effects

### Task 5.2: Create Home Page Sections
**Status**: 🔴 Not Started  
**Estimated Time**: 120 minutes

#### Subtasks:
- [ ] **5.2.1**: Create HeroSection
  - Main hero with title
  - Subtitle/description
  - CTA buttons
  - Background image/gradient
  - Animations

- [ ] **5.2.2**: Create ServicesSection
  - Section header
  - Service cards grid
  - 3-4 service highlights
  - Link to services page
  - Animation on scroll

- [ ] **5.2.3**: Create AboutSection
  - Two-column layout
  - Image
  - Text content
  - Stats/counters
  - CTA button

- [ ] **5.2.4**: Create FeaturesSection
  - Feature list
  - Icons
  - Why choose us content
  - Grid layout

- [ ] **5.2.5**: Create PortfolioSection
  - Portfolio cards/grid
  - Filter by category (if exists)
  - View all link
  - Hover effects

- [ ] **5.2.6**: Create TeamSection
  - Team cards
  - Carousel or grid
  - View all team link

- [ ] **5.2.7**: Create TestimonialsSection
  - Testimonial carousel
  - Auto-play
  - Navigation

- [ ] **5.2.8**: Create BlogSection
  - Latest posts
  - Blog cards
  - View all link

- [ ] **5.2.9**: Create CTASection
  - Call-to-action banner
  - Title and description
  - CTA button
  - Background styling

### Task 5.3: Compose Home Page
**Status**: 🔴 Not Started  
**Estimated Time**: 20 minutes

#### Subtasks:
- [ ] **5.3.1**: Create app/page.tsx
  - Import all sections
  - Compose in order
  - Add metadata
  - Configure Preloader

- [ ] **5.3.2**: Add page metadata
  - Title and description
  - OpenGraph tags
  - Keywords

### Task 5.4: Test Home Page
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **5.4.1**: Visual comparison
  - Side-by-side with original
  - Check all sections present
  - Verify styling matches

- [ ] **5.4.2**: Functionality testing
  - All links work
  - Carousels function
  - Animations play
  - Responsive behavior

- [ ] **5.4.3**: Performance check
  - Image optimization
  - Bundle size
  - Lighthouse score

---

## Phase 6: Migrate About Page (about.html)
**Objective**: Convert the about page

### Task 6.1: Analyze About Page
**Status**: 🔴 Not Started  
**Estimated Time**: 15 minutes

#### Subtasks:
- [ ] **6.1.1**: Document sections
  - Breadcrumb hero
  - About content
  - Mission/Vision
  - Values
  - Team preview
  - CTA

### Task 6.2: Create About Page Sections
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **6.2.1**: Create AboutHeroSection
  - Breadcrumb
  - Page title
  - Background styling

- [ ] **6.2.2**: Create AboutContentSection
  - Company story
  - Image
  - Text content

- [ ] **6.2.3**: Create MissionVisionSection
  - Mission statement
  - Vision statement
  - Icons/styling

- [ ] **6.2.4**: Create ValuesSection
  - Core values list
  - Value cards
  - Icons

### Task 6.3: Compose About Page
**Status**: 🔴 Not Started  
**Estimated Time**: 15 minutes

#### Subtasks:
- [ ] **6.3.1**: Create app/about/page.tsx
  - Import sections
  - Compose page
  - Add metadata

---

## Phase 7: Migrate Services Pages
**Objective**: Convert services list and service detail pages

### Task 7.1: Migrate Services List Page (service.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **7.1.1**: Create ServicesHeroSection
  - Breadcrumb
  - Page title
  - Description

- [ ] **7.1.2**: Create ServicesListSection
  - Grid of service cards
  - Use ServiceCard component
  - Link to detail pages

- [ ] **7.1.3**: Create app/service/page.tsx
  - Compose sections
  - Add metadata

### Task 7.2: Migrate Service Detail Page (service-details.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **7.2.1**: Create dynamic route
  - Create app/services/[slug]/page.tsx
  - Implement generateStaticParams

- [ ] **7.2.2**: Create ServiceHeroSection
  - Service-specific hero
  - Breadcrumb with service name

- [ ] **7.2.3**: Create ServiceContentSection
  - Service description
  - Features list
  - Images
  - CTA

- [ ] **7.2.4**: Create RelatedServicesSection
  - Show other services
  - Exclude current service

- [ ] **7.2.5**: Create generateMetadata
  - Dynamic title based on service
  - Description from service data

---

## Phase 8: Migrate Portfolio Page (portfolio.html)
**Objective**: Convert portfolio page

### Task 8.1: Migrate Portfolio List Page
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **8.1.1**: Create PortfolioHeroSection
  - Breadcrumb
  - Page title

- [ ] **8.1.2**: Create PortfolioGridSection
  - Grid of portfolio items
  - Filter by category (if exists)
  - PortfolioCard integration
  - Pagination or load more

- [ ] **8.1.3**: Create app/portfolio/page.tsx
  - Compose sections
  - Add metadata

### Task 8.2**: Create Portfolio Detail Page (if applicable)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **8.2.1**: Create app/portfolio/[slug]/page.tsx
  - Dynamic route
  - generateStaticParams

- [ ] **8.2.2**: Create PortfolioDetailSection
  - Large image
  - Description
  - Technologies used
  - Link to live site

---

## Phase 9: Migrate Contact Page (contact.html)
**Objective**: Convert contact page with form

### Task 9.1: Migrate Contact Page
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **9.1.1**: Create ContactHeroSection
  - Breadcrumb
  - Page title

- [ ] **9.1.2**: Create ContactInfoSection
  - Contact details (address, phone, email)
  - Map integration (if exists)
  - Social links

- [ ] **9.1.3**: Create ContactFormSection
  - Contact form
  - Form validation
  - Submit handling
  - Success/error states

- [ ] **9.1.4**: Create API endpoint (if needed)
  - app/api/contact/route.ts
  - Form submission handling
  - Email sending (optional)

- [ ] **9.1.5**: Create app/contact/page.tsx
  - Compose sections
  - Add metadata

---

## Phase 10: Migrate Team Pages
**Objective**: Convert team list and team detail pages

### Task 10.1: Migrate Team List Page (team.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **10.1.1**: Create TeamHeroSection
  - Breadcrumb
  - Page title

- [ ] **10.1.2**: Create TeamGridSection
  - Grid of team members
  - TeamCard integration
  - Responsive grid

- [ ] **10.1.3**: Create app/team/page.tsx
  - Compose sections
  - Add metadata

### Task 10.2: Migrate Team Detail Page (team-details.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **10.2.1**: Create dynamic route
  - app/team/[id]/page.tsx
  - generateStaticParams

- [ ] **10.2.2**: Create TeamDetailSection
  - Large photo
  - Name and role
  - Bio
  - Social links
  - Skills/expertise

- [ ] **10.2.3**: Create generateMetadata
  - Dynamic title with member name

---

## Phase 11: Migrate Blog Pages
**Objective**: Convert blog list and blog detail pages

### Task 11.1: Migrate Blog List Page (blog-standard.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **11.1.1**: Create BlogHeroSection
  - Breadcrumb
  - Page title

- [ ] **11.1.2**: Create BlogListSection
  - Grid of blog posts
  - BlogCard integration
  - Sidebar (if exists - categories, recent posts, tags)
  - Pagination

- [ ] **11.1.3**: Create app/blog/page.tsx
  - Compose sections
  - Add metadata

### Task 11.2: Migrate Blog Detail Page (blog-details.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **11.2.1**: Create dynamic route
  - app/blog/[slug]/page.tsx
  - generateStaticParams

- [ ] **11.2.2**: Create BlogArticleSection
  - Featured image
  - Title and meta (date, author, category)
  - Article content
  - Social share buttons
  - Author bio

- [ ] **11.2.3**: Create RelatedPostsSection
  - Show related blog posts
  - Exclude current post

- [ ] **11.2.4**: Create generateMetadata
  - Dynamic title
  - OpenGraph with featured image

---

## Phase 12: Migrate FAQ & Pricing Pages
**Objective**: Convert FAQ and pricing pages

### Task 12.1: Migrate FAQ Page (faq.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **12.1.1**: Create FAQHeroSection
  - Breadcrumb
  - Page title

- [ ] **12.1.2**: Create FAQSection
  - Accordion/collapsible items
  - shadcn Collapsible or custom
  - Categorize questions (if needed)

- [ ] **12.1.3**: Create app/faq/page.tsx
  - Compose sections
  - Add metadata

### Task 12.2: Migrate Pricing Page (pricing.html)
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **12.2.1**: Create PricingHeroSection
  - Breadcrumb
  - Page title

- [ ] **12.2.2**: Create PricingSection
  - Pricing cards
  - Toggle monthly/yearly (if exists)
  - Feature comparisons
  - CTA buttons

- [ ] **12.2.3**: Create app/pricing/page.tsx
  - Compose sections
  - Add metadata

---

## Phase 13: Migrate 404 Page
**Objective**: Convert 404 error page

### Task 13.1: Migrate 404 Page
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **13.1.1**: Create app/not-found.tsx
  - Error message
  - 404 illustration
  - Back to home link
  - Suggested pages

- [ ] **13.1.2**: Style 404 page
  - Match original design
  - Add animations

---

## Phase 14: Testing, Optimization & Polish
**Objective**: Ensure quality and performance

### Task 14.1: Cross-Page Testing
**Status**: 🔴 Not Started  
**Estimated Time**: 90 minutes

#### Subtasks:
- [ ] **14.1.1**: Test all navigation links
  - Header navigation
  - Footer links
  - Internal page links
  - CTA buttons

- [ ] **14.1.2**: Test responsive design
  - Mobile (320px - 480px)
  - Tablet (481px - 768px)
  - Desktop (769px+)
  - Large screens (1200px+)

- [ ] **14.1.3**: Test all forms
  - Contact form validation
  - Form submission
  - Error states
  - Success messages

- [ ] **14.1.4**: Test all carousels
  - Swipe on mobile
  - Navigation arrows
  - Autoplay
  - Responsive slides

### Task 14.2: Performance Optimization
**Status**: 🔴 Not Started  
**Estimated Time**: 60 minutes

#### Subtasks:
- [ ] **14.2.1**: Image optimization
  - Verify all images use next/image
  - Check sizes are appropriate
  - Add priority to above-fold images
  - Use lazy loading for below-fold

- [ ] **14.2.2**: Code splitting
  - Dynamic import heavy components
  - Lazy load below-fold sections
  - Optimize bundle size

- [ ] **14.2.3**: Lighthouse audit
  - Run performance audit
  - Check accessibility score
  - Verify best practices
  - Check SEO score
  - Address any warnings

- [ ] **14.2.4**: Build optimization
  - Run production build
  - Check build output
  - Verify no errors
  - Test static export

### Task 14.3: SEO Optimization
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **14.3.1**: Verify all metadata
  - Check all page titles
  - Verify descriptions
  - Add keywords
  - Check OpenGraph tags

- [ ] **14.3.2**: Add structured data
  - Organization schema
  - Service schema
  - Breadcrumb schema
  - Article schema (for blog)

- [ ] **14.3.3**: Optimize for Core Web Vitals
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)

### Task 14.4: Accessibility Audit
**Status**: 🔴 Not Started  
**Estimated Time**: 45 minutes

#### Subtasks:
- [ ] **14.4.1**: Keyboard navigation
  - Test all interactive elements
  - Verify focus indicators
  - Check tab order

- [ ] **14.4.2**: Screen reader testing
  - Test with VoiceOver or NVDA
  - Verify alt texts
  - Check heading hierarchy
  - Test form labels

- [ ] **14.4.3**: Color contrast
  - Verify all text meets WCAG 4.5:1
  - Check interactive elements
  - Test form validation states

- [ ] **14.4.4**: ARIA labels
  - Add aria-label where needed
  - Verify button labels
  - Check landmark regions

---

## Phase 15: Deployment Preparation
**Objective**: Prepare for production deployment

### Task 15.1: Build Configuration
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **15.1.1**: Final next.config.js check
  - Verify static export settings
  - Check dist directory
  - Verify trailing slashes

- [ ] **15.1.2**: Environment variables
  - Check .env.local for local dev
  - Document required env vars
  - Add .env.example

- [ ] **15.1.3**: Production build
  - Run npm run build
  - Check for errors
  - Verify dist output

### Task 15.2: Pre-Deployment Checklist
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **15.2.1**: Final visual check
  - Compare with original design
  - Verify all sections
  - Check animations

- [ ] **15.2.2**: Functionality verification
  - All links work
  - Forms submit
  - Carousels function
  - Mobile menu works

- [ ] **15.2.3**: Content verification
  - All text copied correctly
  - Images load
  - No placeholder content

### Task 15.3: Deployment
**Status**: 🔴 Not Started  
**Estimated Time**: 30 minutes

#### Subtasks:
- [ ] **15.3.1**: Deploy to hosting
  - Configure hosting (Vercel/Netlify/Cloudflare)
  - Upload dist folder
  - Configure custom domain

- [ ] **15.3.2**: Post-deployment verification
  - Test live site
  - Check all pages
  - Verify SSL certificate
  - Test contact forms

- [ ] **15.3.3**: Update DNS (if needed)
  - Point domain to new hosting
  - Wait for propagation
  - Test www and non-www

---

## Summary Statistics

**Total Phases**: 16  
**Total Tasks**: ~85  
**Total Subtasks**: ~350  

**Estimated Total Time**: 
- Setup & Foundation: 8 hours
- Page Migration: 20 hours
- Testing & Polish: 8 hours
- **Total: ~36 hours**

**Priority Breakdown**:
- High Priority: Phases 0-7, 9, 14-15
- Medium Priority: Phases 8, 10-12
- Low Priority: Phase 13

**Dependencies**:
- Phases 0-4 must be completed before page migration
- Phase 14 (Testing) depends on all pages being migrated
- Phase 15 (Deployment) depends on Phase 14
