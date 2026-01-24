---
description: Expert usage of Bootstrap 5 and FontAwesome for the Alchemify project.
---

# Bootstrap 5 & FontAwesome UI Skill

## Context
This project uses **Bootstrap 5** (via `bootstrap.min.css`) and **FontAwesome Pro** (`font-awesome-pro.css`). This skill defines the standard way to build layouts and UI components to maintain consistency with the existing theme.

## 1. Grid & Layout System
Always use the Bootstrap 5 grid system for layout structure.
- **Containers**: Use `trucker__container` (custom wrapper) or `container`/`container-fluid` where appropriate.
- **Rows & Cols**: Nest standard `.row` and `.col-*` classes.

```html
<!-- CORRECT -->
<div class="row">
    <div class="col-lg-6 col-md-12">
        <!-- Content -->
    </div>
    <div class="col-lg-6 col-md-12">
        <!-- Content -->
    </div>
</div>
```

## 2. Utility Classes vs Custom CSS
Prefer Bootstrap utility classes for standard spacing, flexbox alignment, and display properties.
- **Spacing**: `mb-4`, `py-5`, `gap-3`
- **Flex**: `d-flex`, `align-items-center`, `justify-content-between`
- **Text**: `text-center`, `text-white`

**Exception**: specific font styling often uses custom classes like `trucker__fs-*`, `trucker__fw-*`, `trucker__deep-sea-blue`. Use these for typography consistency over Bootstrap text utilities when matching the theme.

```html
<!-- TYPOGRAPHY PATTERN -->
<h2 class="trucker__fs-45 trucker__fw-700 trucker__deep-sea-blue">
    Title Here
</h2>
```

## 3. FontAwesome Icons
Use the `<i>` tag with FontAwesome Pro classes.
- **Solid**: `fa-solid`
- **Regular**: `fa-regular`
- **Light**: `fa-light` (Frequently used in this theme)
- **Sharp**: `fa-sharp`
- **Brands**: `fa-brands`

```html
<!-- Example -->
<i class="fa-light fa-arrow-right"></i>
<i class="fa-brands fa-facebook-f"></i>
```

## 4. Buttons
Use the custom button classes found in the theme.
- `trucker__btn-style-1`: Primary action button.

```html
<a href="#" class="trucker__btn-style-1">
    Contact Us <i class="fa-light fa-arrow-up-right"></i>
</a>
```
