# OpenCode Skills & Workflows Index

## Project: Alchemify.Space Next.js Migration

This directory contains specialized skills and workflows for the HTML to Next.js 15 migration project.

---

## Available Skills

### 1. HTML to Next.js Conversion (`html-to-nextjs/`)
**Purpose**: Convert static HTML pages to Next.js App Router components

**Key Topics**:
- File structure mapping
- JSX conversion rules
- Bootstrap to Tailwind class mapping
- Trucker theme CSS variables
- Image conversion to Next.js Image component
- SEO metadata implementation

**Use when**: Migrating any HTML page to Next.js

---

### 2. jQuery to React Migration (`jquery-to-react/`)
**Purpose**: Replace jQuery plugins and interactivity with React hooks and modern libraries

**Key Topics**:
- DOM manipulation → React state
- Event handlers conversion
- Plugin replacements (WOW.js, Swiper, etc.)
- Framer Motion animations
- Custom hooks (useScrollPosition, useMediaQuery, etc.)
- Mobile menu implementation

**Use when**: Converting interactive jQuery components to React

---

### 3. Tailwind Migration (`tailwind-migration/`)
**Purpose**: Convert Bootstrap CSS classes to Tailwind CSS

**Key Topics**:
- Complete Bootstrap → Tailwind mapping table
- Grid system conversion
- Spacing, typography, colors mapping
- Responsive breakpoints
- Trucker-specific patterns
- Custom theme configuration

**Use when**: Converting CSS classes from Bootstrap to Tailwind

---

### 4. Next.js Layouts (`nextjs-layouts/`)
**Purpose**: Set up App Router structure with layouts and routing

**Key Topics**:
- App Router directory structure
- Root layout configuration
- Marketing layout with Header/Footer
- Dynamic routes with generateStaticParams
- Error boundaries (error.tsx, not-found.tsx)
- Loading states (loading.tsx)
- Route groups and parallel routes

**Use when**: Setting up page structure and routing

---

### 5. shadcn/ui Components (`shadcn-components/`)
**Purpose**: Use shadcn/ui component library with custom theming

**Key Topics**:
- shadcn/ui installation
- Theme configuration for Alchemify colors
- Button, Card, Dialog, Form components
- Sheet for mobile menus
- Custom component variants
- Best practices for component usage

**Use when**: Building UI components with shadcn/ui

---

## Available Workflows

### 1. Migrate HTML Page (`workflows/migrate-html-page.md`)
**Purpose**: Step-by-step workflow for migrating a single HTML page

**Steps**:
1. Create page file in App Router
2. Add Next.js metadata
3. Extract and create section components
4. Convert HTML to JSX
5. Handle client-side interactivity
6. Migrate animations (WOW.js → Framer Motion)
7. Handle images with Next.js Image
8. Compose page from sections
9. Test and verify
10. Create loading state

**Use this workflow**: When starting migration of any HTML page

---

## Legacy Skills (Bootstrap/jQuery Era)

### Bootstrap UI (`bootstrap-ui/`)
**Status**: Legacy - only for reference when reading original HTML
**Purpose**: Understanding original Bootstrap patterns

### Visual Effects (`visual-effects/`)
**Status**: Legacy - animations will be replaced with Framer Motion
**Purpose**: Reference for original animation patterns

### Interactive Components (`interactive-components/`)
**Status**: Legacy - interactivity will be replaced with React
**Purpose**: Reference for original jQuery component patterns

---

## How to Use

### For New Migrations:
1. Read the workflow: `workflows/migrate-html-page.md`
2. Reference skills as needed during conversion
3. Follow the step-by-step process

### For Specific Tasks:
- **Converting classes** → Use `tailwind-migration/` skill
- **Converting animations** → Use `jquery-to-react/` skill
- **Setting up routing** → Use `nextjs-layouts/` skill
- **Building components** → Use `shadcn-components/` skill

### For Understanding Original Code:
- Reference legacy skills to understand Bootstrap/jQuery patterns
- Then convert using modern Next.js patterns

---

## Quick Reference

### File Locations
```
.agent/
├── skills/
│   ├── html-to-nextjs/SKILL.md
│   ├── jquery-to-react/SKILL.md
│   ├── tailwind-migration/SKILL.md
│   ├── nextjs-layouts/SKILL.md
│   ├── shadcn-components/SKILL.md
│   ├── bootstrap-ui/SKILL.md (legacy)
│   ├── interactive-components/SKILL.md (legacy)
│   └── visual-effects/SKILL.md (legacy)
├── workflows/
│   ├── migrate-html-page.md
│   └── scaffold-new-page.md (legacy)
├── rules.md (legacy - Bootstrap rules)
└── rules-nextjs.md (Next.js rules)
```

### Key Configuration Files
```
AGENTS.md                    # Project overview & architecture
.opencode/opencode.toml      # OpenCode CLI configuration
```

---

## Migration Priority

### Phase 1: Foundation
- Read `nextjs-layouts/` skill
- Set up App Router structure
- Create Header, Footer, Layout components

### Phase 2: Components
- Read `shadcn-components/` skill
- Install and configure shadcn/ui
- Build reusable UI components

### Phase 3: Page Migration
- Follow `workflows/migrate-html-page.md`
- Reference `html-to-nextjs/` skill
- Use `tailwind-migration/` for class conversion
- Use `jquery-to-react/` for animations

### Phase 4: Polish
- Optimize performance
- Add SEO metadata
- Test all functionality

---

## Support

For issues or questions:
- Check the specific skill documentation
- Review AGENTS.md for architecture decisions
- Follow the workflow step-by-step
