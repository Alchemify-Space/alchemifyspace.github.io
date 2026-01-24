---
description: How to scaffold a new HTML page in the Alchemify project.
---

# Scaffold New Page Workflow

This workflow guides you through creating a new page consistent with the Alchemify theme.

## 1. File Creation
Create a new `.html` file in the root directory (e.g., `new-page.html`).

## 2. Base Structure
Copy the full `<html>`, `<head>`, and `<body>` structure from `about.html`.
- **Retain**: CSS links, Preloader, Scroll-to-top, Header, Footer, and JS scripts at the bottom.
- **Clear**: The middle content (between `<!-- Start Breadcrumb Area -->` and `<!-- Start Footer [...] -->`).

## 3. Update Metadata
- Update the `<title>` tag.
- Update the Breadcrumb section title and links:
  ```html
  <section class="trucker__hero-area trucker__breadcrumb-area" ...>
     <h2>New Page Title</h2>
     ...
     <a href="new-page.html">New Page</a>
  </section>
  ```

## 4. Add Content Sections
Use the **Bootstrap Skill** to add new sections.
- Create `<section>` wrappers.
- Use `.trucker__container`.
- Use `.row` and `.col-*` for layout.

## 5. Verify
- Open the file in the browser (if possible) or check code structure against `about.html` to ensure no unclosed tags.
