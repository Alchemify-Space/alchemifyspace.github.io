---
description: Converting jQuery plugins and animations to React hooks and modern libraries.
---

# jQuery to React Migration

## Overview
Replace jQuery-based interactivity with React hooks and modern animation libraries.

## Migration Strategy

### 1. DOM Manipulation

#### jQuery Pattern → React Pattern
```javascript
// jQuery - DON'T DO THIS
$('#element').addClass('active')
$('#element').fadeIn(300)
```

```tsx
// React - DO THIS
const [isActive, setIsActive] = useState(false)

return (
  <div 
    className={cn("base-class", isActive && "active")}
    style={{ 
      opacity: isActive ? 1 : 0,
      transition: 'opacity 300ms'
    }}
  >
  </div>
)
```

### 2. Event Handlers

#### Click Events
```javascript
// jQuery
$('.btn').click(function() {
  $(this).toggleClass('active')
})
```

```tsx
// React
const [isActive, setIsActive] = useState(false)

<button 
  onClick={() => setIsActive(!isActive)}
  className={cn('btn', isActive && 'active')}
>
  Click me
</button>
```

#### Scroll Events
```javascript
// jQuery
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.header').addClass('sticky')
  }
})
```

```tsx
// React with custom hook
'use client'

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollY
}

// Usage
const scrollY = useScrollPosition()
const isSticky = scrollY > 100
```

### 3. Plugin Replacements

| jQuery Plugin | Modern React Replacement |
|---------------|--------------------------|
| WOW.js (animations) | Framer Motion |
| Swiper.js | Embla Carousel or Swiper React |
| Magnific Popup | Yet Another React Lightbox |
| jQuery Counter | Custom React component with useEffect |
| Nice Select | React Select or Radix Select |
| Jarallax | react-parallax or Framer Motion |

### 4. WOW.js → Framer Motion

```javascript
// Old jQuery + WOW.js
<div class="wow fadeInUp" data-wow-delay="0.1s">
  Content
</div>
```

```tsx
// New Framer Motion
'use client'
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.5 }}
>
  Content
</motion.div>
```

### 5. Swiper.js React Implementation

```tsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Carousel({ items }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Card {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
```

### 6. Counter Animation

```tsx
'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, target, duration])
  
  return <span ref={ref}>{count}</span>
}
```

### 7. Mobile Menu Toggle

```tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white"
          >
            {/* Menu content */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

## Best Practices

1. **Keep components pure** - Don't manipulate DOM directly
2. **Use refs sparingly** - Only for DOM measurements or third-party libs
3. **Lift state up** - Share state between components via props or context
4. **Use custom hooks** - Extract reusable logic into hooks
5. **Debounce scroll/resize** - Use lodash.debounce or custom implementation
6. **Clean up effects** - Always return cleanup functions in useEffect

## Common Patterns

### useMediaQuery Hook
```tsx
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    
    return () => media.removeEventListener('change', listener)
  }, [query])
  
  return matches
}

// Usage
const isMobile = useMediaQuery('(max-width: 768px)')
```

### useLocalStorage Hook
```tsx
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  return [storedValue, setValue] as const
}
```
