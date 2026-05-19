# AI Insider — Landing Page

A modern, high-performance landing page built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Next.js 16** (App Router, SSR/SSG)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Three Fiber** for 3D particle background
- **Three.js** for WebGL effects

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & design tokens
│   ├── layout.tsx       # Root layout (fonts, metadata)
│   └── page.tsx         # Main landing page
├── components/
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero with 3D background
│   ├── NeuralBackground.tsx  # Three.js particle system
│   ├── About.tsx        # About AI Insider section
│   ├── Services.tsx     # Services cards (4 offerings)
│   ├── ContentStudio.tsx # AI Content Studio section
│   ├── Cases.tsx        # Case studies / portfolio
│   ├── Courses.tsx      # Course cards (3 tiers)
│   ├── Pricing.tsx      # Pricing plans (Starter/Pro/Enterprise)
│   ├── TechStack.tsx    # Scrolling tech logos
│   ├── ClientJourney.tsx # Client testimonials timeline
│   ├── Blog.tsx         # Blog preview cards
│   ├── FAQ.tsx          # Accordion FAQ
│   ├── Contact.tsx      # Contact form + info
│   ├── Footer.tsx       # Footer with links
│   ├── CursorGlow.tsx   # Cursor follow glow effect
│   └── ScrollProgress.tsx # Scroll progress bar
├── data/
│   └── content.ts       # All site content/data
└── lib/
    └── motion.ts        # Framer Motion animation variants
```

## Features

- 3D animated particle background (Three.js)
- Scroll-triggered animations (Framer Motion)
- Rotating text effect in hero
- Animated counters
- Glass morphism cards
- Gradient text effects
- Cursor glow tracking
- Scroll progress indicator
- Mobile-responsive design
- Dark theme matching aiinsider.it.com

## Legacy Static Files

Old static HTML/CSS/JS files are preserved in `_old_static/`.
