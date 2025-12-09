# Deployment Guide

## Image Issue - FIXED ✅

### What Was Wrong
Images were not showing on Vercel because they were in the wrong location. Vite requires static assets to be in the `public` folder to be served correctly in production.

### What Was Fixed
1. ✅ Moved `images/` folder to `public/images/`
2. ✅ Updated all image paths in `src/imageData.js` from `'./images/...'` to `'/images/...'`
3. ✅ Images are now correctly copied to `dist/images/` during build

### How It Works Now
- Files in the `public` folder are served from the root URL
- Image paths like `/images/photo.jpg` will work correctly on Vercel
- The build process automatically copies `public/` contents to `dist/`

## Deploy to Vercel

### Method 1: Using Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Setup and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N** (or **Y** if updating)
   - Project name? (press Enter for default)
   - Directory? **./** (press Enter)
   - Want to override settings? **N**

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix image paths for Vercel deployment"
   git push
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Method 3: Using Git Integration (Automatic)

If you've already connected your repo to Vercel:
1. Just push to your main branch
2. Vercel automatically rebuilds and deploys
3. Check deployment status in Vercel dashboard

## Verify Deployment

After deploying, verify that:
- ✅ Welcome screen loads
- ✅ All 33 images are visible
- ✅ Background colors change on scroll
- ✅ Animations work smoothly
- ✅ Mobile responsive design works

## Troubleshooting

### Images Still Not Showing?

1. **Clear Vercel cache**:
   - Go to Vercel dashboard
   - Project Settings → General
   - Scroll to "Clear Build Cache"
   - Redeploy

2. **Check build logs**:
   - Look for errors during build
   - Verify images were copied to dist/

3. **Verify paths**:
   - All image paths in `src/imageData.js` should start with `/images/`
   - Not `./images/` or `../images/`

### CORS Issues with Color Extraction?

If ColorThief fails on Vercel:
- Images are served from same domain, so CORS should work
- The `crossOrigin="anonymous"` attribute is already set
- Falls back to white background if extraction fails

## Build Commands (Reference)

```bash
# Development
npm run dev

# Production build (local test)
npm run build
npm run preview

# Deploy to Vercel
vercel              # Preview deployment
vercel --prod       # Production deployment
```

## Environment Variables

Currently none required. If you need to add any:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add variables there
3. Redeploy

## Performance on Vercel

Expected metrics:
- **Initial Load**: < 2s
- **Lighthouse Score**: 90+
- **Image Loading**: Lazy loaded for optimal performance
- **Animations**: Smooth 60fps

---

Your birthday website should now work perfectly on Vercel! 🎉
