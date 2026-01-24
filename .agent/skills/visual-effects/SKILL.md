---
description: Guide for adding visual effects using Animate.css and Odometer.
---

# Visual Effects Skill

## 1. Scroll Animations (Animate.css + WOW.js)
The theme uses a custom animation setup likely allowing `wow.js` to trigger Animate.css classes.
- **Classes**:
    - `wow`: Required to trigger the animation on scroll.
    - `fadeInLeft`, `fadeInRight`, `fadeInUp`: Standard Animate.css effects.
    - `img-custom-anim-left`, `img-custom-anim-right`: Custom theme specific animations often used on images.

```html
<div class="wow img-custom-anim-left">
    <img src="..." />
</div>

<h2 class="wow fadeInUp" data-wow-delay="0.3s">
    Animated Title
</h2>
```

## 2. Odometer (Number Counters)
Used for statistics counters.
- **HTML Structure**:
    ```html
    <div class="odometer" data-count="50">0</div>
    ```
    - The `data-count` attribute sets the target number.
    - Ensure the odometer script is initialized (usually automatically finds `.odometer` classes).
