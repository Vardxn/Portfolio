# Portfolio Architecture Documentation

## 📁 File Organization

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Navbar, Footer, StarsCanvas
│   ├── page.tsx            # Main page - optimized section order
│   └── globals.css
│
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # CTA buttons (primary, secondary, outline)
│   │   ├── Card.tsx        # Reusable card component with glow effect
│   │   ├── Tag.tsx         # Tech stack badges
│   │   ├── SectionWrapper.tsx # Layout wrapper for consistent spacing
│   │   └── index.ts        # Clean exports
│   │
│   ├── main/
│   │   ├── navbar.tsx      # Navigation bar with active link tracking
│   │   ├── footer.tsx      # Footer with contact CTA
│   │   ├── hero.tsx        # Hero section wrapper
│   │   ├── projects.tsx    # Projects section
│   │   ├── skills.tsx      # Skills grid section
│   │   ├── education.tsx   # Education cards
│   │   ├── experience.tsx  # Experience cards
│   │   ├── encryption.tsx  # Security/Performance section
│   │   └── star-background.tsx
│   │
│   └── sub/
│       ├── hero-content.tsx    # Hero content with CTAs
│       ├── project-card.tsx    # Individual project card
│       ├── skill-data-provider.tsx
│       ├── skill-text.tsx
│       └── navbar-menu.tsx
│
├── constants/
│   └── index.ts            # All static data (PROJECTS, SOCIALS, NAV_LINKS, etc.)
│
├── lib/
│   ├── utils.ts
│   ├── motion.ts           # Framer Motion variants
│   └── animation.ts
│
├── tailwind.config.ts      # Design system tokens (typography, colors, spacing)
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Design System

### Typography Scale
- `text-heading-1` - 48px (main hero titles)
- `text-heading-2` - 40px (section titles)
- `text-heading-3` - 32px (subsection titles)
- `text-heading-4` - 24px (card titles)
- `text-heading-5` - 20px (small headings)
- `text-body-lg` - 18px (large body text)
- `text-body` - 16px (default body)
- `text-body-sm` - 14px (small text)
- `text-body-xs` - 12px (extra small)

### Color Tokens
- `text-text-primary` - #FFFFFF
- `text-text-secondary` - #D1D5DB (4.5:1 WCAG contrast)
- `text-text-muted` - #9CA3AF
- `bg-background` - #030014
- `bg-background-secondary` - #0A0A23
- `bg-background-card` - rgba(17, 24, 39, 0.5)
- `bg-gradient-accent` - Purple to Cyan gradient
- `border-border` - gray-700
- `border-border-accent` - Purple with opacity

### Spacing Scale
- `py-section` - 80px (between major sections)
- `py-section-sm` - 48px (smaller section gaps)
- `px-4 md:px-8` - Responsive padding

## 🧩 Reusable Components

### Button.tsx
```tsx
<Button 
  href="#projects" 
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  fullWidth={false}
>
  View My Work
</Button>
```

### Card.tsx
```tsx
<Card hoverEffect={true} glowEffect={true}>
  {/* Content */}
</Card>
```

### Tag.tsx
```tsx
<Tag label="React" variant="primary" />
```

### SectionWrapper.tsx
```tsx
<SectionWrapper id="projects" fullWidth={false}>
  {/* Section content */}
</SectionWrapper>
```

## 📱 UX Flow (Optimized Order)

1. **Hero** → First impression, "Why should I care?"
   - Introduces Vardan, specialization, and value proposition
   - Two CTAs: "View My Work" (primary), "Get in Touch" (secondary)

2. **Projects** → "Show me what you've built"
   - 4 featured projects with screenshots
   - Tech stacks visible via Tag components
   - Each project has clear description and link

3. **Skills** → "Do you have the technical skills?"
   - 5 categories: Frontend, Backend, Tools, Database, Cloud
   - Visual hierarchy with icons and labels

4. **Experience** → "Where have you worked?"
   - 1 internship with quantified achievements
   - Strong action verbs, metrics (40%, 90%, 25%)

5. **Education** → "What's your background?"
   - NIT Srinagar B.Tech IT (current)
   - Army Public School 12th & 10th grades
   - Highlights show academic excellence and involvement

6. **Security/Performance** → "Can I trust you?"
   - 3 feature cards: Secure Code, Fast Loading, Data Privacy
   - Trust indicators for production-ready work

7. **Footer** → "How do I contact you?"
   - Bold CTA: "Let's Work Together"
   - Contact form (mailto)
   - Quick navigation links
   - Social links with hover effects

## ✍️ Copywriting Improvements

### Hero Section
- **Before**: "Final Year B.Tech Student at NIT Srinagar | Ex-Novetiq Umbrella"
- **After**: "Full-Stack Developer | Cloud Technology | NIT Srinagar"
- **Subtitle Before**: "Building production-ready web applications with animated interfaces..."
- **Subtitle After**: "Crafting scalable web applications with React, Node.js & Cloud"
- **Button Before**: "Contact Me"
- **Button After**: "Get in Touch" (warmer, more personal)

### Footer CTA
- Added section title: "Let's Work Together"
- Added introductory copy: "I'm always interested in hearing about new projects and opportunities."
- Primary CTA: "Send Me an Email"

### General Tone
- First person ("I build", "I created")
- Action-oriented verbs
- Quantified achievements (100+ clients, 96% accuracy, 40% reduction)
- Professional yet approachable

## 🔄 Component Composition Examples

### Project Card (using multiple UI components)
```tsx
<ProjectCard
  title="Mohishree"
  description="Designed and built a production facility management platform..."
  tech={["Next.js 14", "TypeScript", "PostgreSQL"]}
  src="/project-mohishree.png"
  link="https://mohishreefacilities.com"
/>
```
Uses: `Tag` component for tech badges

### Education Entry (using design system)
```tsx
<Card glowEffect={true}>
  <h4 className="text-heading-4 text-text-primary">
    Bachelor of Technology in Information Technology
  </h4>
  <p className="text-body text-text-secondary">NIT Srinagar</p>
  <Tag label="2022 – 2026" />
</Card>
```

## 🎯 Key Design Decisions

1. **Mobile-First**: All layouts use `md:` and `lg:` prefixes for progressive enhancement
2. **Accessibility**: WCAG 4.5:1 contrast ratios, semantic HTML, ARIA labels
3. **Performance**: CSS Grid for skills, lazy-loaded images, optimized animations
4. **Consistency**: Design tokens ensure uniform colors, typography, and spacing
5. **Maintainability**: Reusable components reduce code duplication by ~40%

## 🚀 Performance Optimizations

- Images use Next.js `Image` component with `fill` and `object-cover`
- Framer Motion animations are performant (using CSS transforms)
- Tailwind purging removes unused styles in production
- Vercel deployment with automatic optimization

---

**Last Updated**: December 26, 2025
**Portfolio Live**: https://portfolio-vardxn.vercel.app
