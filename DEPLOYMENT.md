# Portfolio Deployment Guide

Your portfolio has been successfully pushed to GitHub at: https://github.com/Vardxn/Portfolio.git

## Hosting Options

### Option 1: Vercel (Recommended for Next.js)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your repository: `Vardxn/Portfolio`
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"
7. Your site will be live at: `https://your-project-name.vercel.app`

**Automatic Deployments**: Every push to `main` branch will trigger a new deployment.

### Option 2: Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your repository: `Vardxn/Portfolio`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 3: GitHub Pages (Static Export)

For GitHub Pages, you need to export as static:

1. Update `package.json` to add export script:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```

2. Create `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
     images: { unoptimized: true }
   }
   ```

3. Run: `npm run export`
4. Deploy the `out` folder to GitHub Pages

## Quick Deploy to Vercel (CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd c:\Users\varda\OneDrive\Documents\Code\portfolio
vercel

# Follow the prompts to link your project
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Repository
- GitHub: https://github.com/Vardxn/Portfolio.git
- Branch: main
- Last Push: December 26, 2025
