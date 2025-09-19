# Deployment Guide - Personal Portfolio

## 🚀 Quick Deploy Steps

### 1. Pre-deployment Checklist
- ✅ Project structure optimized
- ✅ TypeScript types complete
- ✅ SEO metadata configured
- ✅ Images optimized
- ✅ ESLint configuration ready

### 2. Environment Setup
Copy `.env.example` to `.env.local` and update:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Cao Van Huy Portfolio"
CONTACT_EMAIL=huycv18.work@gmail.com
GOOGLE_SITE_VERIFICATION=your-verification-code
```

### 3. Build Test (Run locally first)
```bash
npm run build
npm run start
```

### 4. GitHub Setup
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/yourusername/personal-portfolio.git
git push -u origin main
```

### 5. Vercel Deployment
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Deploy!

### 6. Custom Domain (Optional)
- Add your custom domain in Vercel dashboard
- Update DNS records as instructed
- SSL automatically configured

## 📋 Post-Deployment Checklist
- [ ] Test all sections and navigation
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form (if implemented)
- [ ] Verify SEO meta tags
- [ ] Add to Google Search Console
- [ ] Update LinkedIn/GitHub with portfolio URL

## 🔧 Troubleshooting
- **Build errors**: Check TypeScript types and imports
- **Image issues**: Verify image paths in public folder
- **CSS issues**: Check Tailwind configuration
- **Performance**: Use Vercel Analytics for monitoring