---
description: Implementation guide for interactive components like Swiper sliders, Nice Select, and Popups.
---

# Interactive Components Skill

## Context
The project relies on several third-party libraries for interactivity. This skill outlines how to implement them correctly.

## 1. Swiper.js (Sliders)
Used for Testimonials, Team carousels, etc.
- **HTML Structure**:
    ```html
    <div class="swiper my-custom-swiper-class">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
           <!-- Content -->
        </div>
      </div>
      <!-- Optional Controls -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    ```
- **Initialization**: Ensure new Swiper instances are initialized in the main JS file (check `assets/js/custom.js` or similar if available, otherwise script tag).

## 2. Nice Select
Used for styling `<select>` elements (e.g., Language selector).
- **Usage**: simply add the class usage or initialization as required by the theme's JS. Usually targeting `select` elements.

```html
<select class="trucker__language-selection">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</select>
```

## 3. Magnific Popup
Used for lightboxes (images/videos).
- **Video Popup**:
    ```html
    <a href="https://www.youtube.com/watch?v=VIDEO_ID" class="popup-video">
        <i class="fa-solid fa-play"></i>
    </a>
    ```
- **Image Popup**:
    ```html
    <a href="path/to/image.jpg" class="popup-image">
        <img src="..." />
    </a>
    ```
