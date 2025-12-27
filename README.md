# Vardan Pal — Space-Themed Portfolio (Next.js 14)

Live site: https://portfolio-vardxn.vercel.app/

A space-inspired personal portfolio for Vardan Pal (Full-Stack & Cloud). Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion animations, and a looping black-hole background video for an immersive glass/liquid look.

## Highlights
- Hero with animated black-hole video, glassmorphism overlay, and quick CTAs
- Projects, skills, experience, and education sections with smooth motion
- Responsive, mobile-first layout with optimized images and preload hints
- Reusable UI components and motion presets for consistent feel

## Tech Stack
- Next.js 14
- TypeScript, React 18
- Tailwind CSS, tailwind-merge
- Framer Motion

## Run Locally
```bash
# install deps
npm install

# start dev server
npm run dev
# open http://localhost:3000

# production build
npm run build
npm run start
```

## Project Structure (brief)
```
app/              # Next.js app router pages/layout/styles
components/       # main sections + shared UI
constants/        # nav links, data
lib/              # motion utilities, helpers
public/           # images, videos (blackhole.webm), assets
```

## Notes
- The hero video uses /public/videos/blackhole.webm; add an mp4 fallback if needed.
- Update social links and project data in constants/index.ts.

## Attribution
This portfolio was customized from the original space-portfolio template; design and content now represent Vardan Pal.
