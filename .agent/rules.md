# Frontend Development Rules

## 1. Bootstrap & Layout
- **Always** use the Bootstrap 5 grid (`row`, `col-*`) for layout.
- **Always** use `trucker__container` for the main page width wrapper.
- **Prefer** Bootstrap utility classes (`d-flex`, `mb-4`, `text-center`) over writing new CSS for standard spacing/alignment.

- **Typography**: Use the custom theme classes (`trucker__fs-*`, `trucker__fw-*`) to match the design system exactly.
- **Icons**: Use FontAwesome Pro (`fa-light`, `fa-sharp`, `fa-brands`).
- **Buttons**: Use standard theme buttons (`trucker__btn-style-1`).

## 3. Code Structure
- **Sections**: Wrap every major page section in a `<section>` tag with a descriptive class.
- **Comments**: Start and End every section with clear comments:
  ```html
  <!-- Start About Area -->
  <section>...</section>
  <!-- End About Area -->
  ```
- **Images**: Always include an `alt` attribute describing the image content.

## 4. Workflows
- **New Pages**: When creating a new page, always start by copying the `header` and `footer` from `index.html` or `about.html` to ensure navigation and scripts are correct.
