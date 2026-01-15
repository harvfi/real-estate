# Deploying Blackstar Investments to Vercel

This guide will walk you through deploying your Blackstar Investments landing page to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works perfectly)
- A [Gemini API key](https://aistudio.google.com/app/apikey) for the AI assistant feature
- Git installed on your machine

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to your project directory**:
   ```bash
   cd /Users/chehannahhayden/Downloads/copy-of-blackstar-investments-landing-page
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press Enter (uses folder name) or enter custom name
   - Directory? Press Enter (current directory)
   - Override settings? **N**

4. **Set environment variable**:
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   
   When prompted:
   - Enter your Gemini API key
   - Select all environments (production, preview, development)

5. **Redeploy with environment variables**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already):
   ```bash
   cd /Users/chehannahhayden/Downloads/copy-of-blackstar-investments-landing-page
   git init
   git add .
   git commit -m "Initial commit - Blackstar Investments"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Vercel will auto-detect Vite framework

3. **Configure Environment Variables**:
   - Before deploying, click "Environment Variables"
   - Add: `GEMINI_API_KEY` = `your_gemini_api_key_here`
   - Click "Deploy"

## Custom Domain Setup

Once deployed, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain (e.g., `blackstarinvestments.com`)
4. Follow Vercel's DNS configuration instructions

## Environment Variables

The following environment variable is required:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key for AI assistant | Yes |

## Verifying Your Deployment

After deployment, verify:

- ✅ Homepage loads correctly
- ✅ Navigation works smoothly
- ✅ AI Assistant responds to queries
- ✅ Contact form shows confirmation
- ✅ All sections render properly
- ✅ Mobile responsiveness works

## Troubleshooting

### AI Assistant Not Working

**Issue**: "API Key not configured" message appears

**Solution**: 
1. Verify `GEMINI_API_KEY` is set in Vercel dashboard
2. Redeploy the project after adding the variable
3. Check that the API key is valid at [Google AI Studio](https://aistudio.google.com/)

### Build Fails

**Issue**: Build fails during deployment

**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `vite.config.ts` is properly configured

### 404 Errors on Routes

**Issue**: Refreshing the page shows 404

**Solution**: The `vercel.json` file should already handle this with SPA rewrites. If issues persist, verify the file exists and is properly formatted.

## Project Structure

```
copy-of-blackstar-investments-landing-page/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── GeminiAssistant.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── App.tsx             # Main application
├── geminiService.ts    # Gemini API integration
├── index.html          # HTML template
├── index.tsx           # React entry point
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies
```

## Performance Optimization

Your site is already optimized with:
- ⚡ Vite for fast builds
- 📦 Code splitting
- 🎨 Optimized CSS
- 🖼️ Lazy-loaded images via Unsplash CDN

## Support

For issues with:
- **Vercel deployment**: [Vercel Documentation](https://vercel.com/docs)
- **Gemini API**: [Google AI Studio](https://ai.google.dev/)
- **Vite**: [Vite Documentation](https://vitejs.dev/)

---

**Your site is now ready to deploy! 🚀**

Choose either deployment option above and your Blackstar Investments landing page will be live in minutes.
